import { EyeIcon, EyeOffIcon } from "@heroicons/react/outline";
import {
  KeyIcon,
  MailIcon,
  PhoneIcon,
  PhotographIcon,
  UserIcon,
} from "@heroicons/react/solid";
import { useState } from "react";
import { useForm } from "react-hook-form";

function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  const onSubmit = (data) => {
    console.log(data);
  };
  const handleEmailChange = (e) => {
    const validEmailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!validEmailRegex.test(e.target.value)) {
      setEmailError("Invalid email address");
    } else {
      setEmailError("");
    }
  };

  const handlePasswordChange = (e) => {
    const { value } = e.target;
    if (value.length < 8) {
      setPasswordError("Password must be at least 8 characters long");
    } else {
      setPasswordError("");
    }
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className="flex items-center justify-center w-full h-screen">
      <div className="flex flex-col w-full mx-auto bg-white rounded-lg shadow-md lg:flex-row">
        <div className="w-full p-10 lg:w-1/2">
          <img
            src="/login.jpg"
            alt="Sign Up"
            className="object-cover w-full h-full rounded-lg"
          />
        </div>

        <div className="flex flex-col items-center justify-center px-4 py-8 md:w-1/2">
          <h1 className="mb-4 text-3xl font-bold text-green-800">Sign Up</h1>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col w-full"
          >
            <div className="relative mb-4">
              <label htmlFor="name" className="sr-only">
                Fullname
              </label>
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <UserIcon className="w-5 h-5 text-green-800" />
              </div>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Fullname"
                className={`block w-full py-3 px-4 pl-10 focus:outline-none focus:bg-green-50 focus:placeholder-transparent border-b-4 border-green-200 transition duration-200 ${
                  errors.name ? "border-red-500" : ""
                }`}
                {...register("name", { required: true })}
              />
              {errors.name && (
                <span className="absolute text-sm text-red-500 transform -translate-y-1/2 right-3 top-1/2">
                  Name is required
                </span>
              )}
            </div>
            <div className="relative mb-4">
              <label htmlFor="name" className="sr-only">
                Image
              </label>
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <PhotographIcon className="w-5 h-5 text-green-800" />
              </div>
              <input
                type="url"
                name="image-url"
                id="image-url"
                placeholder="Image URL"
                className="block w-full px-4 py-3 pl-10 transition duration-200 border-b-4 border-green-200 focus:outline-none focus:bg-green-50 focus:placeholder-transparent"
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <MailIcon className="w-5 h-5 text-green-800" />
              </div>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                className={`block w-full py-3 px-4 pl-10 focus:outline-none focus:bg-green-50 focus:placeholder-transparent border-b-4 border-green-200 transition duration-200 ${
                  errors.email || emailError ? "border-red-500" : ""
                }`}
                {...register("email", { required: true })}
                onChange={handleEmailChange}
              />
              {errors.email && errors.email.type === "required" && (
                <span className="absolute text-sm text-red-500 transform -translate-y-1/2 right-3 top-1/2">
                  Email is required
                </span>
              )}
              {emailError && (
                <span className="absolute text-sm text-red-500 transform -translate-y-1/2 right-3 top-1/2">
                  {emailError}
                </span>
              )}
            </div>
            <div className="relative mb-4">
              <label htmlFor="phone" className="sr-only">
                Phone
              </label>
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <PhoneIcon className="w-5 h-5 text-green-800" />
              </div>
              <input
                type="text"
                name="phone"
                id="phone"
                placeholder="Phone"
                className={`block w-full py-3 px-4 pl-10 focus:outline-none focus:bg-green-50 focus:placeholder-transparent border-b-4 border-green-200 transition duration-200 ${
                  errors.phone ? "border-red-500" : ""
                }`}
                {...register("phone", { required: true })}
              />
              {errors.phone && (
                <span className="absolute text-sm text-red-500 transform -translate-y-1/2 right-3 top-1/2">
                  Phone is required
                </span>
              )}
            </div>
            <div className="relative mb-4">
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <KeyIcon className="w-5 h-5 text-green-800" />
              </div>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                placeholder="Password"
                className={`block w-full py-3 px-4 pl-10 focus:outline-none focus:bg-green-50 focus:placeholder-transparent border-b-4 border-green-200 transition duration-200 ${
                  errors.password || passwordError ? "border-red-500" : ""
                }`}
                {...register("password", { required: true })}
                onChange={handlePasswordChange}
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                {showPassword ? (
                  <EyeOffIcon
                    className="w-5 h-5 cursor-pointer text-black-600"
                    onClick={handleShowPassword}
                  />
                ) : (
                  <EyeIcon
                    className="w-5 h-5 cursor-pointer text-black-600"
                    onClick={handleShowPassword}
                  />
                )}
              </div>
              {errors.password && (
                <span className="absolute text-sm text-red-500 transform -translate-y-1/2 right-3 top-1/2">
                  Password is required
                </span>
              )}
              {passwordError && (
                <span className="absolute text-sm text-red-500 transform -translate-y-1/2 right-3 top-1/2">
                  {passwordError}
                </span>
              )}
            </div>
            <div className="relative mb-4">
              <label htmlFor="confirmPassword" className="sr-only">
                Confirm Password
              </label>
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <KeyIcon className="w-5 h-5 text-green-800" />
              </div>
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                id="confirmPassword"
                placeholder="Confirm Password"
                className={`block w-full py-3 px-4 pl-10 focus:outline-none focus:bg-green-50 focus:placeholder-transparent border-green-200 transition duration-200 ${
                  errors.confirmPassword ? "border-red-500" : ""
                }`}
                {...register("confirmPassword", {
                  required: true,
                  validate: (value) => value === watch("password"),
                })}
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                {showConfirmPassword ? (
                  <EyeOffIcon
                    className="w-5 h-5 cursor-pointer text-black-600"
                    onClick={handleShowConfirmPassword}
                  />
                ) : (
                  <EyeIcon
                    className="w-5 h-5 cursor-pointer text-black-600"
                    onClick={handleShowConfirmPassword}
                  />
                )}
              </div>
              {errors.confirmPassword && (
                <span className="absolute text-sm text-red-500 transform -translate-y-1/2 right-3 top-1/2">
                  Passwords do not match
                </span>
              )}
            </div>
            <button
              type="submit"
              className="py-3 text-lg font-bold text-white transition duration-200 bg-green-500 rounded-lg hover:bg-green-600"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
