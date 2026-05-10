// reusable auth helper functions
// duplicate auth code avoid karne ke liye

export const saveAuthData = (token, role) => {

  // login ke baad token + role save

  localStorage.setItem("access_token", token);

  localStorage.setItem("role", role);
};

export const logoutUser = () => {

  // logout pe storage clear

  localStorage.removeItem("access_token");

  localStorage.removeItem("role");

  // login page pe redirect

  window.location.href = "/login";
};

export const isAuthenticated = () => {

  return !!localStorage.getItem("access_token");
};

export const getUserRole = () => {

  return localStorage.getItem("role");
};