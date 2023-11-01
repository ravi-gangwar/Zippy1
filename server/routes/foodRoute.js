import express from 'express'
import foodModel from "../models/foodModel.js"


const router = express.Router();


// GET ALL FOODMENU || @GET REQUEST

//crud opr also called
router.get('/getmenu', async (req, res)=>{
    try {
        const MenuData = await foodModel.find({});
        res.status(200).send(MenuData);
        console.log("Get Data");
    } catch (error) {
        console.error(error); // Log the error
        res.status(500).json({ message: "Internal server error" });
    }
    
})

export default router;