const getToken= (req) => {

    const authHeader = req.headers.authorization
    const token = authHeader.split(" ")[1]
    
    // console.log("token in GetToken", token)
    return token
}

module.exports = getToken