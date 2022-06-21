import http from "../http-common";
//get all exercises
const getAll = () => {
  return http.get("/exercises");
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
  return http.post("/usersLogin", data)
}
//logIn Trainer
const loginTrainer = (data) => {
  return http.post("/trainersLogin", data)
}
//update user; 
const updateUser = (id, data) => {
  return http.update(`/users/${id}`, data, id);
};

const stayFitDataService = {
  getAll,
  create,
  getAllTrainers,
  createTrainer,
  getAllUsers,
  createUser,
  findUser,
  loginUser,
  loginTrainer,
  updateUser
};

export default stayFitDataService;
