const Router = require('express')
const router = new Router()
const brandController = require('../controlers/brandController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.get('/', brandController.getAll)
router.post('/', checkRole('ADMIN'), brandController.create)

module.exports = router