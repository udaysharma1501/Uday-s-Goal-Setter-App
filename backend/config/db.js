const mongoose = require('mongoose');

const connectDB = async () => {
    try 
    {
        const conn = await mongoose.connect(process.env.MONGO_URI);

        // .yellow.underline comes from the colors package
        console.log(`mongoDB connected ${conn.connection.host}`.yellow.underline);
    } 
    catch (error) 
    {
        console.log(error);
        process.exit(1);            
    }
}

module.exports = connectDB;