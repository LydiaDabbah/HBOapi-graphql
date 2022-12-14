import { GraphQLServer } from "graphql-yoga"; // importar el servidor de graphql
import resolvers from "./graphql/resolvers/index.js"; // importamos los resolvers
import path from "path"; // par poder enrutar archivos estatiocos ( el de schema)
const dotenv = require("dotenv")

export const server = new GraphQLServer( {
    typeDefs: path.join( __dirname, "graphql/schema.graphql" ),// le pasamos los type definitions que van a estar en el schema, con "path", se le pasa el path absoluta( no de donde estas parado)
    resolvers 
})