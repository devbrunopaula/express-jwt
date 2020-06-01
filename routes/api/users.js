const express = require('express')
const router = express.Router()

//Users Model
const User = require('../../models/user')

//@route GET api/users
//@desc  Get all Users
//@access Public
router.get('/',  async (req,res) => {
   
    try {
       const result = await User.find().sort({ date: -1 })
       res.send(result)
          
     } catch (error) {
        res.json(error)
     }
})

//@route GET api/users/id
//@desc  Get one user by Id
//@access Public
router.get('/:id', async (req,res) => {
    
   try {
    const id = req.params.id
    const result = await User.findById(id)
    res.json(result)
   } catch (error) {
    res.json({error:error})
   }
        
})

//@route POST api/users
//@desc  Create 1 User
//@access Public

router.post('/', async(req,res) => {

    const newUser = await new User({
        first: req.body.first,
        last: req.body.last
    })
    try {
       const result = await newUser.save()
       res.json({sucess:'Created', result:result})
    } catch (error) {
        res.json(error)
    }
   
 })

//@route DELETE api/users/:id
//@desc  Delete User by id
//@access Public
router.delete('/:id', async(req,res) => {
  
    try {
    const id = req.params.id
    const result = await User.findByIdAndDelete(id)
        res.json({sucess: `Deleted ${id}`, result: result})
    
   } catch (error) {
    res.json({failed: "Invalid Id or User"})
 }

})

//@route UPDADE api/users/:id
//@desc  Updade User by Id
//@access Public
router.patch('/:id', async (req,res) => {
        
      try {
        const id = req.params.id
        const update = req.body  
        const options = {new: true}
        const result = await User.findByIdAndUpdate(id,update,options)
         res.send(result)
      } catch (error) {
        res.json({failed:error})
      }
        

    
 })


module.exports = router