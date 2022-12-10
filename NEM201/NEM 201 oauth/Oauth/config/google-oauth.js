const GoogleStrategy = require('passport-google-oauth20').Strategy;
const passport=require("passport")
const { v4: uuidv4 } = require('uuid');

require("dotenv").config()
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:8080/users/auth/google/callback"
  },
  async function(accessToken, refreshToken, profile, cb) {
    // User.findOrCreate({ googleId: profile.id }, function (err, user) {
    console.log(profile)
    let email=profile._json.email
    // const user=  new UserModel({
    //     email,
    //     password:uuidv4()
    // })
    // await user.save()
    // const {_id,password}=user;
    // const payload={
    //     email,
    //     _id,
    //     password,
    //     url:profile._json.picture
    // }
    // return cb(null, payload);
    return cb(null, "some string")
    // });
   // console.log(profile)
  }
));

module.exports=passport;