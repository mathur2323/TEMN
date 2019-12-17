const express = require('express');
const router = express.Router();

const User = require('./../../models/User');

router.post('/', (req, res) => {
    const newUser = new User({
        email: req.body.email,
        password: req.body.password,
        country: req.body.country
    })
    newUser.save()
    .then((item) => res.json(item));
})

module.exports = router