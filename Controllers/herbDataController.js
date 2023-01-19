import dbClient from "../db.js"

const newData = async (req, res) => {
    const { device_id, air_humidity, air_temperature, soil_humidity, soil_temperature } = req.body
    const query = {
        text: 'INSERT INTO herb_datas( device_id, air_humidity, air_temperature, soil_humidity, soil_temperature,date) VALUES($1,$2,$3,$4,$5,NOW()) RETURNING *',
        values: [device_id, air_humidity, air_temperature, soil_humidity, soil_temperature],
      }
     await dbClient.query(query).then(r=>{
        return res.status(201).json(r.rows[0])
      }).catch(e=> {
        //cihaz kayıt yapılmamış
        return res.status(400).json({message:e})
      })

}
const getData = async (req, res) => {
    const { device_id } = req.body

    const query = {
        text: 'SELECT * FROM herb_datas WHERE id=(SELECT max(id) FROM herb_datas WHERE device_id=$1)',
        values: [device_id],
      }
     await dbClient.query(query).then(r=>{
        return res.status(201).json(r.rows[0])
      }).catch(e=> {
        //cihaz kayıt yapılmamış
        return res.status(400).json({message: e})
      })

}
export default {newData,getData}
