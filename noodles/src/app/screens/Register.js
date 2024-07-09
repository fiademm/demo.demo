import { AuthLinkButton, LinkButton } from "../components/buttons";

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
    </div>
    );
  }
  
  export default Register;
  