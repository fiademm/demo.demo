import { AuthLinkButton, LinkButton } from "../components/buttons";
import {BallTriangle} from 'react-loader-spinner'

const Register = () => {
    return (
      <div className="main-auth-container">
      <header className="auth-screen-header">Register</header>
      <section className='auth-form-container'>
        <div className='auth-input-container'>
          <label>Email address</label>
          <input className='auth-text-input' type="email"></input>
        </div>
        <div className='auth-input-container'>
          <label>Password</label>
          <input className='auth-password-input' type='password'></input>
        </div>
        <div className='auth-input-container'>
          <label>Confirm password</label>
          <input className='auth-password-input' type='password'></input>
        </div>
        <AuthLinkButton buttonText='Create account' buttonLink='/'></AuthLinkButton>
      </section>
      <span>Already have an account? <LinkButton buttonText='Login' buttonLink='/' /></span>
      <BallTriangle height={16} width={16} radius={5} color="#4fa94d" ariaLabel="ball-triangle-loading" wrapperStyle={{}} wrapperClass="" visible={true} />
    </div>
    );
  }
  

  export default Register;