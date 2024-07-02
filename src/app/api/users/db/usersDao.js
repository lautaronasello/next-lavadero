import getDatabase from '../../../libs/db.js';

//funcion repetitiva (TODO: crear una carpeta y exportar esta funcion para utilizar en todos los DAOS)
const handleDatabase = async (query, value) => {
  const res = await getDatabase(query, value);
  return res;
};

const getUsersDb = async () => {
  const query =
    'SELECT nombre, apellido, num_telefono, usuario, email, id_Rol FROM usuarios WHERE is_active=1';
  return await handleDatabase(query);
};

const getDataUserDb = async (id) => {
  const query = `SELECT nombre, apellido, num_telefono, usuario, email, id_Rol FROM usuarios WHERE usuario_id=? AND is_active=1`;
  const value = [id];
  return await handleDatabase(query, value);
};

const getUserByUsernameDb = async (values) => {
  const query = `SELECT nombre, apellido, num_telefono, usuario, contrasena, email, id_Rol FROM usuarios WHERE usuario=? AND is_active=1`;
  return await handleDatabase(query, values);
};

const postUserDb = async (values) => {
  const query =
    'INSERT INTO usuarios (nombre, apellido, num_telefono, usuario, contrasena, email, id_rol)VALUES (?, ?, ?, ?, ?, ?, ?)';
  return await handleDatabase(query, values);
};

const editUserDb = async (values) => {
  //COALESCE => si no se manda nada en el body toma el ultimo valor referido a esa columna

  const query = `UPDATE usuarios SET
  nombre = COALESCE(?, nombre),
  apellido = COALESCE(?, apellido),
  num_telefono = COALESCE(?, num_telefono),
  usuario = COALESCE(?, usuario),
  email = COALESCE(?, email),
  id_rol = COALESCE(?, id_rol)
  WHERE usuario_id = ?`;
  return await handleDatabase(query, values);
};

const deleteUserDb = async (id) => {
  const query = `UPDATE usuarios SET is_active=0, fecha_baja=NOW() WHERE usuario_id=? AND is_active=1`;
  const values = [id];
  return await handleDatabase(query, values);
};

const setUserActiveDb = async (id) => {
  const query =
    'UPDATE usuarios SET is_active=1, fecha_baja=null WHERE usuario_id=? AND is_active=0';
  const values = [id];
  return await handleDatabase(query, values);
};

const usersDAO = {
  getUsersDb,
  getDataUserDb,
  getUserByUsernameDb,
  postUserDb,
  editUserDb,
  deleteUserDb,
  setUserActiveDb,
};

export default usersDAO;
