import userLoggedIn from '../components/TrainerLogin'
import trainerLoggedIn from '../components/TrainerLogin'

var isLoggedIn = false;

const loggedInStatus = () => { 

  if (userLoggedIn === true || trainerLoggedIn === true) {
    isLoggedIn = true;
  } else if (userLoggedIn === false && trainerLoggedIn === false) {
    isLoggedIn = false;
  }
  console.log("isLoggedIn: ", isLoggedIn)
  return isLoggedIn

};

export default loggedInStatus;


