import mongoose from "mongoose";

import dotenv from 'dotenv';
 
dotenv.config();
const uri = process.env.URI
 
export default ()=>mongoose.connect( uri, {
    useNewUrlParser: true,
   useUnifiedTopology: true
} ).then( ( db ) => console.log( 'DB connected!!' ) )
.catch(err => console.log(err))