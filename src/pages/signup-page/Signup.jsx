import { useState } from 'react';
import { MailIcon, KeyIcon, PhoneIcon, UserIcon, PhotographIcon } from '@heroicons/react/solid';
import { EyeIcon, EyeOffIcon } from '@heroicons/react/outline';
import { useForm } from 'react-hook-form';

function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ mode: 'onBlur' });

  const onSubmit = (data) => {
    console.log(data);
  };
  const handleEmailChange = (e) => {
    const validEmailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!validEmailRegex.test(e.target.value)) {
      setEmailError('Invalid email address');
    } else {
      setEmailError('');
    }
  };

  const handlePasswordChange = (e) => {
    const { value } = e.target;
    if (value.length < 8) {
      setPasswordError('Password must be at least 8 characters long');
    } else {
      setPasswordError('');
    }
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className="flex justify-center items-center w-full h-screen">
    <div className="flex flex-col lg:flex-row w-full mx-auto bg-white rounded-lg shadow-md">
    <div className="w-full lg:w-1/2 p-10">
    <img src="/login.jpg" alt="Sign Up" className="h-full w-full object-cover rounded-lg"  />

      </div>
    
    <div className="flex flex-col justify-center items-center md:w-1/2 px-4 py-8">
      <h1 className="text-3xl font-bold text-green-800 mb-4">Sign Up</h1>
      </div>
    </div>
  </div>
  )
}

export default Signup