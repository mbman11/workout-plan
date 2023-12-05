const express = require('express');
require('dotenv').config();


const app = express();

app.get('/', (req,res)=>{
  res.json('GET all workouts')
})

app.listen(process.env.PORT, () => {
  console.log(`listening on port: ${process.env.PORT}`)
});

