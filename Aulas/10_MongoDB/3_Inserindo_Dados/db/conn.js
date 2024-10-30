const { MongoClient } = require('mongodb')

const uri = 'mongodb://localhost:27017/produtos'

const conn = new MongoClient(uri)

async function run( ) {
    try {
        await conn.connect()
        console.info('Conectou ao MongoDB')
    } catch (error) {
        console.error(error, 'Error no db')
    }
}

run()

module.exports = conn