import loginServices from '../services/loginServices.js';

// Controlador para obtener  token y refresh token
const loginUser = async (body) => {
  const { username, password } = body;
  const { accessToken, refreshToken } = await loginServices.loginService(
    username,
    password
  );
  return { accessToken, refreshToken };
};

// Controlador para obtener  token a partir del refresh token
const getAccessToken = async (refreshToken) => {
  const accessToken = loginServices.getAccessTokenService(refreshToken);
  return accessToken;
};

const loginControllers = {
  loginUser,
  getAccessToken,
};

export default loginControllers;
