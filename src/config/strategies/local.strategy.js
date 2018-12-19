const passport = require('passport');
const {Strategy} = require('passport-local');

module.exports = function localStrategy() {
    passport.use(new Strategy(
        {
            usernameField: 'username',
            passwordField: 'password'
        }, (username, password, done) => {
            const user = {
                userrname, password
            };
            done(null, user);     
        }
    ));
};