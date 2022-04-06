import express from 'express';
import helloController
    from "./controllers/hello-controller.js";
import userController   from "./controllers/user-controller.js";
import tuitController from "./controllers/tuits-controller.js";

const app = express();
app.use(express.json());
app.get('/', (req, res) => {res.send('Welcome to Full Stack Development!')})
helloController(app);
userController(app);
tuitController(app)

app.listen(4000);