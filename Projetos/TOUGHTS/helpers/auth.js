// middleware para fazer a verificação se o usuario esta logad

module.exports.checkAuth = function(req, res, next) {

    const userId = req.session.userid

    if(!userId) {
        res.redirect('/login')
    }

    next()
}