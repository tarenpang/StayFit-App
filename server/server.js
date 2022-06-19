require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connection = require('./config/db.config')
const userRoutes = require('./routes/userRoutes');
const userLoginRoute = require('./routes/userLogin');
const stayFitRoutes = require('./routes/stayFitRoutes');
const trainerRoutes = require('./routes/trainerRoutes');
const trainerLoginRoute = require('./routes/trainerLogin'); 
const app = express();
// const { notFound, errorHandler } = require("../server/app/middleware/errorMiddleware"); 

connection(); 
var corsOptions = {
  origin: "http://localhost:5002",
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(notFound);
// app.use(errorHandler); 

const PORT = process.env.PORT || 5001;

app.use("/exercises", stayFitRoutes); 
app.use("/trainers", trainerRoutes); 
app.use("/trainersLogin", trainerLoginRoute);
app.use("/users", userRoutes);
app.use("/usersLogin", userLoginRoute); 

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}!`);
});
