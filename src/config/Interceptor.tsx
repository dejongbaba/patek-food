import axios from "axios";

export default (token: any, errHandler: any) => {
  let err = null;

  //setup interceptors for 401 errors
  axios.interceptors.response.use(
    (response: any) => {
      // Do something with response data
      return response;
    },
    (error: any) => {
      //check the response status
      if (error.response && error.response.status === 401) {
        //clear the local storage

        errHandler(error);

        setTimeout(() => {
          localStorage.clear();
          //redirect to the login page
          window.location.href = "/login";
        }, 0);
      }
      // Do something with response error
      return Promise.reject(error);
    }
  );
  if (token) {
    //setting authorization header
    // axios.defaults.headers.common['token'] = token;
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    //axios.defaults.withCredentials = true;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
  return err;
};
