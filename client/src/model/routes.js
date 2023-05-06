const ROUTES = {
  ROOT: "ROOT",
  ABOUT: "ABOUT",
  LOGOUT: "LOGOUT",
  LOGIN: "LOGIN",
  SIGNUP: "SIGNUP",
  GALLERY: "GALLERY",
};
const ROUTES_DEF = {
  [ROUTES.ROOT]: { to: "/", label: "HomePage" },
  [ROUTES.ABOUT]: { to: "/about", label: "About" },
  [ROUTES.LOGOUT]: { to: "/logout", label: "Logout" },
  [ROUTES.LOGIN]: { to: "/login", label: "Login" },
  [ROUTES.SIGNUP]: { to: "/signup", label: "Signup" },
  [ROUTES.GALLERY]: { to: "/gallery", label: "Gallery" },
};

export { ROUTES_DEF, ROUTES };
