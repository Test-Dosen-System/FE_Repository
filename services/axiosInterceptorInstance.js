'use client';

import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:1242",
  headers: {
    Accept: "application/json",
  },
});


API.interceptors.response.use(
  (res) => {
    return res;
  },
  (err) => {
    if (err.response.status !== 401) {
      throw err;
    }
    throw err;
    // console.log(err.response)
    // if (typeof err.response.data.error.name !== 'undefined') {
    //   if ( err.response.data.error.name === 'TokenExpiredError') {
    //     // store.dispatch(logout());
    //     throw err
    //   }
    // }
  }
);

export default API;
