const app = require('./index');
const port = 5454;


app.listen( port, ()=>{
    console.log(`PMM System Server Running on port ${port}`);
})