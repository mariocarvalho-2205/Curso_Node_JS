const createUserToken = require('../helpers/create-user-token');
const User = require('../models/User')
const bcrypt = require('bcrypt')


// module.exports = class UserController {
//     static async register(req, res) {
//         res.json('Olá Get a Pet')
//     }
// }

function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

const register = async (req, res) => {
    const { name, email, phone, password, confirmpassword, image} = req.body


    // Validations
    if(!name) {
        res.status(422).json({ message: "O nome é obrigatório!"})
        return // o return cancela o resto do codigo
    }
    
    if(!email) {
        res.status(422).json({ message: "O email é obrigatório!"})
        return // o return cancela o resto do codigo
    }

    // Check is email is valid
    if (!isValidEmail(email)) {
        res.status(422).json({ message: "O email precisa ser um email valido!"})
        return
    }

    if(!phone) {
        res.status(422).json({ message: "O telefone é obrigatório!"})
        return // o return cancela o resto do codigo
    }
    
    if(!password) {
        res.status(422).json({ message: "A senha é obrigatória!"})
        return // o return cancela o resto do codigo
    }

    if(password.length < 6) {
        res.status(422).json({ message: "A senha precisa ter no minimo 6 caracteres!"})
        return
    }
    
    if(!confirmpassword) {
        res.status(422).json({ message: "A confirmação da senha é obrigatória!"})
        return // o return cancela o resto do codigo
    }

    if(password !== confirmpassword) {
        res.status(422).json({ message: "A senha e a confirmação de senha precisam ser iguais"})
        return // o return cancela o resto do codigo
    }

    // Check if user exists - verifico se usuario existe
    const userExists = await User.findOne({ email: email})
    if (userExists) {
        res.status(422).json({ message: "Por favor utilize outro email!"})
        return
    }

    // create a password
    // 1 - criamos o salto com a quantidade de caracteres que serao encriptados
    const salt = await bcrypt.genSalt(12)
    // 2 - criamos a senha passando a senha do usuario e o salt
    const passwordHash = await bcrypt.hash(password, salt)
    // 3 - criamos o usuario
    const user = new User({
        name,
        email,
        phone,
        password: passwordHash,
        image
    })

    try {

        const newUser = await user.save()
        await createUserToken(newUser, req, res)

        // await res.status(201).json({ message: "Usuario criado", newUser})
        return
    } catch (error) {
        res.status(500).json({ message: error })
    }
}

const login = async (req, res) => {
    const { email, password } = req.body

    if (!email) {
        res.status(422).json({ message: "O email é pbrigatório!"})
        return
    }

    if (!isValidEmail) {
        res.status(422).json({ message: "O email precisa ser um email valido!" })
        return
    }

    if (!password) {
        res.status(422).json({ message: "A senha é obrigatória!" })
        return
    }

    if (password.length < 6) {
        res.status(422).json({ message: "A senha precisa ter no minimo 6 caracteres!" })
        return
    }

    // Check if user exists - verifico se usuario existe
    const user = await User.findOne({ email: email })
    if (!user) {
        res.status(422).json({ message: "Não há usuario cadastrado com esse email!" })
        return
    }

    const chechPassword = await bcrypt.compare(password, user.password)

    if (!chechPassword) {
        res.status(422).json({ message: "Senha invalida!"})
        return
    }

    await createUserToken(user, req, res)

}

const checkUser = async (req, res) => {
    let currentUser

    console.log(req.headers.authorization)

    if (req.headers.authorization) {
    } else {
        currentUser = null
    }

    res.status(200).send(currentUser)
}

module.exports = {
    register,
    login,
    checkUser
}