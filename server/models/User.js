const Exercise = require('./Exercise')
const Trainer = require('./Trainer')
const mongoose = require('mongoose');
const { Schema } = require('mongoose');
const Joi = require('joi'); 
const passwordComplexity = require('joi-password-complexity')
const secret = process.env.SECRET;
const jwt = require('jsonwebtoken');

var userSchema = new Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    userName: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    imageUrl: String,
    exercises: [{type: mongoose.Schema.Types.ObjectId,
      ref: 'Exercise',
    }],
    trainerId: Number,
    age: Number,
    height: Number,
    currentWeight: Number,
    targetWeight: Number,
    injuries: String,
    hr: Number,
    bp: [Number,Number],
    respirations: Number,
    o2: Number,
    bmi: Number,
    favorites: [],
    fitnessGoals: String
  },
    {timestamps: true}
);

// userSchema.methods.generateAuthToken = function(){
//   const token = jwt.sign({_id: this._id}, process.env.JWTPRIVATEKEY, {
//     expiresin: "7d"
//   })
//   return token
// }

const User = mongoose.model('user', userSchema)
const validate = (data) => {
  const schema = Joi.object({
    firstName: Joi.string().required().min(2).max(20).label("firstName"),
    lastName: Joi.string().required().min(2).max(20).label("lastName"),
    userName: Joi.string().required().label("userName"),
    password: passwordComplexity().required().label("password"), 
  })
  return schema.validate(data)
}


module.exports = {User, validate}

//Notes for adding authentication on front-end Using JOI tutorial 
//make sure axios and react-router dom installed
//CREATE USER (REGISTER USER PAGE)
//Create 'SignUp' folder and inside it create 'Index.jsx.'& styles.modules.css
//Inside index.js import & add styling within signup component if we choose to do so.
// add <Link to "/login"> and add login button
//import useState - > [data,setData ] = useState -> set for all fields.
//pass in firstName, lastName, password, email,  data (placeholder, name, onChange, value, required, className) into input fields
//create handleChange function == ({currentTarget: input}) -> setData(...data, [input.username]: input.value). Do the same for password and add another button.
//add handleSubmit function -> preventDefault, then pass it into form.
//import axios and call the local host url/api/users inside the await axios in the try catch
//import useNavigate from react-router dom, declare navigate=useNavigate, use it inside the try navigate('/login'), and corresponding error.response statuses in the error
//const error, setError -> useState and pass it into the catch.
//conditional check if error occurs res.400 & 500 & style our error msg if we choose.
//CREATE LOGIN PAGE
//In Components folder, create your Login folder and index.jsx & css folders inside there.
//Copy index.jsx code over -> take out 'useNavigate' import
//in handleSubmit function - change the url to api/auth
//add localStorage.setItem('token',res.data) & set window.location to "/"
//change from signup to login_container to apply proper css -> adjust the rest of the code to render how we want the login page to look, ref to tut. if needed.
//add link to signup page (in our case, this may link to userLogin component page)
//CREATE MAIN COMPONENT
//Main folder/index.jsx/styles into components folder
//import styles and create main function in main folder. pass in styles.
//create handleLogout -> make the page
//ASSIGN ROUTES
//IN APP.JS -> import route,routes, navigate
//import Main, Signup, Login
//Refer to end of tutorial 31:20 to add assign Routes in App.js
