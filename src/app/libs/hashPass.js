import bcrypt from 'bcrypt';

export const hashPassword = async (plaintextPassword) => {
  const saltRounds = 10; // Número de saltos de hash (cuanto mayor, más seguro pero más lento)
  try {
    const hash = await bcrypt.hash(plaintextPassword, saltRounds);
    // Aquí puedes guardar el hash en tu base de datos
    return hash;
  } catch (error) {
    throw error;
  }
};
