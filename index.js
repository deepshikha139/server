const express = require('express');
const mongoose = require('mongoose');
const cookeiSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
// declaring schema
require('./models/User');
// google auth and will save data in above declarde schema
require('./services/passport');

const app = express();

app.use(cookeiSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
}));

app.use(passport.initialize());
app.use(passport.session());

//Q why are we not writting this in passport
mongoose.connect(keys.mongoURI);

require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;

app.listen(PORT);