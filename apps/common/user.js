import axios from "axios";

axios.defaults.baseURL = "http://0.0.0.0:3000/q";
// axios.defaults.headers.common["Authorization"] =
//   "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbFZlcmlmaWVkIjp0cnVlLCJleHAiOjE1ODE1Nzk3NjYsImlhdCI6MTU4MTMyMDU2NiwiaXNzIjoibWVyaXNpZXIuZGUiLCJsb2dpbiI6dHJ1ZSwib3JnIjoxMiwicm9sZXMiOlsiYnVzaW5lc3MiLCJ0ZWFtYWRtaW4iLCJhZG1pbiIsInJvb3QiLCJhdXRoZW50aWNhdGVkIl0sInN1YiI6ImFkbWluQG1lcmlzaWVyLmRlIiwidGVhbSI6ImFkbWluQG1lcmlzaWVyLmRlIiwidGVhbWlkIjoiMSIsInVzZXIiOjF9.hIBAiRwsCGslrM0Jz7Ja6v4uugOhUgQvYOOlAk-e5sU";

export const ROLES = {
  ANONYMOUS: "anonymous",
  BUSINESS: "business",
  BANK: "bank",
  PUBLIC: "public",
  TEAMADMIN: "teamadmin"
}

export var user = {
  contact: {},
  addresses: [],
  orders: 0,
  teamOrderExport: [],
  tagsCache: [],
  businessTagsCache: {},
  productsCache: [],
  businessProductsCache: {},
  claims: {},
  feedback: {},
  ship_addresses: [],
  limitInPeriod: 0,
  orderInPeriod: 0,

  // customized UI configurations
  DisplaySettings: {},
  LoadingOrders: false
}

export function hasRole(roleName) {
  if ('roles' in user.claims) {
    return user.claims['roles'].indexOf(roleName) !== -1
  }
  return false
}

export function getUserData() {
  return axios.get("/me/user").then((resp) => {
    var userData = resp.data;
    user.DisplaySettings = userData.DisplaySettings;
    user.limitInPeriod = userData.OrderLimit;
  });
}

export function getAddresses() {
  return axios.get("/me/addresses").then((resp) => {
    // user.addresses = addresses.plain() //TODO to check what .plain() do?
    user.addresses = resp.data;
  })
}

export function auth(email, password) {
  return axios.post("/me/auth", {
    "Email": email,
    "Password": password
  }).then((resp) => {
    if (resp.data["authToken"]) {
      _set_auth_token(resp.data["authToken"]);
    } else {
      return Promise.reject(new Error("Response Object has no 'authToken'"));
    }
  })
}

export function augment(key) {
  return axios.get("/augmentations").then((resp) => {
    return resp.data
  })
}

export function _load_claims() {
  var token = window.localStorage.authToken;

  user.claims = {};
  if (token != null) {
    var s = token.split('.')
    if (s.length > 1) {
      user.claims = JSON.parse(window.atob(s[1]))
    }
  }

  // TODO: where to store CLAIMS???
}

export function _set_auth_token(authToken) {
  window.localStorage.authToken = authToken;
  _load_claims();
  axios.defaults.headers.common["Authorization"] = "Bearer " + authToken;
}

export function _delete_auth_token() {
  delete window.localStorage.authToken
  window.localStorage.removeItem("isLoggedIn");
  _load_claims();
}




