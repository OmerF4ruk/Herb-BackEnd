import dbClient from "../db.js"

const addDevice = async (req, res) => {
    const { device_id, user_id, device_name } = req.body;

    const query = {
        text: 'INSERT INTO devices( id,user_id,name) VALUES($1, $2, $3) RETURNING *',
        values: [device_id, user_id, device_name],
    }

    await dbClient.query(query).then(r => {
        return res.status(201).json(r.rows[0])
    }).catch(e => {
        // 23505 = aynı cihaz 
        //23503 = idsi olan kullanıcı yok 
        return res.status(400).json({ message: e })
    })
}

//cihaz id ile var mı yok mu
const getDeviceById = async (req, res) => {
    const { device_id } = req.body;

    const query = {
        text: 'SELECT * FROM devices WHERE id=$1',
        values: [device_id],
    }

    await dbClient.query(query).then(r => {
        if (r.rowCount == 1) {
            return res.status(200).json(true)
        } else {

            return res.status(200).json(false)

        }

    }).catch(e => {
    
        return res.status(400).json({ message: e })
    })
}

//kullanıcının idsi ile cihazları
const getDeviceUserId = async (req, res) => {
    const { user_id } = req.body;

    const query = {
        text: 'SELECT * FROM devices WHERE user_id=$1',
        values: [user_id],
    }

    await dbClient.query(query).then(r => {
        if (r.rowCount >0) {
            return res.status(200).json(r.rows)
        } else {
            return res.status(200).json(false)

        }

    }).catch(e => {
    
        return res.status(400).json({ message: e })
    })
}



export default { addDevice, getDeviceById, getDeviceUserId }

