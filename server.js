import express from 'express';
import cors from 'cors';
import userController   from "./controllers/users-controller.js";
import helloController from "./controllers/hello-controller.js";
import tuitsController from "./controllers/tuits-controller.js";
import mongoose from 'mongoose';
mongoose.connect('mongodb://localhost:27017/webdev');

const app = express();
app.use(cors());
app.use(express.json()); // parse JSON from HTTP request body

app.get('/', (req, res) => {res.send('Welcome to Full Stack Development!')})
userController(app);
helloController(app);
tuitsController(app);

app.listen(process.env.PORT || 4000);
