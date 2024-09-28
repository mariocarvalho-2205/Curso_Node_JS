const { Sequelize } = require('sequelize')

const db = new Sequelize('nodemvc', 'root', '', {
    dialect: 'mysql',
    host: 'localhost'
})
// const db = new Sequelize('postgresql://postgres.ktgqlqcukfwshaipjtxe:Msct.2205.Ady@aws-0-sa-east-1.pooler.supabase.com:6543/postgres', {
//     dialect: 'postgres',
//     logging: false
// })

try {
    db.authenticate()
    console.log('conectou ao MySQL')    
} catch (error) {
    console.log(error, 'no db')
}

module.exports = db