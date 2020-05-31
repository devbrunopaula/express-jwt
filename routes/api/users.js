const express = require('express')
const router = express.Router()

//Users Model
const User = require('../../models/user')

//@route GET api/users
//@desc  Get all Users
//@access Public
router.get('/', (req,res) => {
    User.find()
        .sort({ date: -1 })
        .then( users => res.json(users) )
})


//@route POST api/users
//@desc  Create 1 User
//@access Public
router.post('/', (req,res) => {
   const newUser = new User({
        first: req.body.first,
        last: req.body.last
    })
    newUser.save()
        .then( userData => res.json(userData))
        .catch( err => console.log(err))
})




module.exports = router