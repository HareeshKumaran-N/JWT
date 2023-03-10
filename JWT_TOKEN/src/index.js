import express from "express";
import userRouter from './api/user/userRoutes.js';
const app = express();

app.use(express.json());
app.use('/user',userRouter);

app.listen(3001,()=>{
    console.log('server running at port 3001')
});
