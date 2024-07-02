import { hashPassword } from '../../../libs/hashPass.js';
import usersDAO from '../db/usersDao.js';

const getUsersService = async () => {
  const res = await usersDAO.getUsersDb();
  return res;
};

const getUserByIdService = async (id) => {
  const res = await usersDAO.getDataUserDb(id);
  return res[0];
};

const getUserByUsernameService = async (username) => {
  const res = await usersDAO.getUserByUsernameDb(username);
  return res[0];
};

const postUserService = async (body) => {
  const passHash = await hashPassword(body.contrasena);
  let formatBody = {
    ...body,
    contrasena: passHash,
  };

  const { nombre, apellido, email, contrasena, numTelefono, idRol, usuario } =
    formatBody;

  const values = [
    nombre,
    apellido,
    numTelefono,
    usuario,
    contrasena,
    email,
    idRol,
  ];

  const res = await usersDAO.postUserDb(values);
  return res;
};

const editUserService = async (body, id) => {
  //array base columnas tabla
  const fields = [
    'nombre',
    'apellido',
    'num_telefono',
    'usuario',
    'email',
    'id_rol',
  ];
  //recorro fields para que en cada uno de los campos agregue el valor si es que existe. Si no existe se le pone null
  //es necesario que no quede ningun valor como undefined. Si algo no se manda se debe parsear a null
  const values = fields.map((field) =>
    body[field] !== undefined ? body[field] : null
  );

  //se agrega el id al final del array de valores
  values.push(id);
  const res = await usersDAO.editUserDb(values);
  return res;
};

const deleteUserService = async (id) => {
  return await usersDAO.deleteUserDb(id);
};

const setUserActiveService = async (id) => {
  return await usersDAO.setUserActiveDb(id);
};

const usersServices = {
  getUsersService,
  getUserByIdService,
  getUserByUsernameService,
  postUserService,
  editUserService,
  deleteUserService,
  setUserActiveService,
};

export default usersServices;
