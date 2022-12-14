import mongoose from "mongoose";
 
//Connect to Mongo Atlas
 
const uri = "mongodb+srv://lydiadabbah:lydia1@cluster0.4kfczjs.mongodb.net/graph";
 
export default ()=>mongoose.connect( uri, {
    useNewUrlParser: true,
   useUnifiedTopology: true
} ).then( ( db ) => console.log( 'DB connected!!' ) )
.catch(err => console.log(err))