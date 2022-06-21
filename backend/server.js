import express from 'express';
import {APP_PORT,DB_URL} from './Config';
import web from './routes/web';
import cors from 'cors';
import connectDb from './db'
let app=express();


app.use(cors({origin:['http://localhost:3000']}))
connectDb(DB_URL);
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use('/api',web);

app.listen(APP_PORT,()=>{
    console.log(`ServerRunning at port ${APP_PORT}`);
})