import mongoose from "mongoose";

const category = new mongoose.Schema({
    categoryName :{
        type : String,
        unique : true,
        required : true,
    },

    podcasts : [
        {
            type : mongoose.Types.ObjectId,
            ref : "podcasts",
        },
    ],

    
},
 {timestamps : true}
);

const Category = mongoose.model('category',category)

export default Category;

