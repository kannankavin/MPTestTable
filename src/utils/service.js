import axios from 'axios';
import {setToast, setIsLoggedOut} from 'src/redux/app-slice';
import {API_BASE_URLS } from 'src/utils/constants';

const Api = async ({
  baseUrl,
  url,
  headers,
  params,
  data = null,
}) => {
  const store = require('src/redux').default;
  const state = store.getState();
  let secureHeader = {
    'Content-Type': 'application/json',
  };

  let baseURL = API_BASE_URLS['dev'];
  if(url && url.IS_SHORTS && url.IS_SHORTS === true){
    baseURL = API_SHORTS_BASE_URLS['dev'];
  }
  let raw = params ? JSON.stringify(params) : null;
  let response = {};
  
  let requestOptions = {
    method: url.METHOD,
    headers: secureHeader,
    redirect: 'follow'
  };
  if(['POST','PUT'].includes(url.METHOD)){
    requestOptions = {
      method: url.METHOD,
      headers: secureHeader,
      body: raw,
      redirect: 'follow'
    };
  }

  let URL = baseURL + url.URI;
  if(url.TYPE === 'OTP'){
    URL = URL + '?phoneNumber='+params.phoneNumber;
  }
  console.log("URL", URL);
  console.log("requestOptions", requestOptions);
  response = await fetch(URL, requestOptions)
    .then(response => response.text())
    .then(result => result)
    .catch(error => error);

  if (response?.status === null && response?.message === 'Network Error') {
    store.dispatch(
      setToast({
        show: true,
        message: 'Something went wrong. Please try again later.',
      }),
    );
  } else if (response?.status && response.status !== 200) {
    if (response.status === 401) {
      store.dispatch(setIsLoggedOut(true));
    }
    return Promise.reject(response);
  }
  console.log("response == " , response)
  return JSON.parse(response);
  
};

export default Api;