import React from 'react';
import withResponsiveLayout from '../utils/withResponsiveLayout';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

const Signup = ({ screenSize }) => {
    return (
        <div className="auth-screen-container">
            {screenSize === 'mobile' && <div>Mobile screen</div>}
            {screenSize === 'tablet' && <div>Tablet screen</div>}
            {screenSize === 'laptop' && <div>Laptop screen</div>}
            {screenSize === 'desktop' && 
            <div className='auth-form-container'>
                <h1 className='auth-form-title'>Sign up</h1>
                <div className="main-auth-input-container">    
                    <div className='auth-input-container'>
                        <label htmlFor="Username">Username</label>
                        <input type="email" name="emailaddress" placeholder='Enter your email address'/>
                    </div>

                    <div className='auth-input-container'>
                        <label htmlFor="Password">Password</label>
                        <input type="password" name="password" placeholder='Enter your password'/>
                    </div>

                    <div className='auth-input-container'>
                        <label htmlFor="Password">Confirm Password</label>
                        <input type="password" name="confirmpassword" placeholder='Re-enter your password'/>
                    </div>

                    <Button type='auth-primary' state='default' variant='no-icon' buttonText='Create account' />
                </div>
                <p className='auth-redirection-variants'>Already have an account?&nbsp;<Link to='/' className='auth-link'>Login here</Link></p>
            </div>}
        </div>
    );
};

export default withResponsiveLayout(Signup);