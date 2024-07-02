import { NextResponse } from 'next/server.js';
import usersController from './controllers/usersController.js';

export const GET = async (req) => {
  const searchParams = req.nextUrl.searchParams;
  const username = searchParams.get('username'); //get query username
  const id = searchParams.get('id'); //get query id if

  let res = [];
  //if query id exists search by id
  if (id) res = await usersController.getUserById(id);
  else if (username) res = await usersController.getUserByUsername(username);
  //if query username exists search by username
  else res = await usersController.getUsers(); //else search every user

  return NextResponse.json(res);
};

export const POST = async (request, { params }) => {
  const body = await request.json();
  const res = await usersController.postUser(body);
  return NextResponse.json(res);
};
