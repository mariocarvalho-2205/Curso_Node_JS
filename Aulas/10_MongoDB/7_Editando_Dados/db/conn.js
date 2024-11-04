const { MongoClient } = require('mongodb')

const uri = 'mongodb://localhost:27017/produtos'

const conn = new MongoClient(uri)

async function run () {
    try {
        conn.connect()
        console.info('Conectou ao MongoDB')
    } catch (error) {
        console.error(error)   
    }

}

run()

module.exports = conn