// Third part modules
import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import session from 'express-session';
// ES modules fix for __dirname
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));

// Auth Step 1 - import modules
import passport from 'passport';
import passportLocal from 'passport-local';
import flash from 'connect-flash';

// Auth Step 2 - define auth strategy
let localStrategy = passportLocal.Strategy;

// Auth Step 3 - import the user model
import User from './models/user.js';
import Profile from './models/profile.js';

//import mongoose module
import mongoose from 'mongoose';

// Configuration mudule
import { MongoURI, Secret } from '../config/config.js';

// Import routes
import indexRouter from "./routes/index.route.server.js";
import tournamentRouter from './routes/tournament.route.server.js';
import authRouter from './routes/auth.route.server.js';
import profileRouter from './routes/profile.route.server.js';


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
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//app.use(express.static(path.join(__dirname, '/client')));
app.use(express.static(path.join(__dirname, '../public')));

// Auth Step 4 - Setup Express Session
app.use(session({
    secret: Secret,
    saveUninitialized: false,
    resave: false
}));

// Auth Step 5 - Setup Flash
app.use(flash());

// Auth Step 6 - Initialize Passport and Session
app.use(passport.initialize());
app.use(passport.session());

// Auth Step 7 - Implementing the Auth Strategy
passport.use(User.createStrategy());

// // Auth Step 8 - Setup Serialization and Deseralization
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Use routes
app.use('/', indexRouter);
app.use('/', tournamentRouter);
app.use('/', authRouter);
app.use('/', profileRouter);

export default app;