const Pet = require("../models/Pet");

// helpers
const getToken = require("../helpers/get-token");
const getUserByToken = require("../helpers/get-user-by-token");
const ObjectId = require("mongoose").Types.ObjectId;

const getAll = async (req, res) => {
	try {
		const pets = await Pet.find().sort("-createdAt");
		res.status(200).json({ pets: pets });
	} catch (error) {
		res.status(500).json({ message: "algo deu errado", error });
	}
};

const getAllUserPets = async (req, res) => {
	// get user
	const token = getToken(req);
	const user = await getUserByToken(token);

	try {
		const pets = await Pet.find({ "user._id": user._id }).sort(
			"-createdAt"
		);
		res.status(200).json({ pets });
	} catch (error) {
		res.status(500).json({
			message: "Lamento. Não foi possivel resgatar seus pets!",
			error,
		});
	}
};

const getAllUserAdoptions = async (req, res) => {
	// get user
	const token = getToken(req);
	const user = await getUserByToken(token);

	try {
		const pets = await Pet.find({ "adopter._id": user._id }).sort(
			"-createdAt"
		);
		res.status(200).json({ pets });
	} catch (error) {
		res.status(500).json({
			message: "Lamento. Não foi possivel resgatar seus pets!",
			error,
		});
	}
};

const create = async (req, res) => {
	const { name, age, weight, color } = req.body;
	const available = true;

	// images uploads
	const images = req.files;

	// validation
	if (!name) {
		res.status(422).json({ message: "O nome é obrigatório!" });
		return;
	}
	if (!age) {
		res.status(422).json({ message: "A idade é obrigatória!" });
		return;
	}
	if (!weight) {
		res.status(422).json({ message: "O peso é obrigatório!" });
		return;
	}
	if (!color) {
		res.status(422).json({ message: "A cor é obrigatória!" });
		return;
	}
	if (images.length === 0) {
		res.status(422).json({ message: "A imagem é obrigatória!" });
		return;
	}

	// get user
	const token = getToken(req);
	const user = await getUserByToken(token);

	// create pet
	const pet = new Pet({
		name,
		age,
		weight,
		color,
		available,
		images: [],
		user: {
			_id: user._id,
			name: user.name,
			image: user.image,
			phone: user.phone,
		},
	});

	images.map((image) => {
		pet.images.push(image.filename);
	});

	try {
		const newPet = await pet.save();

		res.status(201).json({ message: "Pet cadastrado com sucesso", newPet });
	} catch (error) {
		await res.status(500).json({ message: "Algo deu errado", error });
	}
};

const getPetById = async (req, res) => {
	const id = req.params.id;

	if (!ObjectId.isValid(id)) {
		res.status(422).json({ message: "ID Invalido!" });
		return;
	}

	try {
		const pet = await Pet.findById(id);
		if (!pet) {
			res.status(404).json({ message: "Pet não encontrado!" });
			return;
		}

		res.status(200).json({ message: "Pet encontrado!", pet });
	} catch (error) {
		res.status(500).json({ message: "Error no getPetById", error });
	}
};

const removePetById = async (req, res) => {
	const { id } = req.params;

	if (!ObjectId.isValid(id)) {
		res.status(422).json({ message: "Id Invalido!!" });
		return;
	}

	const pet = await Pet.findById(id);

	// valida se pet existe
	if (!pet) {
		res.status(404).json({ message: "Pet não encontrado!" });
		return;
	}

	// valida se pet tem usuario
	if (!pet.user) {
		res.status(401).json({
			message: "O pet não está vinculado a um usuario!",
		});
		return;
	}

	// get user
	const token = getToken(req);
	const user = await getUserByToken(token);

	// valida se usuario esta autenticado
	if (!user) {
		res.status(401).json({ message: "Usuario não autenticado!" });
		return;
	}

	// valida se usuario e o mesmo do pet
	if (pet.user._id.toString() !== user._id.toString()) {
		res.status(422).json({
			message: "Você não tem permissão para apagar esse Pet!",
		});
		return;
	}

	try {
		// const removePetById = await Pet.deleteOne({ _id: id });
		await Pet.findByIdAndDelete(id);

		res.status(200).json({
			message: "Pet removido com sucesso!",
			removePetById,
		});
	} catch (error) {
		res.status(500).json({ message: "Erro ao remover pet!" });
	}
};

const updatePet = async (req, res) => {
	const { id } = req.params;
	const { name, age, weight, color, available } = req.body;

	// images uploads
	const images = req.files;

	const updatedData = {};

	if (!ObjectId.isValid(id)) {
		res.status(422).json({ message: "Id Invalido!!" });
		return;
	}

	// check if pet exists
	const pet = await Pet.findById(id);

	// valida se pet existe
	if (!pet) {
		res.status(404).json({ message: "Pet não encontrado!" });
		return;
	}

	// valida se pet tem usuario
	if (!pet.user) {
		res.status(401).json({
			message: "O pet não está vinculado a um usuario!",
		});
		return;
	}

	// get user
	const token = getToken(req);
	const user = await getUserByToken(token);

	// valida se usuario esta autenticado
	if (!user) {
		res.status(401).json({ message: "Usuario não autenticado!" });
		return;
	}

	// valida se usuario e o mesmo do pet
	if (pet.user._id.toString() !== user._id.toString()) {
		res.status(422).json({
			message: "Você não tem permissão para atualizar esse Pet!",
		});
		return;
	}

	// validation
	if (!name) {
		res.status(422).json({ message: "O nome é obrigatório!" });
		return;
	} else {
		updatedData.name = name;
	}
	if (!age) {
		res.status(422).json({ message: "A idade é obrigatória!" });
		return;
	} else {
		updatedData.age = age;
	}
	if (!weight) {
		res.status(422).json({ message: "O peso é obrigatório!" });
		return;
	} else {
		updatedData.weight = weight;
	}
	if (!color) {
		res.status(422).json({ message: "A cor é obrigatória!" });
		return;
	} else {
		updatedData.color = color;
	}
	if (images.length === 0) {
		res.status(422).json({ message: "A imagem é obrigatória!" });
		return;
	} else {
		updatedData.images = [];
		images.map((image) => {
			updatedData.images.push(image.filename);
		});
	}

	try {
		await Pet.findByIdAndUpdate(id, updatedData);
		res.status(200).json({ message: "Pet atualizado com sucesso" });
	} catch (error) {
		res.status(500).json({
			message: "Houve algum erro ao atualizar o pet!",
		});
	}
};

module.exports = {
	create,
	getAll,
	getAllUserPets,
	getAllUserAdoptions,
	getPetById,
	removePetById,
	updatePet,
};
