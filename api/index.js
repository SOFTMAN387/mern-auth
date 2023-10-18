import express from 'express';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';
import cookieParser from 'cookie-parser';
import connectDB from './mongoDB/connect.js';
// import path from 'path';
dotenv.config();
const port=8000;

const app = express();

// //Deployment Code starts in productions=====================

// const __dirname = path.resolve();
// if(process.env.NODE_ENV==='production'){
//     app.use(express.static(path.join(__dirname, '/client/dist')));

//     app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
// });

// }else{
//   app.get("/",(req,res)=>{
//     res.send("Api is running successfully!....");
//   })
// }


//Deployment Code ends in productions=====================


app.use(express.json());

app.use(cookieParser());

app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);

app.get("/",(req,res)=>{
      res.send("Api is running successfully!....");
     })
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  return res.status(statusCode).json({
    success: false,
    message,
    statusCode,
  });
});



const startServer=async()=>{
  try {
     connectDB(process.env.MONGODB_URL);
    //  console.log(process.env.MONGODB_URL);
      app.listen(port,()=>console.log(`Server has been started at port ${port}`));
  } catch (error) {
      console.log(error);
  }
  
}

startServer();