const mongoose = require('mongoose');

const connectDB = async () => {
    try 
    {
        const conn = await mongoose.connect(process.env.MONGO_URI);

        // .cyan.underline comes from the colors package
        console.log(`mongoDB connected ${conn.connection.host}`.cyan.underline);
    } 
    catch (error) 
    {
        console.log(error);
        process.exit(1);            
    }
}

module.exports = connectDB;