/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { HashLoader } from "react-spinners";

export default function useAuth() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState([]);
  const [apartments, setApartments] = useState([]);
  const [inventories, setInventories] = useState([]);
  const [boxes, setBoxes] = useState([]);
  const token = localStorage.getItem("jwt");
  const [localhost, server] = [
    "http://localhost:4000",
    "https://rails-lszl.onrender.com",
  ];
  const navigate = useNavigate();

  // When we first launch the application!!!
  useEffect(() => {
    // Perform any necessary setup or initialization, such as checking the user's authentication status
    const auth = async () => {
      setLoading(true);
      if (token) {
        // Fetch Apartments
        try {
          const resp = await axios.get(`${server}/apartments`, {
            headers: {
              Authorization: `${token}`,
            },
          });
          // If the response is successful, update the apartments state with the authenticated apartments data
          setApartments(() => resp.data);
        } catch (error) {
          console.log(error);
        }

        // Fetch Inventories
        try {
          const resp = await axios.get(`${server}/inventories`, {
            headers: {
              Authorization: `${token}`,
            },
          });
          // If the response is successful, update the inventories state with the authenticated inventories data
          setInventories(() => resp.data);
        } catch (error) {
          console.log(error);
        }

        // Fetch Boxes
        try {
          const resp = await axios.get(`${server}/boxes`, {
            headers: {
              Authorization: `${token}`,
            },
          });
          // If the response is successful, update the inventories state with the authenticated inventories data
          setBoxes(() => resp.data);
        } catch (error) {
          console.log(error);
        }

        // Fetch User
        try {
          // Send a GET request to your backend endpoint to check for authentication
          const resp = await axios.get(`${server}/profile`, {
            headers: {
              Authorization: `${token}`,
            },
          });
          // If the response is successful, update the user state with the authenticated user data
          setUser(() => resp.data);
          setLoading(false);
        } catch (error) {
          // If the response is unsuccessful, clear the JWT from local storage and update the user state to null
          logout();
        }
      } else {
        setLoading(false);
      }
    };

    // Call the checkAuth function on component mount to check for authentication status
    auth();
  }, []);

  const spinner = () => {
    return (
      <>
        <div className="spinner">
          <div className="flex items-center justify-center mr-16">
            <svg
              className="w-12 text-deep-purple-accent-400"
              viewBox="0 0 24 24"
              strokeLinejoin="round"
              strokeWidth="2"
              strokeLinecap="round"
              strokeMiterlimit="10"
              stroke="#08CF65"
              fill="none"
            >
              <rect x="3" y="1" width="7" height="12" />
              <rect x="3" y="17" width="7" height="6" />
              <rect x="14" y="1" width="7" height="6" />
              <rect x="14" y="11" width="7" height="12" />
            </svg>
            <p className="ml-5 mr-3 text-2xl font-bold tracking-wide text-gray-800 ">
              Movers
            </p>
          </div>
          <HashLoader
            size={100}
            frontColor="#08cf65"
            backColor="black"
            loading={loading}
          />
        </div>
      </>
    );
  };

  const signup = (
    email,
    password,
    profilePicture,
    name,
    confirmPassword,
    phoneNumber
  ) => {
    // Upload the profile picture to Cloudinary
    const formData = new FormData();
    formData.append("file", profilePicture);
    formData.append("upload_preset", "bfnewdcr");
    setLoading(true);
    axios
      .post("https://api.cloudinary.com/v1_1/dtyavz3qy/image/upload", formData)
      .then((response) => {
        console.log(response.data.secure_url);
        // Send the form data to the backend with the Cloudinary URL
        const railsData = {
          name: name,
          email: email,
          password: password,
          password_confirmation: confirmPassword,
          phone: phoneNumber,
          image: response.data.secure_url,
        };
        axios
          .post(`${server}/users`, railsData)
          .then((response) => {
            console.log(response.data);
            setUser(response.data.user);
            localStorage.setItem("jwt", response.data.jwt);
            setLoading(false);
            navigate("/");
            window.location.reload();
          })
          .catch((error) => {
            console.log(error);
            setErrors((prev) => [...prev, error.response.data.error]);
            setLoading(false);
            setTimeout(() => {
              setErrors([]);
            }, 5000);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const login = async (email, password) => {
    setLoading(true);
    try {
      const resp = await axios.post(`${server}/login`, {
        email: email,
        password: password,
      });
      setUser(resp.data.user);
      localStorage.setItem("jwt", resp.data.jwt);
      setLoading(false);
      navigate("/");
      window.location.reload();
    } catch (error) {
      setErrors((prev) => [...prev, error.response.data.error]);
      setLoading(false);
      setTimeout(() => {
        setErrors([]);
      }, 5000);
    }
  };

  const logout = () => {
    setLoading(true);
    localStorage.removeItem("jwt");
    window.location.reload();
    setLoading(false);
  };

  return {
    user,
    setUser,
    token,
    login,
    isLogin: Boolean(user),
    logout,
    signup,
    loading,
    errors,
    localhost,
    server,
    navigate,
    spinner,
    apartments,
    inventories,
    setLoading,
    boxes,
  };
}
