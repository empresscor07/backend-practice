import express from 'express';
import config from './config/index.js';
import userRouter from './resources/user/user.router.js';
//import memoRouter from './resources/calendar/calendar.router.js';


// the default function exported by the express module
// creates an instance of an Express application
// which is then store in app
const app = express();

//tells the express application instance that the user
// app will send json data
app.use(express.json());

//generic screen for home page - to DELETE later
app.get('/', (req, res) => {
    res.send('Hello World!')
})

//MIDDLEWARE ************************
//sets up middleware api for users - uses router
app.use('/api/user', userRouter);

//sets up token use once user has logged in
// TODO

//sets up middleware api for calendar management -uses router
// TODO


//SERVER CREATION always at the bottom - this starts the server running
app.listen(config.port, () => {
    //callback function to know when the server is running
    console.log(`WELCOME! Server running | listening on port ${config.port}`);
});

