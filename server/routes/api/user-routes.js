const router = require('express').Router();
const {
    createUser,
} = require('../../controllers/user-controller');

//import middleware
const { authMiddleware } =require('../../utils/auth');


// put autmiddleware we need to send a token for verification of user
router.route('/').post(createUser).put(authMiddleware)

module.exports = router;