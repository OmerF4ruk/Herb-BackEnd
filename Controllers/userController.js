import dbClient from "../db.js"




const userRegister=async(req,res)=>{
    const{email,password,first_name}=req.body

    const query = {
        text: 'INSERT INTO users( email,password,first_name) VALUES($1, $2,$3) RETURNING *',
        values: [email, password,first_name],
      }
     await dbClient.query(query).then(r=>{
        return res.status(201).json(r.rows[0])
      }).catch(e=> {
        return res.status(400).json({message: "account already exists"})
      })


}

const userLogin=async(req,res)=>{
    const{email,password}=req.body

    const query = {
        text: 'SELECT email FROM users WHERE email=$1 AND password=$2',
        values: [email, password],
      }
     await dbClient.query(query).then(r=>{

        if(r.rowCount==0)
         {
            throw new Error()
         }
        
        return res.status(201).json(r.rows[0])
      }).catch(e=> {
        return res.status(404).json({message: "email or password wrong"})
      })



}
export default{userRegister,userLogin}
