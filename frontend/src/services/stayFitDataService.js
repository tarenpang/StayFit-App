import http from "../http-common";
//get all exercises
const getAll = () => {
  return http.get("/exercises");
};
const getExercise = (id, data) => {
  return http.get(`/exercises/${id}`, data, id);
};
//create a new exercise
const create = (data) => {
  return http.post("/exercises", data);
};
//get all trainers
const getAllTrainers = () => {
  return http.get("/trainers");
};
//create a new trainer
const createTrainer = (data) => {
  return http.post("/trainers", data);
};
const getTrainer = (id, data) => {
  return http.get(`/trainers/${id}`, data, id);
};
//get all users 
const getAllUsers = () => {
  return http.get("/users");
};
//create new user
const createUser = (data) => {
  return http.post("/users", data);
};
//find user by id
const findUser = (id, data) => {
  return http.get(`/users/${id}`, id, data);
};
//logIn user
const loginUser = (data) => {
  return http.post("/users/login", data)
}
//logIn Trainer
const loginTrainer = (data) => {
  return http.post("/trainers/login", data)
}
//update user; 
const updateUser = (id, data) => {
  return http.update(`/users/${id}`, data, id);
};

const stayFitDataService = {
  getAll,
  getExercise,
  create,
  getAllTrainers,
  createTrainer,
  getTrainer,
  getAllUsers,
  createUser,
  findUser,
  loginUser,
  loginTrainer,
  updateUser
};

export default stayFitDataService;
