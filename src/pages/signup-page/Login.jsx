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
          <form onSubmit={handleSubmit} className="w-full">
            <div className="mb-4 w-full">
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <div className="relative w-full">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none          
                <MailIcon className="h-5 w-5 text-green-500" /> 
                  </div>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  value={email}
                  onChange={handleEmailChange}
                  className={`block w-full py-3 px-4 pl-10 rounded-lg bg-green-100 focus:outline-none focus:bg-green-200 transition duration-200 ${emailError ? 'border-red-500' : ''}`}
                />
                {emailError && (
                  <span className="text-red-500 text-sm">{emailError}</span>
                )}
              </div>
            </div>
            <div className="mb-4 w-full">
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <div className="relative w-full">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <KeyIcon className="h-5 w-5 text-green-500" />
                </div>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  value={password}
                  onChange={handlePasswordChange}
                  className="block w-full py-3 px-4 pl-10 rounded-lg bg-green-100 focus:outline-none focus:bg-green-200 transition duration-200"
                />
              </div>
            </div>
            <button type="submit" className="block w-full py-3 px-4 rounded-lg bg-green-600 text-white font-bold text-lg hover:bg-green-700 transition duration-200">
              Log In
            </button>
          </form>
          </div>
          </div>
          </div>

  );
}

export default Login