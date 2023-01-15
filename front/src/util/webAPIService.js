import axiosbase from "axios";

const config = {
  baseURL: "",
  timeout: 10000,
  headers: {
    Accept: "application/json",
    "Content-type": "application/json"
  }
};
const api = axiosbase.create(config);

export default api;

/**
 * get all users
 */
export function getAllUsers() {
  return api.get("users").then(response => response.data);
}

/**
 * add new user
 * @param {user name} name
 */
export function postUser(name) {
  const postBody = {
    name: name,
    loginName: name,
    password: "dc"
  };

  return api.post("users", postBody);
}

/**
 * get all comments
 */
export function getAllComments() {
  return api.get("comments").then(response => response.data);
}

/**
 * post new comment
 *
 * @param {string} userId
 * @param {string} content
 */
export function postComment(userId, content) {
  const postBody = {
    postedBy: userId,
    content: content,
    postedDate: new Date()
  };

  return api.post("comments", postBody);
}
