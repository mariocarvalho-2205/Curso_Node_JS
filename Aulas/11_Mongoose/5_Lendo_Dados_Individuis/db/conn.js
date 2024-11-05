const mongoose = require('mongoose')

async function run () {
    await mongoose.connect('mongodb://localhost:27017/products')
        console.info('Conectou ao MongoDB com Mongoose')
    // try {

    //     await mongoose.connect('mongodb://localhost:27017/products')
    //     console.info('Conectou ao MongoDB com Mongoose')
    // } catch (error) {
    //     console.error(error)   
    // }

}

// run()
run().catch((err) => console.log(err))

module.exports = mongoose