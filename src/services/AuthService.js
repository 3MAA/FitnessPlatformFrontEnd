import axios from 'axios';
import config from '../config.json';
export const Login = async (email, password) => {
  //Auth/Login
  const data = {
    email: email,
    password: password,
  };

  const response = await axios
    .post(config.SERVER_URL + '/Auth/Login', data)
    .then(function (response) {
      localStorage.setItem('accessToken', response.data.accessToken);
      localStorage.setItem('refreshToken', response.data.refreshToken);
      console.log(response);
      return response;
    })
    .catch(function (error) {
      console.log(error);
      return error;
    });
  return response;
};
export const Register = async (userName, email, password, otp) => {
  //Auth/Register
  const data = {
    userName: userName,
    email: email,
    password: password,
    otp: otp,
  };

  const response = await axios
    .post(config.SERVER_URL + '/Auth/Register', data)
    .then(function (response) {
      console.log(response);
      if (response.status === 200) {
        return response;
      }
      return 'ERROR';
    })
    .catch(function (error) {
      console.log(error);
      return error;
    });
  return response;
};
export const GetRegistrationToken = async () => {
  //Auth/RegistrationToken
  const headers = {
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
    },
  };

  const response = await axios
    .get(config.SERVER_URL + '/Auth/RegistrationToken', headers)
    .then(function (response) {
      console.log(response);
      return response;
    })
    .catch(function (error) {
      console.log(error);
      return error;
    });
  return response;
};

export const GetUserById = async (userId) => {
  //Auth/GetUser
  const headers = {
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
    },
  };
  const response = await axios
    .get(config.SERVER_URL + '/Auth/GetUser?userId=' + userId, headers)
    .then(function (response) {
      console.log(response);
      return response;
    })
    .catch(function (error) {
      console.log(error);
      return error;
    });
  return response;
};

export const SendBugReport = async (message, sender) => {
  const response = await axios.post(config.SERVER_URL + '/BugReporting', {
    Sender: message,
    TextDetails: sender,
  });
};
