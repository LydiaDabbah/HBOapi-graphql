

import { server } from './server'// importamos el servidor
import  connect from "./database"; // importamos la coneccion a la BD
 
connect()// nos conectamos a la BD
 
server.start( { port: 3000 }, ( { port } ) => { // levantamos el servidor en puerto 3000
   console.log('Server running!!')
})
