import { get } from 'mongoose'
import Movie from '../../models/Movie.js'
import User from '../../models/User.js'
import { createJwtToken } from "../../../util/auth"


const Query= {

    async getMovies(){
        const Movies= await Movie.find()
        return Movies
    },
    async getMovieById(_,{_id}){
        const Movie = await Movie.findById(_id)
        return Movie
    }/* ,
    async login( _, { email, password } ) {
        const verifyUser = await User.find( { email: email, password: password } );
        
        console.log(verifyUser)
         if (verifyUser) {
            const token = createJwtToken(user)
          return token
          }
 
        return verifyUser
    } */

}
export default Query