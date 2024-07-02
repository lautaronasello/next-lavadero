'use client';
import { MdVisibility, MdVisibilityOff } from 'react-icons/md';

import { useEffect, useState } from 'react';
import axios from 'axios';

const loginToken = async (loginBody) => {
  console.log(loginBody);
  const res = await axios.post('http://localhost:3000/api/login', {
    username: loginBody.username,
    password: loginBody.password,
  });
  return res;
};

export default function LoginBox() {
  const [loginBody, setLoginBody] = useState({
    username: '',
    password: '',
  });
  const [isVisible, setIsVisible] = useState(false);

  const handleChangeInput = (e) => {
    setLoginBody((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  const handleClickLogin = async () => {
    const res = await loginToken(loginBody);
    console.log(res);
  };

  useEffect(() => {
    if (loginBody.password === '') {
      setIsVisible(false);
    }

    return () => {
      setIsVisible(false);
    };
  }, [loginBody.password]);

  return (
    <div className='flex flex-col justify-center items-center shadow-lg px-8 py-5 gap-5 border-blue-400 bg-slate-50 rounded-sm'>
      <div>
        <h1 className='text-5xl font-semibold'>Iniciar sesion</h1>
      </div>
      <div className='flex flex-col gap-14 mt-8 justify-start w-full'>
        <input
          type='text'
          name='username'
          id='username'
          placeholder='Nombre de usuario'
          className='placeholder:text-gray-400 bg-inherit border-b-gray-600 ring-inset  px-2 border-0 border-b-2 outline-none  focus:bg-gray-100'
          onChange={handleChangeInput}
        />
        <div className='flex flex-col justify-end gap-2'>
          <input
            type={isVisible ? 'text' : 'password'}
            name='password'
            id='password'
            placeholder='Contraseña'
            className='placeholder:text-gray-400 bg-inherit border-b-gray-600 ring-inset  px-2 border-0 border-b-2 outline-none  focus:bg-gray-100'
            onChange={handleChangeInput}
          />
          <button className='ml-auto'>
            {isVisible ? (
              <MdVisibility
                className={`${
                  loginBody.password === '' ? 'opacity-0' : 'opacity-100'
                } transition-opacity ease-out duration-200`}
                onClick={() => setIsVisible(false)}
              />
            ) : (
              <MdVisibilityOff
                className={`${
                  loginBody.password === '' ? 'opacity-0' : 'opacity-100'
                } transition-opacity ease-out duration-200`}
                onClick={() => setIsVisible(true)}
              />
            )}
          </button>
        </div>
      </div>

      <div className='w-full flex justify-end'>
        <button
          disabled={loginBody.username === '' || loginBody.password === ''}
          className={`bg-sky-100 px-2 py-1 rounded-md transition duration-200 ease-in-out border border-sky-800 hover:bg-sky-200 active:bg-sky-200 hover:ring-2 hover:ring-sky-300
          `}
          onClick={() => handleClickLogin()}
        >
          Entrar
        </button>
      </div>
    </div>
  );
}
