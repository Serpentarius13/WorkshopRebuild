import Cookies from "js-cookie";

export const getToken = () => {
  const token = Cookies.get("token");

  return token ? token : "";
};

export const setToken = (token) => {
  Cookies.set("token", token);
};

export const removeToken = () => {
  Cookies.remove("token");
};
