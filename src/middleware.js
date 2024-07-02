import { loginMiddleware } from './middlewares/loginMiddleware.js';
export async function middleware(request) {
  return await loginMiddleware(request);
}

// Configura el middleware para que se aplique a rutas específicas
export const config = {
  matcher: '/api/:path*', // Rutas que quieres proteger
};
