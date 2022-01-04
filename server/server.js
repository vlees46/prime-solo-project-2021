const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

const sessionMiddleware = require('./modules/session-middleware');
const passport = require('./strategies/user.strategy');

// Route includes
const userRouter = require('./routes/user.router');
const mealRouter = require('./routes/meal.router');
const macrocalculator = require('./routes/macrocalculator.router');
const usermeal = require('./routes/usermeals.router');

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use('/api/user', userRouter);
app.use('/api/addmeal', mealRouter);
app.use('/api/reviewmeal', mealRouter);
app.use('/api/macrocalculator', macrocalculator);
app.use('/api/macroresults', macrocalculator);
app.use('/api/usermeals', usermeal);

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
