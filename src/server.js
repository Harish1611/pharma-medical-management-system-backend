const app = require('./index');
const dotenv = require('dotenv');
const connectDB = require('./config/db')
dotenv.config();

const port = process.env.PORT;



app.listen( port, ()=>{

    connectDB(); // MongoDB Connection
    
    console.log(`PMM System Server Running on port ${port}`);
})