import bcrypt from 'bcrypt';
import usersDAO from '../../users/db/usersDao.js';
import { SignJWT } from 'jose';
const encoder = new TextEncoder();

const SECRET_KEY = encoder.encode('TOKEN_KEY_EXTRADOS_BACK'); // Debe ser seguro y estar configurado en variables de entorno
const REFRESH_SECRET_KEY = encoder.encode('TOKEN_KEY_EXTRADOS_BACK_REFRESH'); // Para el refresh token

const loginService = async (username, password) => {
  const result = await usersDAO.getUserByUsernameDb(username);
  const user = await result[0];

  if (!user || !bcrypt.compareSync(password, user.contrasena)) {
    throw new Error('Invalid username or password');
  }

  delete user.contrasena;

  // Generar tokens
  const accessToken = await new SignJWT({ user })
    .setProtectedHeader({ alg: 'HS256' })
    .setExpirationTime('2h')
    .sign(SECRET_KEY);
  const refreshToken = await new SignJWT({ user })
    .setProtectedHeader({ alg: 'HS256' })
    .setExpirationTime('7d')
    .sign(REFRESH_SECRET_KEY);

  return { accessToken, refreshToken };
};

const loginServices = {
  loginService,
};

export default loginServices;
