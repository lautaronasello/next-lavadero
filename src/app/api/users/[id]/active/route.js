import { NextResponse } from 'next/server.js';
import usersController from '../../controllers/usersController.js';

export const PUT = async (req, { params }) => {
  const { id } = params;
  const res = await usersController.setUserActive(id);
  return NextResponse.json({
    message: 'The User is active now succefully!',
    res,
  });
};
