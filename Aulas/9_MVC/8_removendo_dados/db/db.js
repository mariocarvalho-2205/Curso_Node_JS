const { Sequelize } = require('sequelize')

const db = new Sequelize('postgresql://postgres.ktgqlqcukfwshaipjtxe:Msct.2205.Ady@aws-0-sa-east-1.pooler.supabase.com:6543/postgres', {
    dialect: 'postgres',
    logging: false
})

try {
    db.authenticate()
    console.log('Conectou ao supabase')
} catch (error) {
    console.log(error)
}

module.exports = db