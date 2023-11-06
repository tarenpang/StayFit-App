const path = require("path");
const express = require("express");
const dotenv = require("dotenv").config();
const connectDB = require("./config/db");
const port = process.env.PORT || 5001;
const cors = require("cors");
// const { errorHandler } = require('./middleware/errorMiddleware');

connectDB();

var corsOptions = {
	origin: "http://localhost:5002",
};

const app = express();

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/exercises", require("./routes/stayFitRoutes"));
app.use("/trainers", require("./routes/trainerRoutes"));
app.use("/users", require("./routes/userRoutes"));

app.listen(port, () => console.log(`Server started on port ${port}`));
