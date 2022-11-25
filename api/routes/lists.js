const router = require("express").Router();
const List = require("../models/List")
const verify = require("../verifyToken")

router.post('/',verify,async(req,res)=>{
    if(req.user.isAdmin){
        const newList = new List(req.body);
        try{
            const savedMovie = await newList.save()
            res.status(201).json(savedMovie)
        }catch(err){
            res.status(500).json(err)
        }
    }else{
        res.status(400).json("your not allow to access it")
    }
})

router.delete('/:id',verify,async(req,res)=>{
    if(req.user.isAdmin){
        try{
            await List.findByIdAndDelete(req.params.id);
            res.status(201).json("The list has been delted")
        }catch(err){
            res.status(500).json(err)
        }
    }else{
        res.status(403).json("you are not been allowed")
    }
})

router.get("/",verify,async(req,res)=>{
    const typeQuery = req.query.type
    const genreQuery = req.query.genre;
    let list = []

    try{
        if(typeQuery){
            if(genreQuery){
                list = await List.aggregate([
                    {$sample:{size:10}},
                    {$match:{type:typeQuery,genre:genreQuery}},
                ])
            }else{
                list = await List.aggregate([
                    {$sample:{size:10}},
                    {$match:{type:typeQuery}}
                ])
            }
        }else{
            list = await List.aggregate([{$sample:{size:10}}])
        }
        res.status(200).json(list)
    }catch(err){
        res.status(500).json(err)
    }
})

module.exports = router;