const router = require('express').Router()
const passport = require('passport')

const messageServices = require('./messages.services')
require('../middlewares/auth.middleware')(passport)

router.route('/')
    .get(messageServices.getAllMessages)
    .post(
        passport.authenticate('jwt', {session: false}),
        messageServices.createMessage
    )




module.exports = router