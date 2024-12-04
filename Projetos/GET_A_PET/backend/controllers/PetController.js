const Pet = require("../models/Pet");

// helpers
const getToken = require("../helpers/get-token");
const getUserByToken = require("../helpers/get-user-by-token");
const ObjectId = require('mongoose').Types.ObjectId

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
    const pets = await Pet.find({ "user._id": user._id }).sort("-createdAt");
    res.status(200).json({pets})
  } catch (error) {
    res
      .status(500)
      .json({ message: "Lamento. Não foi possivel resgatar seus pets!", error });
  }
};

const getAllUserAdoptions = async (req, res) => {
  // get user
  const token = getToken(req);
  const user = await getUserByToken(token);

  try {
    const pets = await Pet.find({ "adopter._id": user._id }).sort("-createdAt");
    res.status(200).json({pets})
  } catch (error) {
    res
      .status(500)
      .json({ message: "Lamento. Não foi possivel resgatar seus pets!", error });
  }
}

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
  const id = req.params.id

  if (!ObjectId.isValid(id)) {
    res.status(422).json({message: "ID Invalido!"})
    return
  }

  try {
    const pet = await Pet.findById(id)
    if (!pet) {
      res.status(404).json({message: "Pet não encontrado!"})
      return
    }

    res.status(200).json({message: "Pet encontrado!", pet})

  } catch (error) {
    res.status(500).json({message: "Error no getPetById", error})
  }
}

module.exports = {
  create,
  getAll,
  getAllUserPets,
  getAllUserAdoptions,
  getPetById
};
