const User = require("../models/User");

// encriptar a senha
const bcrypt = require("bcryptjs");

module.exports = class AuthController {
	static login(req, res) {
		res.render("auth/login");
	}

	static async loginPost(req, res) {
		const { email, password } = req.body;

		// find user?
		const user = await User.findOne({ where: { email: email } });

		if (!user) {
			req.flash("message", "Usuário não encontrado");
			res.render("auth/register");
			return;
		}

		// check if password match
		const passwordMatch = bcrypt.compareSync(password, user.password);

		if (!passwordMatch) {
			req.flash("message", "Senha incorreta");
			res.render("auth/login");
            return
		}

		// initialize session
		req.session.userid = user.id;
		

		req.flash("message", "Autenticação realizada com sucesso!");

		/* Salvando a sessão */
		req.session.save(() => {
			res.redirect("/");
		});
	}

	static register(req, res) {
		res.render("auth/register");
	}

	static async registerPost(req, res) {
		const { name, email, password, confirmPassword } = req.body;
		

		/* Verificando se as senhas conferem */
		if (password != confirmPassword) {
			// passando a mensagem de erro para o front via flash
			req.flash("message", "As senhas não conferem, tente novamente!");
			res.render("auth/register");
			return;
		}

		/* Verificando se usuario existe */
		const checkIfUserExists = await User.findOne({
			where: { email: email },
		});
		if (checkIfUserExists) {
			req.flash("message", "O email já está em uso");
			res.render("auth/register");
			return;
		}

		/* Criando uma senha encriptada */
		const salt = bcrypt.genSaltSync(10); // quantidade de caracteres para criação de senha
		const hashedPassword = bcrypt.hashSync(password, salt); // passado como parametros a senha e o salt

		const user = {
			name,
			email,
			password: hashedPassword, // no lugar da senha e passado a hash
		};

		try {
			const createdUser = await User.create(user);

			// initialize session
			req.session.userid = createdUser.id;

			req.flash("message", "Cadastro realizado com sucesso!");

			/* Salvando a sessão */
			req.session.save(() => {
				res.redirect("/");
			});
		} catch (error) {
			console.error(error);
		}
	}

	static async logout(req, res) {
		req.session.destroy();
		res.redirect("/login");
	}
};
