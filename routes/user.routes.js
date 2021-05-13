const express = require('express');
const User = require('../models/User.model');
const router =express.Router();

router.get('/', (req, res, next)=>{
  User.find()
  .then(users => res.status(200).json(users))
  .catch(err => res.status(500).json(err))
})

router.post("/", async (req, res, next) =>{
  const {email, name, surname, phone, position, products} = req.body;

  if(!email){
    return res.status(400).json({message:"Email is required"});
  }
  try{
    const user = await User.create({email, name, surname, phone, position, products});
    return res.status(200).json(user);
  }catch(err){
    return res.status(500).json(err)
  }
})

router.put('/:id',(req, res, next) =>{
  const {id} = req.params;
  User.findOneAndUpdate({_id:id, user:req.user.id}, req.body, {new:true})
  .then(user =>res.status(200).json(user))
  .catch(err => res.status(500).json(err))
})

router.delete('/:id', (req,res,next) => {
  const {id} = req.params;
  User.findOneAndRemove({_id:id, user:req.user.id})
  .then(() => res.status(200).json({message:`User ${id} deleted`}))
  .catch(err => res.status(500).json(err))
})

module.exports = router;
