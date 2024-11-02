const { MongoClient } = require('mongodb')

const uri = 'mongodb://localhost:27017/produtos'

const conn = new MongoClient(uri)

try {
    conn.connect()
    console.info('Conectou ao MongoDB')
} catch (error) {
    console.error('Error no DB ', error)
}

module.exports = conn