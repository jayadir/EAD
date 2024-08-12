const express=require('express');
const router=express.Router();
const Students=require('../models/Students');
router.put('/:roll',async(req,res)=>{
    try{
        const student=await Students.find({roll:req.params.roll});
        student[0].name=req.body.name;
        student[0].age=req.body.age;
        student[0].email=req.body.email;
        const result=await student[0].save();
        res.json(result);
    }catch(err){
        res.send('Error');
    }
})
router.get('/',async(req,res)=>{
    try{
        const students=await Students.find();
        res.json(students);
        console.log(students);
    }catch(err){
        res.send('Error'+err);
    }
})
router.get('/:roll',async(req,res)=>{
    try{
        const student=await Students.find({roll:req.params.roll});
        res.json(student);
        console.log(student);
    }catch(err){
        res.send('Error'+err);
    }
})
router.post('/',async(req,res)=>{
    const student=new Students({
        name:req.body.name,
        age:req.body.age,
        roll:req.body.roll,
        email:req.body.email,
        currentStudent:req.body.currentStudent
    })
    try{
        const result=await student.save();
        res.json(result);
        // console.log(a1);
        console.log(result)
    }catch(err){
        res.send('Error');
    }
})
router.patch('/:roll',async(req,res)=>{
    try{
        const student=await Students.find({roll:req.params.roll});
        student[0].currentStudent=req.body.currentStudent;
        const result=await student[0].save();
        res.json(result);
    }catch(err){
        res.send('Error');
    }
})
module.exports=router;