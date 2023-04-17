import { useState } from 'react';
import { MailIcon, KeyIcon } from '@heroicons/react/solid';


  function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
  
    const handleEmailChange = (e) => {
      setEmail(e.target.value);
    };
  
    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      // Email validation
      const validEmailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
      if (!validEmailRegex.test(email)) {
        setEmailError('Invalid email address');
        return;
      }
  
      console.log('Email:', email);
      console.log('Password:', password);
    };

  return (
    <div>Login</div>
  );
}

export default Login