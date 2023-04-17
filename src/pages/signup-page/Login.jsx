import { useState } from 'react';
import { MailIcon, KeyIcon } from '@heroicons/react/solid';


  function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState
  
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
    <div className="flex justify-center items-center w-full h-screen bg-gray-100">
      <div className="flex w-3/4 mx-auto bg-white rounded-lg shadow-md">
        <div className="w-1/2 p-10">
          <img src="/signin.jpg" alt="Login" className="h-full w-full object-cover rounded-lg" />
        </div>
        <div className="w-1/2 p-10 flex flex-col items-center">
          <h1 className="text-3xl font-bold mb-6 text-green-600">Welcome Back</h1>
          </div>
          </div>
          </div>
          
  );
}

export default Login