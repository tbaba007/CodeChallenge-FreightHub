const express=require('express');
const cors=require('cors');
const bodyParser=require('body-parser');
const dotenv=require('dotenv');
const app=express();

dotenv.config({path:'./config/config.env'})

app.use(cors());
app.use(bodyParser.json());
app.use('/api/shipment',require('./routes/Shipment'));

const PORT=process.env.PORT||4000

app.listen(PORT,()=>{
    console.log(`Application running in ${process.env.NODE_ENV} on port ${PORT}`)
})