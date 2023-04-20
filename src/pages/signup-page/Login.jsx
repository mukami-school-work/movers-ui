import { KeyIcon, MailIcon } from "@heroicons/react/solid";
import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");

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
      setEmailError("Invalid email address");
      return;
    }

    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="flex items-center justify-center w-full h-screen">
      <div className="flex flex-col w-full mx-auto bg-white rounded-lg shadow-md lg:flex-row">
        <div className="w-full p-10 lg:w-1/2">
          <img
            src="/signin.jpg"
            alt="Login"
            className="object-cover w-full h-full rounded-lg"
          />
        </div>
        <div className="flex flex-col items-center w-full p-10 lg:w-1/2">
          <h1 className="mb-6 text-3xl font-bold text-black">Welcome Back</h1>
          <form onSubmit={handleSubmit} className="w-full">
            <div className="w-full mb-4">
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <div className="relative w-full">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <MailIcon className="w-5 h-5 text-green-500" />
                </div>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  value={email}
                  onChange={handleEmailChange}
                  className={`block w-full py-3 px-4 pl-10 focus:outline-none focus:bg-green-50 focus:placeholder-transparent border-b-2 border-green-200 transition duration-200 ${
                    emailError ? "border-red-500" : ""
                  }`}
                />
                {emailError && (
                  <span className="text-sm text-red-500">{emailError}</span>
                )}
              </div>
            </div>
            <div className="w-full mb-4">
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <div className="relative w-full">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <KeyIcon className="w-5 h-5 text-green-500" />
                </div>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  value={password}
                  onChange={handlePasswordChange}
                  className="block w-full px-4 py-3 pl-10 transition duration-200 border-b-2 border-green-200 focus:outline-none focus:bg-green-50 focus:placeholder-transparent"
                />
              </div>
            </div>
            <button
              type="submit"
              className="block w-full px-4 py-3 mt-4 text-lg font-bold text-center text-white transition duration-200 bg-green-600 rounded-lg hover:bg-green-700"
            >
              Log In
            </button>
          </form>
          <div className="flex items-center justify-between w-full mt-4">
            <a
              href="/forgot-password"
              className="text-green-600 hover:underline"
            >
              Forgot Password
            </a>
            <div>
              <p>
                <a href="/signup" className="text-green-600 hover:underline">
                  <span className="mb-2 text-right text-gray-600">
                    Don't have an account?
                  </span>{" "}
                  Sign Up
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
