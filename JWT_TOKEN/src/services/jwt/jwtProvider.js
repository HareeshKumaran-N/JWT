import jwt from 'jsonwebtoken';

import { secretKey } from './jwtConfig.js';

export const createToken=(payload)=>{

  console.log(payload);
    const result=jwt.sign(payload,secretKey);
    return result;
}

export const verifyToken = (token) => {
  try {
    console.log(token);
    const result = jwt.verify(token, secretKey);
    console.log('verfication result',result);
    return result;
  } catch (err) {
    console.log("error while verfying a token error");
    return false;
  }
};