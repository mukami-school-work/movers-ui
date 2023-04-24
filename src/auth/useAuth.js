import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function useAuth() {
  const [user, setUser] = useState(null);
  const [errors, setErrors] = useState([]);
  const [localhost, server] = [
    "http://localhost:4000",
    "https://rails-lszl.onrender.com",
  ];
  const navigate = useNavigate();

  const login = async (email, password) => {
    try {
      const resp = await axios.post(`${server}/login`, {
        email: email,
        password: password,
      });
      setUser(resp.data.user);
      localStorage.setItem("jwt", resp.data.jwt);
      navigate("/");
      window.location.reload();
    } catch (error) {
      setErrors((prev) => [...prev, error.response.data.error]);
      setTimeout(() => {
        setErrors([]);
      }, 5000);
    }
  };

  const logout = () => {

    localStorage.removeItem("jwt");

    window.location.reload();
  };

  useEffect(() => {
    // Perform any necessary setup or initialization, such as checking the user's authentication status
    const auth = async () => {
      const token = localStorage.getItem("jwt");
      if (token) {
        try {
          // Send a GET request to your backend endpoint to check for authentication
          const resp = await axios.get(`${server}/profile`, {
            headers: {
              Authorization: `${token}`,
            },
          });
          // If the response is successful, update the user state with the authenticated user data
          setUser(() => resp.data);
        } catch (error) {
          // If the response is unsuccessful, clear the JWT from local storage and update the user state to null
          logout();
        }
      }
    };
    // Call the checkAuth function on component mount to check for authentication status
    auth();
  }, []);

  return {
    user,
    setUser,
    login,
    logout,
    errors,
    localhost,
    navigate,
    server,
    isLogin: Boolean(user),
  };
}
