const express = require('express')
const router = express.Router()

router.get('/', function (req, res, next) {
  res.redirect(302, 'https://github.com/someguy403/Responsive-Web-Design')
})

module.exports = router
