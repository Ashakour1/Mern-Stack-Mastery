const mongos = require('mongoose');



const connectDB = async () =>{
    try{
        const conn = await mongos.connect(process.env.DATABASE_URL)

        // console.log(`mongo is connected ${conn.connection.host}` .cyan.underline);

    }catch(error){
        console.log(error.message.red.bold);
        process.exit(1);

    }
}

module.exports = connectDB;