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

export const testCookie = () => {
  Cookies.set("hasJS", true);

  const token = Cookies.get("hasJS");

  return token ? token : false;
};

export const sentEmail = (userId) => {
  const past = Cookies.get("sentUsers") || [];
  if (past.includes(userId.toString())) return true;
  past.push(userId);
  Cookies.set("sentUsers", past);
  return false;
};
