const Router = require('express')
const router = new Router()
const userController = require('../controlers/userController')
const authMiddleware = require('../middleware/authMiddleware')


router.post('/registration', userController.registration)
router.post('/login', userController.login)
router.get('/auth', authMiddleware, userController.check)


module.exports = router