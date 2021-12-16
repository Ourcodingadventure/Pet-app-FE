import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const serverURL = "http://localhost:5000";
const API_SIGNUP = `${serverURL}/auth/signup`;
const API_SignIn = `${serverURL}/auth/signin`;
const API_SIGNOUT = `${serverURL}/logout`;
const API_PET_BY_ID = `${serverURL}/pet/`;
const API_GET_PETS = `${serverURL}/pets`;
const API_GET_PROFILE = `${serverURL}/profile`;
const API_UPDATE_PROFILE = `${serverURL}/user`;
const API_GET_ALL_USERS = `${serverURL}/users`;
const API_ADD_TO_CART = `${serverURL}/user`;
const API_DELETE_FROM_CART = `${serverURL}/user`;
const API_ADD_PET = `${serverURL}/add-pet`;
const API_UPDATE_STATUS = `${serverURL}/pet`;
toast.configure();
export const notify = (message, error = false) => {
  if (!error) {
    toast.success(message, { position: toast.POSITION.BOTTOM_LEFT });
  } else {
    toast.error(message, { position: toast.POSITION.BOTTOM_LEFT });
  }
};

export const postUser = async (user) => {
  try {
    let response = await axios.post(API_SIGNUP, user);
    notify(response.data.message);
  } catch (err) {
    notify(err.response.data.message, true);
  }
};

export const logUserIn = async (user) => {
  try {
    let response = await axios.post(API_SignIn, user);
    notify(response.data.message);
    return response;
  } catch (err) {
    notify(err.response.data.message, true);
    return err.response;
  }
};

export const profileSignOut = async () => {
  try {
    let response = await axios.post(API_SIGNOUT);
    notify(response.data.message);
    return response;
  } catch (err) {
    notify(err.response.data.message);
    return err.response;
  }
};

export const getPetById = async (id) => {
  let response = await axios.get(`${API_PET_BY_ID}${id}`);
  notify(response.data.message);
  return response.data.pet;
};

export const getPets = async (query) => {
  try {
    let obj = {};
    //filter out falsey values
    for (let q in query) {
      if (query[q]) {
        obj[q] = query[q];
      }
    }
    let response = await axios.get(API_GET_PETS, { params: obj });
    notify(response.data.message);
    return response.data;
  } catch (err) {
    console.log("pets:", err);
  }
};
export const GetProfile = async () => {
  let response = await axios.get(API_GET_PROFILE);
  notify(response.data.message);
  return response.data.user;
};

export const updateProfile = async (obj) => {
  let response = await axios.put(API_UPDATE_PROFILE, obj);
  notify(response.data.message);
  console.log(response);
};

export const getAllUsers = async () => {
  let response = await axios.get(API_GET_ALL_USERS);
  console.log(response.data);
  notify(response.data.message);
  return response.data.users;
};
export const addToCart = async (id, payload) => {
  let response = await axios.put(`${API_ADD_TO_CART}/:${id}/cart`, payload);
  notify(response.data.message);
  return response.data;
};

export const deleteFromCart = async (id, payload) => {
  try {
    let response = await axios.delete(`${API_DELETE_FROM_CART}/:${id}/cart`, {
      data: payload,
    });
    notify(response.data.message);
    return response.data;
  } catch (err) {
    return err.response;
  }
};
export const getUser = async (query) => {
  console.log(query);
  let obj = { id: query };
  let response = await axios.get(`${API_GET_PROFILE}/`, { params: obj });
  notify(response.data.message);
  return response.data.user;
};
export const AddPet = async (pet) => {
  let response = await axios.post({
    url: API_ADD_PET,
    headers: { "Content-Type": "multipart/form-data" },
    data: pet,
  });
  notify(response.data.message);
};
export const changePetStatus = async (id, status) => {
  let response = await axios.post(`${API_UPDATE_STATUS}/${id}/adopt`, {
    adoptionStatus: status,
  });
  notify(response.data.message);
  return response;
};
export const returnPet = async (id) => {
  let response = await axios.post(`${API_UPDATE_STATUS}/${id}/return`);
  notify(response.data.message);
  return response;
};
