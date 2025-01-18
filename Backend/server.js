const express = require('express');
const app = express();

app.get('/ping', (req, res) => {
    try{
        res. send('Pong!');
    }catch(error){
        next(error)
    }
});

const PORT = process.env.PORT || 3000;
if(!process.env.PORT) console.warn("PORT environment is not setUsing default port 3000")

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
