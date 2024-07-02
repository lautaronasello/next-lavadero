import { NextResponse } from 'next/server.js';
import loginControllers from './controllers/loginControllers.js';

export const POST = async (req, { params }) => {
  const body = await req.json();
  const res = await loginControllers.loginUser(body);
  return NextResponse.json(res);
};
