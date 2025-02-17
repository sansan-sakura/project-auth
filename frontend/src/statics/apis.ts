const BASE_URL = "https://project-auth-jab0.onrender.com/";

export const CREATE_USER_API = `${BASE_URL}api/v1/user/signup`;
export const UPDATE_USER_API = (id: string) => `${BASE_URL}api/v1/user/${id}`;
export const GET_ALL_USERS_API = `${BASE_URL}api/v1/user`;
export const LOGIN_USER_API = `${BASE_URL}api/v1/user/login`;
export const DELETE_USER_API = (id: string) => `${BASE_URL}api/v1/user/delete/${id}`;
export const ADD_GIF_API = `${BASE_URL}api/v1/gif`;
