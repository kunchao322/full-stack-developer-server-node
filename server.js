import express from 'express';
import cors from 'cors';
import userController   from "./controllers/users-controller.js";
import helloController from "./controllers/hello-controller.js";
import tuitsController from "./controllers/tuits-controller.js";
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
// mongoose.connect('mongodb://127.0.0.1:27017/webdev');
const connectionString = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.qhkcq.mongodb.net/TUITS?retryWrites=true&w=majority`;
mongoose.connect(connectionString);

const app = express();
app.use(cors());
app.use(express.json()); // parse JSON from HTTP request body

app.get('/', (req, res) => {res.send('Welcome to Full Stack Development!')})
userController(app);
helloController(app);
tuitsController(app);

app.listen(process.env.PORT || 4000);
