import LoginBox from '../components/login/LoginBox.jsx';

export default function LoginPage() {
  return (
    <div className='flex flex-col gap-5 justify-center items-center min-h-screen'>
      <LoginBox />
      <p className='underline decoration-solid hover:decoration-double cursor-pointer'>
        Olvidaste tu contraseña?
      </p>
    </div>
  );
}
