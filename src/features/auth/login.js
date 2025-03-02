import React from 'react';
import { GoogleLogin } from 'react-google-login';

const clientId =
  '305535965457-ddq5g7pk6dtpcp4nrm051pvcj9q0c83c.apps.googleusercontent.com';

const Login = () => {
  const onSuccess = (res) => {
    console.log('[Login Success] currentUser:', res.profileObj);
  };

  const onFailure = (res) => {
    console.log('[Login failed] res:', res);
  };

  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        buttonText={'Login'}
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        style={{ marginTop: '100px' }}
        isSignedIn={true}
      />
    </div>
  );
};

export default Login;
