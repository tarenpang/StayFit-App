const jwt = require('jsonwebtoken');

<<<<<<< HEAD:backend/config/generateToken.js
=======
//id is payload
>>>>>>> 21ce7f1c812cbba6b14db2119d50d187c23e3126:server/config/generateToken.js
const generateToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET, {
        expiresIn: '30d',
    }) 
}

module.exports = generateToken;