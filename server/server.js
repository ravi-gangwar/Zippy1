import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/config.js';
import('colors');
import morgan  from 'morgan';
// import foodModel from './models/foodModel.js';
import router from './routes/foodRoute.js';
import cors from 'cors'






const app = express();

// Config dotenv
dotenv.config();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

// Routes
app.use('/api/foodmenu', router)
//root path
app.get('/', (req, res) => {
  res.send('<h1>Hello from server</h1>');
});


const port = process.env.PORT || 8080 
app.listen(port, () => {
  console.log(`Server is running on PORT: ${process.env.NODE_ENV} mode on port no ${process.env.PORT}`.bgGreen);
});
