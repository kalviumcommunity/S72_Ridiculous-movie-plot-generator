const express = require('express');
const app = express();
const mongoose=require('mongoose')
const cors= require('cors')
const routes=require('./routes/genre.route')
const movies=require('./routes/movie.route')

require('dotenv').config()

app.use(express.json())
app.use(cors())
app.use('/api',routes)
app.use('/api',movies)

app.get('/ping', (req, res) => {
    try{
        res. send('Pong!');
    }catch(error){
        next(error)
    }
});



const PORT = process.env.PORT || 3000;
if(!process.env.PORT) console.warn("PORT environment is not set. Using default port 3000")

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


const connectDatabase=()=>{
    mongoose.connect(process.env.MONGO_URL,{ssl:true,family: 4 })
    .then((data)=>{console.log('Databse is connected : ',data.connection.host)})
    .catch((err)=>console.log('Database connection failed ',err))
}

connectDatabase()