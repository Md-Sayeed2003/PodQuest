import express from 'express'
import authMiddleware from '../middleware/auth-middleware.js';
import upload from '../middleware/multer.js';
import Category from '../model/category.model.js';
import Podcast from '../model/podcast.model.js';
import User from '../model/user.model.js';

const router = express.Router();

router.post("/add-podcast",authMiddleware ,upload, async(req,res)=>{
    try {

        const { title, description, category } = req.body;
        const frontImage = req.files["frontImage"][0].path;
        const audioFile = req.files["audioFile"][0].path;

        if(!title || !description || !category || !frontImage || !audioFile){
            return res.status(400).json({message : "All fields are required"});
        }

        const  userid  = req.user._id;
        const cat = await Category.findOne({categoryName:category});

        if(!cat){
            return res.status(400).json({message : "No Category found"});
        }

        const catid = cat._id;
        

        const newPodcast = new Podcast({
            title : title,
            description : description,
            category:catid,
            frontImage : frontImage,
            audioFile : audioFile,
            user : userid
        });

        await newPodcast.save();

        await Category.findByIdAndUpdate(catid,{$push:{podcasts : newPodcast._id}})
        
        await User.findByIdAndUpdate(userid,{$push:{podcasts:newPodcast._id}});

        return res.status(200).json({message : "Podcast added successfully"});

    } catch (error) {
        console.log(error);
        return res.status(500).json({message : "Internal Server Error"});
    }
})


// router.post("/add-podcast", authMiddleware, upload, async (req, res) => {
//     try {
//         console.log("Request User:", req.user); 
//         if (!req.user) {
//             return res.status(401).json({ message: "User not authenticated" });
//         }

//         const { title, description, category } = req.body;
//         const frontImage = req.files?.["frontImage"]?.[0]?.path;
//         const audioFile = req.files?.["audioFile"]?.[0]?.path;

//         if (!title || !description || !category || !frontImage || !audioFile) {
//             return res.status(400).json({ message: "All fields are required" });
//         }

//         const userid = req.user._id; 
        

//         const cat = await Category.findOne({ categoryName: category });
//         if (!cat) {
//             return res.status(400).json({ message: "No Category found" });
//         }

//         const newPodcast = new Podcast({
//             title,
//             description,
//             category: cat._id,
//             frontImage,
//             audioFile,
//             user: userid, // Store only user ID
//         });

//         await newPodcast.save();
//         await Category.findByIdAndUpdate(cat._id, { $push: { podcasts: newPodcast._id } });
//         await User.findByIdAndUpdate(userid, { $push: { podcasts: newPodcast._id } });

//         return res.status(200).json({ message: "Podcast added successfully" });
//     } catch (error) {
//         console.error("Error:", error);
//         return res.status(500).json({ message: "Internal Server Error" });
//     }
// });


router.get("/all-podcasts" , async(req,res)=>{
    try {

        const podcasts = await Podcast.find().populate("category").sort({createdAt : -1});

        return res.status(200).json({data : podcasts})
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({message : "Internal Server Error"});
    }
})

//get-user-podcasts
router.get("/get-user-podcasts", authMiddleware , async(req,res)=>{
    try {

        // const {user} = req.user;

        const userid = req.user.id;

        const data = await User.findById(userid).populate({path : "podcasts",populate:{path:"category"}}).select("-password");
        
        if(data && data.podcasts){
            data.podcasts.sort((a,b)=> new Date(b.createdAt) - new Date(a.createdAt))
        };

        return res.status(200).json({data : data.podcasts})

    } catch (error) {
        console.log(error);
        return res.status(500).json({message : "Internal Server Error"});
    }
})

//get-podcast by id
router.get("/get-podcasts/:id" , async(req,res)=>{
    try {

        const {id} = req.params;

        const podcasts = await Podcast.findById(id).populate("category");

        return res.status(200).json({data : podcasts})
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({message : "Internal Server Error"});
    }
})

//get-podcast by categories



router.get("/category/:cat", async (req, res) => {
    try {
      const category = await Category.findOne({ categoryName: req.params.cat });
  
      if (!category) {
        return res.status(404).json({ message: "Category not found" });
      }
  
      const podcasts = await Podcast.find({ category: category._id });
  
      res.status(200).json({ success: true, data: podcasts });
    } catch (error) {
      res.status(500).json({ message: "Server error", error });
    }
  });

export default router;