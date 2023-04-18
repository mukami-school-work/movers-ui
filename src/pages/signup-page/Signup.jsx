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

  return (
    <div>Signup</div>
  )
}

export default Signup