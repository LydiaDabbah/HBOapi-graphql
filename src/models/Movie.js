import { Int32 } from "mongodb";
import { Schema,model } from "mongoose"

const movieSchema = new Schema( {
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    dateOfRelease: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    likes:{
        type:Number,
     
    }
} );

export default model("Movie", movieSchema)