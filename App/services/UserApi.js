let base64 = require('base-64');
import {request} from './../Omni';
import axios from 'axios';

const url = 'https://private-c31a5-task27.apiary-mock.com/videos';
const isSecured = url.startsWith('https');
const secure = isSecured ? '' : '&insecure=cool';
const cookieLifeTime = 120960000000;

const UserApi = {
  getList: async () => {
    return await axios.get(url);
  }
};

export default UserApi;
