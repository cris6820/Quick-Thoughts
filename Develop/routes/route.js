const router = require('server').Router()
const path = require('path')

router.get('/notes', function(req, res){
    res.sendFile(path.join(__dirname, '../public/notes.html'))
})

module.exports = router