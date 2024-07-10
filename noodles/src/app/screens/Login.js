import { AuthLinkButton, LinkButton } from '../components/buttons';


const Login = () => {
  return (
    <div className="main-auth-container">
      <header className="auth-screen-header">Login</header>
      <section className='auth-form-container'>
        <div className='auth-input-container'>
          <label>Username</label>
          <input className='auth-text-input'></input>
        </div>
        <div className='auth-input-container'>
          <label>Password</label>
          <input className='auth-password-input' type='password'></input>
        </div>
        <AuthLinkButton buttonText='Login' buttonLink='/dashboard'></AuthLinkButton>
      </section>
      <span>Are you a new user? <LinkButton buttonText='Register here' buttonLink='/register' /></span>
    </div>
  );
}

export default Login;