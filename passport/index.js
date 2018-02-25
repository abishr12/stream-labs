const passport = require("passport");
const GoogleStrategy = require("./googleStrategy");
const User = require("../db/models/user");

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

passport.use(GoogleStrategy);

module.exports = passport;
