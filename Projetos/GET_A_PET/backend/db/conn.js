const mongoose = require('mongoose')

async function main() {
    await mongoose.connect('mongodb://localhost:27017/getapet')

    // try {
    //     await mongoose.connect('mongodb://localhost:27017/getapet')
    //     console.info('Mongoose Connected in Try Catch')
    // } catch (error) {
    //     console.error(error)
    // }
}

main()
.then(() => {
    
    console.info('Mongoose Connected in then')
})
.catch(err => console.error(err))

module.exports = mongoose