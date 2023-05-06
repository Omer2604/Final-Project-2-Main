import http from "./httpService";
import JWTDecode from "jwt-decode";

export const signup = (user) =>
  http.post(`http://localhost:8181/api/users/register`, user);

export const login = async (user) => {
  const {
    data: { token },
  } = await http.post(`http://localhost:8181/api/users/login`, user);
  localStorage.setItem("token", token);
  console.log(token);
};

export const getCurrentUser = () => {
  try {
    const token = localStorage.getItem("token");
    console.log(token);
    return JWTDecode(token);
  } catch {
    return null;
  }
};

export const logout = () => {
  localStorage.removeItem("token");
  return (window.location = "/");
};

export const resetPassword = (email) =>
  http.post(` http://localhost:8181/api/users/reset?email=` + email);

export const newPassword = (email, newPass) =>
  http.post(
    `http://localhost:8181/api/users/reset?email=${email}&newPass=${newPass}`
  );

export const getJWT = () => localStorage.getItem("token");
