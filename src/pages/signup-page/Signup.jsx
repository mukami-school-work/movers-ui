// import { EyeIcon, EyeOffIcon } from "@heroicons/react/outline";
// import {
//   KeyIcon,
//   MailIcon,
//   PhoneIcon,
//   PhotographIcon,
//   UserIcon,
// } from "@heroicons/react/solid";
// import { useState } from "react";
// import { useForm } from "react-hook-form";

// function Signup() {
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//   const [emailError, setEmailError] = useState("");
//   const [passwordError, setPasswordError] = useState("");
//   const {
//     register,
//     handleSubmit,
//     watch,
//     formState: { errors },
//   } = useForm({ mode: "onBlur" });

//   const onSubmit = (data) => {
//     console.log(data);
//   };
//   const handleEmailChange = (e) => {
//     const validEmailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
//     if (!validEmailRegex.test(e.target.value)) {
//       setEmailError("Invalid email address");
//     } else {
//       setEmailError("");
//     }
//   };

//   const handlePasswordChange = (e) => {
//     const { value } = e.target;
//     if (value.length < 8) {
//       setPasswordError("Password must be at least 8 characters long");
//     } else {
//       setPasswordError("");
//     }
//   };

//   const handleShowPassword = () => {
//     setShowPassword(!showPassword);
//   };

//   const handleShowConfirmPassword = () => {
//     setShowConfirmPassword(!showConfirmPassword);
//   };

//   return (
//     <div className="flex items-center justify-center w-full h-screen">
//       <div className="flex flex-col w-full mx-auto bg-white rounded-lg shadow-md lg:flex-row">
//         <div className="w-full p-10 lg:w-1/2">
//           <img
//             src="/login.jpg"
//             alt="Sign Up"
//             className="object-cover w-full h-full rounded-lg"
//           />
//         </div>

//         <div className="flex flex-col items-center justify-center px-4 py-8 md:w-1/2">
//           <h1 className="mb-4 text-3xl font-bold text-green-800">Sign Up</h1>
//           <form
//             onSubmit={handleSubmit(onSubmit)}
//             className="flex flex-col w-full"
//           >
//             <div className="relative mb-4">
//               <label htmlFor="name" className="sr-only">
//                 Fullname
//               </label>
//               <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
//                 <UserIcon className="w-5 h-5 text-green-800" />
//               </div>
//               <input
//                 type="text"
//                 name="name"
//                 id="name"
//                 placeholder="Fullname"
//                 className={`block w-full py-3 px-4 pl-10 focus:outline-none focus:bg-green-50 focus:placeholder-transparent border-b-4 border-green-200 transition duration-200 ${
//                   errors.name ? "border-red-500" : ""
//                 }`}
//                 {...register("name", { required: true })}
//               />
//               {errors.name && (
//                 <span className="absolute text-sm text-red-500 transform -translate-y-1/2 right-3 top-1/2">
//                   Name is required
//                 </span>
//               )}
//             </div>
//             <div className="relative mb-4">
//               <label htmlFor="name" className="sr-only">
//                 Image
//               </label>
//               <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
//                 <PhotographIcon className="w-5 h-5 text-green-800" />
//               </div>
//               <input
//                 type="url"
//                 name="image-url"
//                 id="image-url"
//                 placeholder="Image URL"
//                 className="block w-full px-4 py-3 pl-10 transition duration-200 border-b-4 border-green-200 focus:outline-none focus:bg-green-50 focus:placeholder-transparent"
//               />
//             </div>
//             <div className="relative mb-4">
//               <label htmlFor="email" className="sr-only">
//                 Email
//               </label>
//               <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
//                 <MailIcon className="w-5 h-5 text-green-800" />
//               </div>
//               <input
//                 type="email"
//                 name="email"
//                 id="email"
//                 placeholder="Email"
//                 className={`block w-full py-3 px-4 pl-10 focus:outline-none focus:bg-green-50 focus:placeholder-transparent border-b-4 border-green-200 transition duration-200 ${
//                   errors.email || emailError ? "border-red-500" : ""
//                 }`}
//                 {...register("email", { required: true })}
//                 onChange={handleEmailChange}
//               />
//               {errors.email && errors.email.type === "required" && (
//                 <span className="absolute text-sm text-red-500 transform -translate-y-1/2 right-3 top-1/2">
//                   Email is required
//                 </span>
//               )}
//               {emailError && (
//                 <span className="absolute text-sm text-red-500 transform -translate-y-1/2 right-3 top-1/2">
//                   {emailError}
//                 </span>
//               )}
//             </div>
//             <div className="relative mb-4">
//               <label htmlFor="phone" className="sr-only">
//                 Phone
//               </label>
//               <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
//                 <PhoneIcon className="w-5 h-5 text-green-800" />
//               </div>
//               <input
//                 type="text"
//                 name="phone"
//                 id="phone"
//                 placeholder="Phone"
//                 className={`block w-full py-3 px-4 pl-10 focus:outline-none focus:bg-green-50 focus:placeholder-transparent border-b-4 border-green-200 transition duration-200 ${
//                   errors.phone ? "border-red-500" : ""
//                 }`}
//                 {...register("phone", { required: true })}
//               />
//               {errors.phone && (
//                 <span className="absolute text-sm text-red-500 transform -translate-y-1/2 right-3 top-1/2">
//                   Phone is required
//                 </span>
//               )}
//             </div>
//             <div className="relative mb-4">
//               <label htmlFor="password" className="sr-only">
//                 Password
//               </label>
//               <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
//                 <KeyIcon className="w-5 h-5 text-green-800" />
//               </div>
//               <input
//                 type={showPassword ? "text" : "password"}
//                 name="password"
//                 id="password"
//                 placeholder="Password"
//                 className={`block w-full py-3 px-4 pl-10 focus:outline-none focus:bg-green-50 focus:placeholder-transparent border-b-4 border-green-200 transition duration-200 ${
//                   errors.password || passwordError ? "border-red-500" : ""
//                 }`}
//                 {...register("password", { required: true })}
//                 onChange={handlePasswordChange}
//               />
//               <div className="absolute inset-y-0 right-0 flex items-center pr-3">
//                 {showPassword ? (
//                   <EyeOffIcon
//                     className="w-5 h-5 cursor-pointer text-black-600"
//                     onClick={handleShowPassword}
//                   />
//                 ) : (
//                   <EyeIcon
//                     className="w-5 h-5 cursor-pointer text-black-600"
//                     onClick={handleShowPassword}
//                   />
//                 )}
//               </div>
//               {errors.password && (
//                 <span className="absolute text-sm text-red-500 transform -translate-y-1/2 right-3 top-1/2">
//                   Password is required
//                 </span>
//               )}
//               {passwordError && (
//                 <span className="absolute text-sm text-red-500 transform -translate-y-1/2 right-3 top-1/2">
//                   {passwordError}
//                 </span>
//               )}
//             </div>
//             <div className="relative mb-4">
//               <label htmlFor="confirmPassword" className="sr-only">
//                 Confirm Password
//               </label>
//               <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
//                 <KeyIcon className="w-5 h-5 text-green-800" />
//               </div>
//               <input
//                 type={showConfirmPassword ? "text" : "password"}
//                 name="confirmPassword"
//                 id="confirmPassword"
//                 placeholder="Confirm Password"
//                 className={`block w-full py-3 px-4 pl-10 focus:outline-none focus:bg-green-50 focus:placeholder-transparent border-green-200 transition duration-200 ${
//                   errors.confirmPassword ? "border-red-500" : ""
//                 }`}
//                 {...register("confirmPassword", {
//                   required: true,
//                   validate: (value) => value === watch("password"),
//                 })}
//               />
//               <div className="absolute inset-y-0 right-0 flex items-center pr-3">
//                 {showConfirmPassword ? (
//                   <EyeOffIcon
//                     className="w-5 h-5 cursor-pointer text-black-600"
//                     onClick={handleShowConfirmPassword}
//                   />
//                 ) : (
//                   <EyeIcon
//                     className="w-5 h-5 cursor-pointer text-black-600"
//                     onClick={handleShowConfirmPassword}
//                   />
//                 )}
//               </div>
//               {errors.confirmPassword && (
//                 <span className="absolute text-sm text-red-500 transform -translate-y-1/2 right-3 top-1/2">
//                   Passwords do not match
//                 </span>
//               )}
//             </div>
//             <button
//               type="submit"
//               className="py-3 text-lg font-bold text-white transition duration-200 bg-green-500 rounded-lg hover:bg-green-600"
//             >
//               Sign Up
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Signup;

import axios from "axios";
import { useState } from "react";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [profilePicture, setProfilePicture] = useState(null);
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleProfilePictureChange = (event) => {
    setProfilePicture(event.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("ConfirmPassword:", confirmPassword);
    console.log("PhoneNumber:", phoneNumber);
    console.log("ProfilePicture:", profilePicture);

    // Validate the form data
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }
    if (!/^\+254[0-9]{9}$/.test(phoneNumber)) {
      alert("Please enter a valid phone number in the format +254XXXXXXXXX.");
      return;
    }
    if (profilePicture === null) {
      alert("Please upload a profile picture.");
      return;
    }

    // Upload the profile picture to Cloudinary
    const formData = new FormData();
    formData.append("file", profilePicture);
    formData.append("upload_preset", "your_cloudinary_upload_preset_here");
    axios
      .post(
        "https://api.cloudinary.com/v1_1/your_cloud_name_here/image/upload",
        formData
      )
      .then((response) => {
        // Send the form data to the backend with the Cloudinary URL
        const userData = {
          name: name,
          email: email,
          password: password,
          confirm_password: confirmPassword,
          phone_number: phoneNumber,
          profile_picture_url: response.data.secure_url,
        };
        axios
          .post("https://your_rails_backend_url_here/users", userData)
          .then((response) => {
            console.log(response.data); // Handle the response here
          })
          .catch((error) => {
            console.log(error); // Handle the error here
          });
      })
      .catch((error) => {
        console.log(error); // Handle the error here
      });
  };

  return (
    <section>
      <div className="flex items-center justify-center overflow-hidden min-">
        <div className="flex flex-col px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="w-full max-w-xl mx-auto lg:w-96">
            {/* Form Title */}
            <div>
              <a href="/" className="font-bold text-primary-green text-medium">
                Movers
              </a>
              <h2 className="mt-6 text-3xl font-extrabold text-neutral-600">
                Get Started.
              </h2>
            </div>

            {/* Form Fields */}
            <div className="mt-8">
              <div className="mt-6">
                <form action="#" onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Field */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-neutral-600"
                    >
                      {" "}
                      Full Name{" "}
                    </label>
                    <div className="mt-1">
                      <input
                        id="name"
                        name="name"
                        type="text"
                        onChange={handleNameChange}
                        required
                        placeholder="Your Name"
                        className="block w-full px-5 py-3 text-base placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg text-neutral-600 bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                      />
                    </div>
                  </div>

                  {/* Email Field */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-neutral-600"
                    >
                      {" "}
                      Email address{" "}
                    </label>
                    <div className="mt-1">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={email}
                        autoComplete="email"
                        onChange={handleEmailChange}
                        required
                        placeholder="Your Email"
                        className="block w-full px-5 py-3 text-base placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg text-neutral-600 bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                      />
                    </div>
                  </div>

                  {/* Phone Field */}
                  <div>
                    <label
                      htmlFor="phone-number"
                      className="block text-sm font-medium text-neutral-600"
                    >
                      {" "}
                      Phone Number{" "}
                    </label>
                    <div className="mt-1">
                      <input
                        id="phone-number"
                        name="phone-number"
                        type="tel"
                        pattern="^\+254[0-9]{9}$"
                        value={phoneNumber}
                        onChange={handlePhoneNumberChange}
                        required
                        placeholder="e.g. +254711222333"
                        className="block w-full px-5 py-3 text-base placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg text-neutral-600 bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-2 lg:grid-cols-2">
                    {/* Password Field */}
                    <div className="space-y-1">
                      <label
                        htmlFor="password"
                        className="block text-sm font-medium text-neutral-600"
                      >
                        {" "}
                        Password{" "}
                      </label>
                      <div className="flex mt-1">
                        <input
                          id="password"
                          name="password"
                          value={password}
                          type={passwordVisible ? "text" : "password"}
                          onChange={handlePasswordChange}
                          autoComplete="current-password"
                          required
                          placeholder="Your Password"
                          className="block w-full px-5 py-3 mr-1 text-base placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg text-neutral-600 bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                        />
                      </div>
                    </div>

                    {/* Password Confirmation Field */}
                    <div>
                      <label
                        htmlFor="confirm-password"
                        className="block text-sm font-medium text-neutral-600"
                      >
                        {" "}
                        Confirm Password{" "}
                      </label>
                      <div className="flex mt-1">
                        <input
                          id="confirm-password"
                          name="confirm-password"
                          type={passwordVisible ? "text" : "password"}
                          value={confirmPassword}
                          onChange={handleConfirmPasswordChange}
                          required=""
                          placeholder="Confirm Your Password"
                          className="block w-full px-5 py-3 mr-1 text-base placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg text-neutral-600 bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                        />
                        <button
                          onClick={togglePasswordVisibility}
                          className="px-4 transition duration-500 ease-in-out transform border-none rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300 hover:cursor-pointer hover:bg-gray-100"
                        >
                          {passwordVisible ? (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-6 h-6 text-primary-green"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                              />
                            </svg>
                          ) : (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-6 h-6 text-primary-green"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                              />
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                              />
                            </svg>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Profile Picture Field */}
                  <div>
                    <label
                      htmlFor="profile-picture"
                      className="block text-sm font-medium text-neutral-600"
                    >
                      {" "}
                      Profile Picture{" "}
                    </label>
                    <div className="mt-1">
                      <input
                        id="profile-picture"
                        name="profile-picture"
                        type="file"
                        accept="image/*"
                        onChange={handleProfilePictureChange}
                        required
                        className="block w-full px-5 py-3 text-base placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg text-neutral-600 bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                      />
                    </div>
                  </div>

                  {/* Create Account Button */}
                  <div>
                    <button
                      type="submit"
                      className="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform border-none bg-primary-green rounded-xl hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                    >
                      Sign Up
                    </button>
                  </div>
                </form>

                {/* Or statement */}
                <div className="relative my-4">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-neutral-600">
                      {" "}
                      Already have an account?{" "}
                    </span>
                  </div>
                </div>

                {/* Login Button */}
                <div>
                  <a
                    href="/login"
                    className="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center transition duration-500 ease-in-out transform border-none bg-black-800 text-primary-green rounded-xl hover:bg-black-600 hover:text-primary-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                  >
                    <div className="flex items-center justify-center">
                      <span className="ml-4"> Sign In</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
