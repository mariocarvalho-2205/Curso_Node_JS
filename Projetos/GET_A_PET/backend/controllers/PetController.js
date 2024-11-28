const Pet = require('../models/Pet')

const create = async (req, res) => {
    const { name, age, weight, color, images, available } = req.body

    await res.status(200).json({message: `tudo ok! ${name}`})
}

module.exports = {
    create
}