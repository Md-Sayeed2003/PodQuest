import express from 'express'
import Category from '../model/category.model.js';
const router = express.Router();

//add-category

router.post("/add-category", async (req,res)=>{
    try{

        const { categoryName } = req.body;
        const category = new Category({categoryName});
        await category.save();

        return res.status(200).json({message : "Category Saved"});

    }catch(err){
        console.log(err);
        return res.status(500).json({message : "Internal Server Error"});
    }
})


export default router;