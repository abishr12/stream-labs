const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");
mongoose.promise = Promise;

var userSchema = new Schema(
  (google: {
    id: String,
    token: String,
    email: String,
    name: String
  })
);

userSchema.methods = {
  checkPassword: function(inputPassword) {
    return bcrypt.compareSync(inputPassword, this.local.password);
  },
  hashPassword: plainTextPassword => {
    return bcrypt.hashSync(plainTextPassword, 10);
  }
};

const User = mongoose.model("User", userSchema);
module.exports = User;
