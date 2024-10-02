module.exports = class AuthController {
    static  Login(req, res) {
        res.render('auth/login')
    }
    static  Register(req, res) {
        res.render('auth/register')
    }
}