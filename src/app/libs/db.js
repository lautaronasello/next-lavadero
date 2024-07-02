import mysql from 'serverless-mysql';

const getDatabase = async (query, value) => {
  const connection = mysql({
    config: {
      host: 'localhost',
      user: 'root',
      password: 'admin123',
      database: 'db_lavadero',
    },
  });
  try {
    if (value) {
      const res = await connection.query(query, value);
      return res;
    } else {
      const res = await connection.query(query);
      return res;
    }
  } catch (error) {
    let err = new Error();
    throw err;
  } finally {
    await connection.end();
  }
};
export default getDatabase;
