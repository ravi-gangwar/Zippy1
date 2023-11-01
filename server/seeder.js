import mongoose from 'mongoose';
import dotenv from 'dotenv';
import 'colors';
import menu from './models/foodModel.js';
import connectDB from './config/config.js';
import MenuData from './data/MenuData.js';

dotenv.config();
connectDB();

const importData = async () => {
  try {
    const sampleData = MenuData.map(food => ({ ...food }));
    await menu.insertMany(sampleData); // Use the 'menu' model
    console.log('DATA Imported'.bgGreen.white);
    process.exit(0); // Exit the process gracefully
  } catch (error) {
    console.log(`${error}`.bgRed.white);
    process.exit(1); // Exit with an error code
  }
};

const dataDestroy = () => {
  // Implement the code for deleting data here
};

if (process.argv[2] === '-d') {
  dataDestroy();
} else {
  importData();
}
