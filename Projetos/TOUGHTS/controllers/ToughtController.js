const Tought = require("../models/Tought");
const User = require("../models/User");

module.exports = class ToughtsController {
	static async showToughts(req, res) {

        const toughtsData = await Tought.findAll({
			include: User,  // carrega os dados da tabela User
		})

		// o metodo get do result junta os dados das duas tabelas em um unico objeto
		const toughts = toughtsData.map((result) => result.get({plain: true}));

        console.log(toughts)
		res.render("toughts/home", {toughts});
	}

	static async dashboard(req, res) {
		const userid = req.session.userid;

		// verificando se usuario existe
		const user = await User.findOne({
			where: {
				id: userid,
			},
			include: Tought, // recebe os oensamento que tem o usuario incluso
			plain: true, // recebe so os dados interessantes
		});

		if (!user) {
			res.redirect("/login");
		}

		// tratando os dados para rec3eber somente o dataValues

		const toughts = user.Toughts.map((result) => result.dataValues);

		let emptyToughts = false;

		if (toughts.length === 0) {
			emptyToughts = true;
		}

		console.table(toughts);

		res.render("toughts/dashboard", { toughts, emptyToughts });
	}

	static createToughts(req, res) {
		res.render("toughts/create");
	}

	static async createToughtsSave(req, res) {
		try {
			const tought = {
				title: req.body.title,
				UserId: req.session.userid,
			};
			console.log(tought);
			await Tought.create(tought);

			req.flash("message", "Pensamento criado com sucesso!");

			req.session.save(() => {
				res.redirect("/toughts/dashboard");
			});
		} catch (error) {
			console.log(error, "error no createtoughtsave");
		}
	}

	static editToughts(req, res) {
		res.render("toughts/edit");
	}

	static async removeToughts(req, res) {
		// pegando id da rota
		const id = req.body.id;
		const UserId = req.session.userid;

		try {
			await Tought.destroy({
				where: { id: id, UserId: UserId },
			});

			req.flash("message", "Pensamento removido com sucesso!");

			req.session.save(() => {
				res.redirect("/toughts/dashboard");
			});
		} catch (error) {
			console.log(error);
		}

		console.log(id);
	}

	static async updateTought(req, res) {
		const id = req.params.id;

		const tought = await Tought.findOne({ where: { id: id }, raw: true });

		res.render("toughts/edit", { tought });
	}

	static async updateToughtSave(req, res) {
		const { id, title } = req.body;

		const tought = { title };

        try {
            await Tought.update(tought, { where: { id: id } });
            req.flash("message", "Pensamento atualizado com sucesso!");
    
            req.session.save(() => {
                res.redirect("/toughts/dashboard");
            });
            } catch (error) {
            console.log(error);
        }
	}
};
