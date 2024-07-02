import { NextResponse } from 'next/server.js';
import usersController from '../controllers/usersController.js';

export const PUT = async (req, { params }) => {
  const { id } = params;
  const body = await req.json();
  const res = await usersController.editUser(body, id);
  return NextResponse.json({ message: 'User edit succefully!' });
};

export const DELETE = async (req, { params }) => {
  const { id } = params;
  const res = await usersController.deleteUser(id);
  return NextResponse.json({ message: 'User deleted succefully!' });
};
