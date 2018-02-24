const GoogleStrategy = require("passport-google-oauth20").Strategy;
const User = require("../models/user");

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:3000/auth/google/callback"
    },

    function(accessToken, refreshToken, profile, cb) {
      process.nextTick(function() {
        User.findOrCreate({ "google.id": profile.id }, function(err, user) {
          if (err) return done(err);

          if (user) {
            // if a user is found, log them in
            return done(null, user);
          } else {
            // if the user isnt in our database, create a new user
            var newUser = new User();

            // set all of the relevant information
            newUser.google.id = profile.id;
            newUser.google.token = token;
            newUser.google.name = profile.displayName;
            newUser.google.email = profile.emails[0].value; // pull the first email

            // save the user
            newUser.save(function(err) {
              if (err) throw err;
              return done(null, newUser);
            });
          }
        });
      });
    }
  )
);

passport.serializeUser((user, done) => {
  console.log("=== serialize ... called ===");
  console.log(user); // the whole raw user object!
  console.log("---------");
  done(null, { _id: user._id });
});

passport.deserializeUser((id, done) => {
  console.log("DEserialize ... called");
  User.findOne(
    { _id: id },
    "firstName lastName photos local.username",
    (err, user) => {
      console.log("======= DESERILAIZE USER CALLED ======");
      console.log(user);
      console.log("--------------");
      done(null, user);
    }
  );
});

// ==== Register Strategies ====
passport.use(LocalStrategy);
//passport.use(GoogleStratgey);

module.exports = passport;
