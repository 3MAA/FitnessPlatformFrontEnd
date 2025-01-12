import React, { useState } from 'react';
import '../pages/styles/Login.css';
import loginImg from '../assets/login.png';
import CustomJoyInput from '../components/joyInputComponent';
import PasswordIcon from '@mui/icons-material/Password';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { IconButton } from '@mui/joy';
import { useNavigate } from 'react-router-dom';
import { Login as LoginCall } from '../services/AuthService';
import googleIcon from '../assets/google.png';
import facebookIcon from '../assets/facebook.png';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';

const Login = () => {
  const navigate = useNavigate();

  const handleRegister = () => {
    navigate('/register');
  };

  const [formData, setFormData] = useState({
    email: '',
    parola: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    parola: '',
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Hardcoded credentials
  const hardcodedUser = {
    email: 'test@example.com',
    parola: 'test1',
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {
      email: '',
      parola: '',
    };

    // Validate hardcoded credentials
    if (formData.email !== hardcodedUser.email) {
      newErrors.email = 'The email address is incorrect.';
    }

    if (formData.parola !== hardcodedUser.parola) {
      newErrors.parola = 'The password is incorrect.';
    }

    setErrors(newErrors);

    // If no errors, login is successful
    if (!Object.values(newErrors).some((message) => message !== '')) {
      console.log('Login successful!');
      navigate('/subscription'); // Navigate to the desired page
    }
  };

  return (
    <div className='container'>
      <div className='left-container'>
        <div className='panel-container'>
          <div className='header-login'>
            <h1 className='text-header-login'>Welcome!</h1>
            <h3 className='subtext-header-login'>
              We are happy to have you with us.
            </h3>
          </div>
          <div className='inputs'>
            <form onSubmit={handleSubmit}>
              <CustomJoyInput
                startDecorator={<AttachEmailIcon />}
                type='email'
                placeholder='Email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                formHelperText={
                  <span style={{ color: 'white' }}>
                    {errors.email || 'Enter your email address.'}
                  </span>
                }
                sx={{ width: '80%' }}
              />
              <CustomJoyInput
                startDecorator={<PasswordIcon />}
                endDecorator={
                  <IconButton onClick={handleTogglePassword}>
                    {showPassword ? (
                      <RemoveRedEyeIcon />
                    ) : (
                      <VisibilityOffIcon />
                    )}
                  </IconButton>
                }
                type={showPassword ? 'text' : 'password'}
                placeholder='Password'
                name='parola'
                value={formData.parola}
                onChange={handleChange}
                formHelperText={
                  <span style={{ color: 'white' }}>
                    {errors.parola || 'Enter your password.'}
                  </span>
                }
                sx={{ width: '80%' }}
              />
              <div className='text'>
                <p className='link-text'>Don't have an account? </p>
                <p className='link'>
                  <button
                    type='button'
                    role='link'
                    onClick={handleRegister}
                    className='nav-link'
                  >
                    Sign Up
                  </button>
                </p>
              </div>
              <div className='action_button'>
                <button type='submit' className='auth-button'>
                  Login
                </button>
              </div>
              <div className='second-auth'>
                <div className='icons_auth'>
                  <img src={googleIcon} alt='Google' />
                  <img src={facebookIcon} alt='Facebook' />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className='right-container'>
        <img src={loginImg} alt='Login Illustration' />
      </div>
    </div>
  );
};

export default Login;
