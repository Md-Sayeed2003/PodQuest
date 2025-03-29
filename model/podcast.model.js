import mongoose from "mongoose";

const podcasts = new mongoose.Schema({
    frontImage :{
        type : String,
        unique : true,
        required : true,
    },

    audioFile :{
        type : String,
        unique : true,
        required : true,
    },

    title :{
        type : String,
        unique : true,
        required : true,
    },

    description :{
        type : String,
        unique : true,
        required : true,
    },

    user :{
        type : mongoose.Types.ObjectId,
        ref : "user",
    } ,
    
    category :{
        type : mongoose.Types.ObjectId,
        ref : "category"
    }
},
 {timestamps : true}
);

const Podcast = mongoose.model('podcasts',podcasts)

export default Podcast;

