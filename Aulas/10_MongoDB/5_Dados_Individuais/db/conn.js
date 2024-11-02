const { MongoClient } = require('mongodb')

const uri = 'mongodb://localhost:27017/produtos'

const conn = new MongoClient(uri)

try {
    conn.connect()
    console.info('Conect in MongoDB')
} catch (error) {
    console.error(error)
}

module.exports = conn