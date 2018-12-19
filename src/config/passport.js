const passport = require('passport');
require('./strategies/local.strategy');

module.exports = function passportConfig(app) {

    // Stores the user in session
    passport.serializeUser((user, done) => {
        done(null, user);
    });
    // Stores user in session
    passport.deserializeUser((user, done) => {
        done(null, user);
    });
};
