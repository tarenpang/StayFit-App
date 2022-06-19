import axios from "axios"; 

export default axios.create({
  baseURL: "http://localhost:5001",
  headers: {
      "Content-Type": "application/json"
  },
  // validateStatus: (status) => {
  // console.log("Status is " + status)
  //   return true; 
  // }
})
; 

