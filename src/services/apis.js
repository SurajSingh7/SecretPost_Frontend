const BASE_URL = "https://secret-post-backend.vercel.app/api/v1"

// const BASE_URL = "http://localhost:4000/api/v1"


// AUTH ENDPOINTS
export const endpoints = {
  SENDOTP_API: BASE_URL + "/auth/sendotp",
  SIGNUP_API: BASE_URL + "/auth/signup",
  LOGIN_API: BASE_URL + "/auth/login",
  RESETPASSTOKEN_API: BASE_URL + "/auth/reset-password-token",
  RESETPASSWORD_API: BASE_URL + "/auth/reset-password",
}


  // post ENDPOINTS
  export const postEndpoints = {
    POST_CREATE_SECRET_POST_API: BASE_URL + "/createPost",
    GET_ALL_SECRET_POST_API: BASE_URL + "/getAllPost",
    GET_SINGLE_SECRET_POST_API_ID: BASE_URL + "/getPost",
    DELETE_SINGLE_SECRET_POST_API_ID: BASE_URL + "/deletePost",
    UPDATE_SINGLE_SECRET_POST_API_ID: BASE_URL + "/updatePost",
  }




