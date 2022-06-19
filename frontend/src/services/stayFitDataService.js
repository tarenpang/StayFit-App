import http from "../http-common";

const getAll = () => {
  return http.get("/exercises");
};

const create = (data) => {
  return http.post("/exercises", data);
};

const getAllTrainers = () => {
  return http.get("/trainers");
};

const createTrainer = (data) => {
  return http.post("/trainers", data);
};

const getAllUsers = () => {
  return http.get("/users");
};

const createUser = (data) => {
  return http.post("/users", data);
};

const findUser = (id) => {
  return http.get("/users", id);
};

const loginUser = (data) => {
  console.log("client side log in")
  console.log(data)
  const results = http.post("/usersLogin", data)
  console.log(results);  
  return http.post("/usersLogin", data)
}

const loginTrainer = (data) => {
  return http.post("/trainersLogin", data)
}

const updateUser = (id, data) => {
  return http.get("/users", data, id);
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
