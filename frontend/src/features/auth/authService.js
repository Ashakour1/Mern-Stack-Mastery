import axios from "axios";

const API_URL = "/api/users/";

// reg user
const register = async (userData) => {
  const response = await axios.post(API_URL, userData);
  // console.log(userData);
  // console.log(response.data.token);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data.token));
    return response.data.token;

  }
};
const login = async (userData) => {
  const response = await axios.post(API_URL + 'login', userData);
  // console.log(userData);
  // console.log(response.data.token);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data.token));
    return response.data.token;

  }
};

const logout = () => {
  localStorage.removeItem("user");
}
const AuthService = {
  register,
  logout,
  login,
};

export default AuthService;
