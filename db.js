import pg from "pg"
import dotenv from "dotenv"
dotenv.config()
console.log(process.env.DB_PORT)
const dbClient  = new pg.Client({
    user: String(process.env.DB_USER),
    host: String(process.env.DB_HOST),
    database:String( process.env.DB_NAME),
    password: "Kalamar18",
    port: String(process.env.DB_PORT),
  })

   

    


export default dbClient