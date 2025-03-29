import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser';
import cors from 'cors'

const app = express();
dotenv.config();

import conn from './conn/conn.js'
import userApi from './routes/user.route.js'
import categoryApi from './routes/categories.route.js'
import podcastApi from './routes/podcast.route.js'

const port = process.env.PORT;



//database connection
conn();


//middleware
app.use(express.json());
app.use(cookieParser());
app.use('/uploads',express.static("uploads"));


app.use(cors({
    origin: ["http://localhost:5173","https://grand-sprite-077b97.netlify.app"],
    credentials: true,
}))


//routes
app.use("/api/v1",userApi);
app.use("/api/v1",categoryApi);
app.use("/api/v1",podcastApi);


app.listen(port,()=>{
    console.log(`Server started on port ${port}`);
})
