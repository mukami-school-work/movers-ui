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
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-full">
        <div className="relative mb-4">
  <label htmlFor="name" className="sr-only">
    Fullname
  </label>
  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
    <UserIcon className="h-5 w-5 text-green-800" />
  </div>
  <input
    type="text"
    name="name"
    id="name"
    placeholder="Fullname"
    className={`block w-full py-3 px-4 pl-10 focus:outline-none focus:bg-green-50 focus:placeholder-transparent border-b-4 border-green-200 transition duration-200 ${
      errors.name ? 'border-red-500' : ''
    }`}
    {...register('name', { required: true })}
  />
  {errors.name && (
    <span className="text-red-500 text-sm absolute right-3 top-1/2 transform -translate-y-1/2">
      Name is required
    </span>
  )}
</div>
<div className="relative mb-4">
  <label htmlFor="name" className="sr-only">
    Image
  </label>
  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
    <PhotographIcon className="h-5 w-5 text-green-800" />
  </div>
  <input
    type="url"
    name="image-url"
    id="image-url"
    placeholder="Image URL"
    className='block w-full py-3 px-4 pl-10 focus:outline-none focus:bg-green-50 focus:placeholder-transparent border-b-4 border-green-200 transition duration-200'/>
          </div>       
          <div className="relative mb-4">
        <label htmlFor="email" className="sr-only">
          Email
        </label>
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <MailIcon className="h-5 w-5 text-green-800" />
        </div>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          className={`block w-full py-3 px-4 pl-10 focus:outline-none focus:bg-green-50 focus:placeholder-transparent border-b-4 border-green-200 transition duration-200 ${
            errors.email || emailError ? 'border-red-500' : ''
          }`}
          {...register('email', { required: true })}
          onChange={handleEmailChange}
        />
        {(errors.email && errors.email.type === 'required') && (
          <span className="text-red-500 text-sm absolute right-3 top-1/2 transform -translate-y-1/2">
            Email is required
          </span>
        )}
        {emailError && (
          <span className="text-red-500 text-sm absolute right-3 top-1/2 transform -translate-y-1/2">
            {emailError}
          </span>
        )}
      </div>
      <div className="relative mb-4">
        <label htmlFor="phone" className="sr-only">
          Phone
        </label>
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <PhoneIcon className="h-5 w-5 text-green-800" />
        </div>
        <input
          type="text"
          name="phone"
          id="phone"
          placeholder="Phone"
          className={`block w-full py-3 px-4 pl-10 focus:outline-none focus:bg-green-50 focus:placeholder-transparent border-b-4 border-green-200 transition duration-200 ${
            errors.phone ? 'border-red-500' : ''
          }`}
          {...register('phone', { required: true })}
        />
        {errors.phone && (
          <span className="text-red-500 text-sm absolute right-3 top-1/2 transform -translate-y-1/2">
            Phone is required
          </span>
        )}
      </div>
      <div className="relative mb-4">
        <label htmlFor="password" className="sr-only">
          Password
        </label>
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <KeyIcon className="h-5 w-5 text-green-800" />
        </div>
        <input
          type={showPassword ? 'text' : 'password'}
          name="password"
          id="password"
          placeholder="Password"
          className={`block w-full py-3 px-4 pl-10 focus:outline-none focus:bg-green-50 focus:placeholder-transparent border-b-4 border-green-200 transition duration-200 ${
            errors.password || passwordError ? 'border-red-500' : ''
          }`}
          {...register('password', { required: true })}
          onChange={handlePasswordChange}
        />
        <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
          {showPassword ? (
            <EyeOffIcon className="h-5 w-5 text-black-600 cursor-pointer" onClick={handleShowPassword} />
          ) : (
            <EyeIcon className="h-5 w-5 text-black-600 cursor-pointer" onClick={handleShowPassword} />
          )}
        </div>     
{errors.password && (
<span className="text-red-500 text-sm absolute right-3 top-1/2 transform -translate-y-1/2">
  Password is required
</span>
)}
{passwordError && (
<span className="text-red-500 text-sm absolute right-3 top-1/2 transform -translate-y-1/2">
  {passwordError}
</span>
)}
</div>
<div className="relative mb-4">
<label htmlFor="confirmPassword" className="sr-only">
Confirm Password
</label>
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<KeyIcon className="h-5 w-5 text-green-800" />
</div>
<input
type={showConfirmPassword ? 'text' : 'password'}
name="confirmPassword"
id="confirmPassword"
placeholder="Confirm Password"
className={`block w-full py-3 px-4 pl-10 focus:outline-none focus:bg-green-50 focus:placeholder-transparent border-green-200 transition duration-200 ${errors.confirmPassword ? 'border-red-500' : ''}`}
{...register('confirmPassword', {
  required: true,
  validate: (value) => value === watch('password'),
})}
/>
<div className="absolute inset-y-0 right-0 pr-3 flex items-center">
{showConfirmPassword ? (
  <EyeOffIcon
    className="h-5 w-5 text-black-600 cursor-pointer"
    onClick={handleShowConfirmPassword}
  />
) : (
  <EyeIcon
    className="h-5 w-5 text-black-600 cursor-pointer"
    onClick={handleShowConfirmPassword}
  />
)}
</div>
{errors.confirmPassword && (
<span className="text-red-500 text-sm absolute right-3 top-1/2 transform -translate-y-1/2">
  Passwords do not match
</span>
)}
</div>
<button
type="submit"
className="bg-green-500 text-white font-bold text-lg hover:bg-green-600 rounded-lg py-3 transition duration-200"
>
Sign Up
</button>
</form>
      </div>
    </div>
  </div>
  )
}

export default Signup