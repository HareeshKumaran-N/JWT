import { createToken,verifyToken } from "../../services/jwt/jwtProvider.js";
const userData = {
  name: "Hareesh",
  password: "Koko@531",
};

export const loginUser = (req, res) => {
  if (req.body) {
    const { name: reqName, password: reqPassword } = req.body;

    if (userData.name !== reqName && userData.password !== reqPassword)
      res.status(401).json({ message: "Please enter valid credentials" });

    //create a token if the user is a authorised user.
    const token = createToken({ name: reqName, password: reqPassword });
    res.send(token);
  } else {
    res.status(400).send("No data received");
  }
};

export const showData = (req, res) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(400).send("No authorization key found in header");
  }

  console.log(verifyToken(authorization));

  if(verifyToken(authorization))
  {
      console.log('authorization passed');
  }
  else
  {
    console.log('authorization failed');
  }


};
