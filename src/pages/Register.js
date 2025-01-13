import React, { useState } from 'react';
import '../pages/styles/Register.css';
import registerImg from '../assets/register3.png';
import CustomJoyInput from '../components/joyInputComponent';
import PasswordIcon from '@mui/icons-material/Password';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { IconButton } from '@mui/joy';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import PersonIcon from '@mui/icons-material/Person';
import googleIcon from '../assets/google.png';
import facebookIcon from '../assets/facebook.png';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const passwordPattern = /^(?=.*[A-Z]).{6,}$/;

    const newErrors = {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    };

    // Validare username
    if (!formData.username || formData.username.length < 3) {
      newErrors.username = 'Username must be at least 3 characters long.';
    }

    // Validare email
    if (!formData.email || !emailPattern.test(formData.email)) {
      newErrors.email = 'The email address is not valid.';
    }

    // Validare parolă
    if (!formData.password || !passwordPattern.test(formData.password)) {
      newErrors.password =
        'Password must contain one uppercase letter or digit.';
    }

    // Validare confirmare parolă
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match.';
    }

    setErrors(newErrors);

    // Verificăm dacă există erori și validăm formularul
    if (!Object.values(newErrors).some((message) => message !== '')) {
      alert('Registration successful!');
      setFormData({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
    }
  };

  return (
    <div className='register-container'>
      <div className='register-left'>
        <img src={registerImg} alt='Register Illustration' />
      </div>
      <div className='register-right'>
        <div className='register-panel'>
          <div className='register-header'>
            <h1 className='register-title'>Sign Up</h1>
            <h3 className='register-subtitle'>
              Join us and be part of something amazing!
            </h3>
          </div>
          <form className='register-form' onSubmit={handleSubmit}>
            <CustomJoyInput
              startDecorator={<PersonIcon />}
              type='text'
              placeholder='Username'
              name='username'
              value={formData.username}
              onChange={handleChange}
              formHelperText={
                <span style={{ color: 'white' }}>{errors.username || ''}</span>
              }
            />
            <CustomJoyInput
              startDecorator={<AttachEmailIcon />}
              type='email'
              placeholder='Email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              formHelperText={
                <span style={{ color: 'white' }}>{errors.email || ''}</span>
              }
            />
            <CustomJoyInput
              startDecorator={<PasswordIcon />}
              endDecorator={
                <IconButton onClick={handleTogglePassword}>
                  {showPassword ? <RemoveRedEyeIcon /> : <VisibilityOffIcon />}
                </IconButton>
              }
              type={showPassword ? 'text' : 'password'}
              placeholder='Password'
              name='password'
              value={formData.password}
              onChange={handleChange}
              formHelperText={
                <span style={{ color: 'white' }}>{errors.password || ''}</span>
              }
            />
            <CustomJoyInput
              startDecorator={<PasswordIcon />}
              type={showPassword ? 'text' : 'password'}
              placeholder='Confirm Password'
              name='confirmPassword'
              value={formData.confirmPassword}
              onChange={handleChange}
              formHelperText={
                <span style={{ color: 'white' }}>
                  {errors.confirmPassword || ''}
                </span>
              }
            />
            <button type='submit' className='register-button'>
              Register
            </button>
            <div className='register-alt-auth'>
              <p>Or sign up using:</p>
              <div className='register-icons'>
                <img src={googleIcon} alt='Google' />
                <img src={facebookIcon} alt='Facebook' />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
