require('dotenv/config');
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const userRouter = require('./Routes/userRoute');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/users',userRouter);

const port = process.env.PORT || 5000;
const uri = process.env.ATLAS_URI;

app.get("/",(req, res)=>{
    res.send('Welcome web chat web...');
})

app.listen(port, (req, res)=>{
    console.log(`server running on port : ${port}`);
});

mongoose.connect(uri,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=>console.log('Mongodb connection established'))
.catch((error)=>console.log('mongodb error (nyanlin identified) :', error.message));