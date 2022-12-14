import Movie from "../../models/Movie"
import User from '../../models/User.js'
import { createJwtToken } from "../../../util/auth"

const Mutation ={
    async createMovie(_, {input}){
        const Movies= await Movie.create(input)
        return Movies
    },
        async updateMovie(_,{input, _id}){
            return await Movie.findByIdAndUpdate(
                _id,
                input,
                {new:true}
            )
        },
        async removeMovie(_,{id}){
          await Movie.findByIdAndRemove(id)
            return await Movie.find()
        },
        async createUser(_, {input}){
            const Users= await User.create(input)
            return Users
        },
        async login( _, { email, password } ) {
            const verifyUser = await User.findOne( { email: email, password: password } );

            if (!verifyUser) {
               return ""
              }

              const token = createJwtToken(verifyUser)
              return token
        }
    
}
export default Mutation
