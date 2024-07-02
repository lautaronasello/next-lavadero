//ACLARACIONES:
// Es importante aclarar que estoy utilizando query en vez de execute ya que las consultas son simples.
// Ademas al utilizar async await la conexion se cierra automaticamente al terminar de realizarce la consulta

import usersServices from '../services/usersServices.js';

// Controlador para obtener todos los usuarios
const getUsers = async () => {
  const res = await usersServices.getUsersService();
  return res;
};

// Controlador para obtener un usuario por su ID
const getUserById = async (id) => {
  const res = await usersServices.getUserByIdService(id);
  return res;
};

// controlador para obtener un usuario por su username
const getUserByUsername = async (username) => {
  const res = await usersServices.getUserByUsernameService(username);
  return res;
};

//usuario:launasello
//pass: ciberiano
// Función para crear un nuevo usuario
const postUser = async (body) => {
  const res = await usersServices.postUserService(body);

  return res;
};

// Controlador para actualizar un usuario
const editUser = async (body, id) => {
  const res = await usersServices.editUserService(body, id);
  return res;
};

// Controlador para eliminar un usuario
const deleteUser = async (id) => {
  return await usersServices.deleteUserService(id);
};

// Controlador para reactivar un usuario
const setUserActive = async (id) => {
  return await usersServices.setUserActiveService(id);
};

const usersController = {
  getUsers,
  getUserById,
  getUserByUsername,
  postUser,
  editUser,
  deleteUser,
  setUserActive,
};

export default usersController;
