const app = require('./src/app');
const dotenv = require('dotenv');
const connectDB = require('./src/config/database');


// configuring the port
dotenv.config({path:'src/config/config.env'});

// database connection
connectDB()


const server = app.listen(process.env.PORT, ()=>{
    console.log(`server is running on port  ${process.env.PORT}`);
});
