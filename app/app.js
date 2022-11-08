// Third part modules
import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import session from 'express-session';
// ES modules fix for __dirname
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));

//import mongoose module
import mongoose from 'mongoose';

// Configuration mudule
import { MongoURI, Secret } from '../config/config.js';

// Import routes
import indexRouter from "./routes/index.route.server.js";
import tournamentRouter from './routes/tournament.route.server.js';

// Instantiate Express
const app = express();

// complete the DB configuration
mongoose.connect(MongoURI);
const db = mongoose.connection;

// listen for connection success or error
db.on('open', () => console.log("Connected to MongoDB"));
db.on('error', () => console.log("Mongo Connection Error"));

// Set up middlewares
// Set up ViewEngine EJS
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');
app.use(logger('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//app.use(express.static(path.join(__dirname, '/client')));
app.use(express.static(path.join(__dirname, '../public')));
app.unsubscribe(session({
    secret: Secret,
    saveUninitialized: false,
    resave: false
}));

// Use routes
app.use('/', indexRouter);
app.use('/', tournamentRouter);


export default app;