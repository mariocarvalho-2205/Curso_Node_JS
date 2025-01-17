const createUserToken = require("../helpers/create-user-token");
const getUserByToken = require("../helpers/get-user-by-token");
const getToken = require("../helpers/get-token");
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

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
	const { name, email, phone, password, confirmpassword, image } = req.body;
	console.log("backend", name)
	console.log("Dados recebidos no registro:", req.body);

	// Validations
	if (!name) {
		res.status(422).json({ message: ["O nome é obrigatório!"] });
		return; // o return cancela o resto do codigo
	}

	if (name.length < 3) {
		res.status(422).json({ message: "O nome precisa ter no minimo 3 caracteres!" });
		return; // o return cancela o resto do codigo
	}


	if (!email) {
		res.status(422).json({ message: "O email é obrigatório!" });
		return; // o return cancela o resto do codigo
	}

	// Check is email is valid
	if (!isValidEmail(email)) {
		res.status(422).json({
			message: "O email precisa ser um email valido!",
		});
		return;
	}

	if (!phone) {
		res.status(422).json({ message: "O telefone é obrigatório!" });
		return; // o return cancela o resto do codigo
	}

	if (!password) {
		res.status(422).json({ message: "A senha é obrigatória!" });
		return; // o return cancela o resto do codigo
	}

	if (password.length < 6) {
		res.status(422).json({
			message: "A senha precisa ter no minimo 6 caracteres!",
		});
		return;
	}

	if (!confirmpassword) {
		res.status(422).json({
			message: "A confirmação da senha é obrigatória!",
		});
		return; // o return cancela o resto do codigo
	}

	if (password !== confirmpassword) {
		res.status(422).json({
			message: "A senha e a confirmação de senha precisam ser iguais",
		});
		return; // o return cancela o resto do codigo
	}

	// Check if user exists - verifico se usuario existe
	const userExists = await User.findOne({ email: email });
	if (userExists) {
		res.status(422).json({ message: "Por favor utilize outro email!" });
		return;
	}

	// create a password
	// 1 - criamos o salto com a quantidade de caracteres que serao encriptados
	const salt = await bcrypt.genSalt(12);
	// 2 - criamos a senha passando a senha do usuario e o salt
	const passwordHash = await bcrypt.hash(password, salt);
	// 3 - criamos o usuario
	const user = new User({
		name,
		email,
		phone,
		password: passwordHash,
		image,
	});

	try {
		const newUser = await user.save();
		await createUserToken(newUser, req, res);

		// await res.status(201).json({ message: "Usuario criado", newUser})
		return;
	} catch (error) {
		res.status(500).json({ message: error });
	}
};

const login = async (req, res) => {
	const { email, password } = req.body;

	if (!email) {
		res.status(422).json({ message: "O email é pbrigatório!" });
		return;
	}

	if (!isValidEmail) {
		res.status(422).json({
			message: "O email precisa ser um email valido!",
		});
		return;
	}

	if (!password) {
		res.status(422).json({ message: "A senha é obrigatória!" });
		return;
	}

	if (password.length < 6) {
		res.status(422).json({
			message: "A senha precisa ter no minimo 6 caracteres!",
		});
		return;
	}

	// Check if user exists - verifico se usuario existe
	const user = await User.findOne({ email: email });
	if (!user) {
		res.status(422).json({
			message: "Não há usuario cadastrado com esse email!",
		});
		return;
	}

	const chechPassword = await bcrypt.compare(password, user.password);

	if (!chechPassword) {
		res.status(422).json({ message: "Senha invalida!" });
		return;
	}

	await createUserToken(user, req, res);
};

const checkUser = async (req, res) => {
	let currentUser;

	if (req.headers.authorization) {
		const token = getToken(req);
		// console.log("Token in controller", token)
		const decoded = jwt.verify(token, "nossosecret");
		// console.log(decoded.id)
		currentUser = await User.findById(decoded.id);
		// console.log(currentUser)
		currentUser.password = undefined;
	} else {
		currentUser = null;
	}

	res.status(200).send(currentUser);
};

const getUserById = async (req, res) => {
	const { id } = req.params;
	const user = await User.findById(id).select("-password"); // select com o nome do campo para nao exibir ele com sinal de menos na frente

	if (!user) {
		res.status(422).json({ message: "Usuario não encontrado!" });
		return;
	}

	res.status(200).json({ user });
};

const editUser = async (req, res) => {
	const { id } = req.params;

	// check if user exists
	const token = getToken(req);
	const user = await getUserByToken(token);

	const { name, email, password, confirmpassword, phone } = req.body;


	if (req.file) {
		user.image = req.file.filename
	}

	// validations
	if (!name) {
		res.status(422).json({ message: "O nome é obrigatório!" });
		return; // o return cancela o resto do codigo
	}

	user.name = name;

	if (!email) {
		res.status(422).json({ message: "O email é obrigatório!" });
		return; // o return cancela o resto do codigo
	}

	// Check is email is valid
	if (!isValidEmail(email)) {
		res.status(422).json({
			message: "O email precisa ser um email valido!",
		});
		return;
	}

	// check if has already taken
	const userExists = await User.findOne({ email: email });

	console.log(user.email, email, userExists);
	if (user.email !== email && userExists) {
		res.status(422).json({ message: "Por favor utilize outro email!" });
		return;
	}

	user.email = email;

	if (!phone) {
		res.status(422).json({ message: "O telefone é obrigatório!" });
		return; // o return cancela o resto do codigo
	}

	user.phone = phone;

	// if (!password) {
	// 	res.status(422).json({ message: "A senha é obrigatória!" });
	// 	return; // o return cancela o resto do codigo
	// }

	// if (password.length < 6) {
	// 	res.status(422).json({
	// 		message: "A senha precisa ter no minimo 6 caracteres!",
	// 	});
	// 	return;
	// }

	if (!confirmpassword) {
		res.status(422).json({
			message: "A confirmação da senha é obrigatória!",
		});
		return; // o return cancela o resto do codigo
	}

	if (password !== confirmpassword) {
		res.status(422).json({
			message: "A senha e a confirmação de senha precisam ser iguais",
		});
		return; // o return cancela o resto do codigo
	} else if (password === confirmpassword && password != null) {
		// create a password
		// 1 - criamos o salto com a quantidade de caracteres que serao encriptados
		const salt = await bcrypt.genSalt(12);
		// 2 - criamos a senha passando a senha do usuario e o salt
		const passwordHash = await bcrypt.hash(password, salt);

		user.password = passwordHash;
	}

	try {
		const updatedUser = await User.findOneAndUpdate(
			{ _id: user._id },
			{ $set: user },
			{ new: true }
		);

		res.status(200).json({message: "Usuario atualizado com sucesso!"})
	} catch (error) {
		res.status(500).json({ message: error });
	}
};

module.exports = {
	register,
	login,
	checkUser,
	getUserById,
	editUser,
};
