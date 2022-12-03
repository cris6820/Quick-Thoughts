const router = require('express').Router()
const route = require('./route')
const apis = require('./apis')

router.use('/api', apis)
router.use(route)

module.exports = router
