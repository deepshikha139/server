const passport = require('passport');

module.exports = app => {
    // will look for GoogleStrategy method
    // Q why do we need scope 
    app.get('/auth/google', passport.authenticate('google', {
        scope: ['profile', 'email']
    }))
    
    app.get('/auth/google/callback', passport.authenticate('google'));

    app.get('/api/logout', (req, res) => {
        req.logout();
        res.send(req.user);
    })

    app.get('/api/current_user', (req, res) => {
        // res.send(req.user);
        res.send(req.session);
    });

}