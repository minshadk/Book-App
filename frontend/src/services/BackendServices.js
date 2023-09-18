import axios from "axios";

const baseURL = "http://localhost:5000/";

//get request
const get = async (path, headers = {}, params = {}) => {
  //generating url
  const url = `${baseURL}${path}`;
  // console.log(url);
  //generating the request
  const response = await fetch(url);
  return response;
};

//post request
const post = async (path, data = {}, headers = {}, params = {}) => {
  //generating url
  const url = `${baseURL}${path}`;

  //generating the request
  const response = await axios.post(
    url,
    data
    //   _generateParams(headers, params)
  );

  return response.data;
};

//patch request
const patch = async (path, data = {}, headers = {}, params = {}) => {
  //generating url
  const url = `${baseURL}${path}`;

  //generating the request
  const response = await axios.patch(
    url,
    data
    //   _generateParams(headers, params)
  );

  return response.data.data;
};

//delete request
const destroy = async (path, headers = {}, params = {}) => {
  //generating url
  const url = `${baseURL}${path}`;

  //generating the request
  // const response = await axios.delete(url, _generateParams(headers, params));

  // return response.data;
};

const BackendServices = {
  get,
  post,
  patch,
  destroy,
};

export default BackendServices;
