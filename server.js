import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import helloController
    from "./controllers/hello-controller.js";
import userController   from "./controllers/user-controller.js";
import tuitController from "./controllers/tuits-controller.js";

const CONNECTION_STRING = process.env.DB_CONNECTION_STRING || 'mongodb://0.0.0.0:27017/webdev';
mongoose.connect(CONNECTION_STRING);

const app = express();
app.use(cors());
app.use(express.json());
app.get('/', (req, res) => {res.send('Welcome to Full Stack Development!')})
helloController(app);
userController(app);
tuitController(app)

app.listen(process.env.PORT || 4000);