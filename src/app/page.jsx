import Link from 'next/link.js';

export default function HomePage() {
  return (
    <div className='flex flex-col justify-center items-center min-h-screen gap-10 px-20'>
      <div className='text-center flex gap-10 flex-col bg-slate-50 rounded-md p-5 shadow-lg'>
        <h1 className='text-4xl'>Login lavadero autos</h1>
        <p className='leading-6'>
          Bienvenido al organizador de tu lavadero. Para continuar por favor
          inicia sesion.
        </p>
      </div>
      <Link href={'/login'}>
        <button className='rounded-md bg-slate-50 px-2 py-1 scale-105 shadow-md transition ease-out duration-200 font-medium hover:ring-2 hover:ring-teal-400 hover:shadow-lg hover:scale-125 active:shadow-md active:scale-110 hover:font-semibold'>
          Ingresar
        </button>
      </Link>
    </div>
  );
}
