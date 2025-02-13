const jwt = require('jsonwebtoken');

const verifyToken = async (req, res, next) => {
    const token = req.headers.authorization ? req.headers.authorization.split(' ')[1] : req.cookies['token'];

    if (!token) {
        return res.status(401).json({message:"Token not found."});
    } else {
        try {
            await jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
                if (err) {
                    return res.status(401).send({status: 401, message: 'Invalid token'});
                } else {
                    req.user = {
                        ID: decoded.sub,
                        role: decoded.role,
                        email: decoded.email,
                    };
                    next()
                }
            })
        } catch (e) {
            return res.status(500).send({message: e.message})
        }
    }
}

module.exports = {
    verifyToken,
}