import axios from "axios";
import { Landing } from "pages";
import Profile from "pages/profile-page/Profile";
import Reviews from "pages/reviews-page/Reviews";
import Search from "pages/search-page/Search";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import BoxesRange from "./pages/boxes-page/BoxesRange";
import ListingsPage from "./pages/listings page/ListingsPage";
import Login from "./pages/signup-page/Login";
import Signup from "./pages/signup-page/Signup";

function App() {
  const [userData, setUserData] = useState(null);
  const [isLogin, setIsLogin] = useState(false);
  const localhost = "http://localhost:4000";
  const server = "https://rails-lszl.onrender.com";

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem("jwt");
      if (token) {
        try {
          const resp = await axios.get(`${localhost}/profile`, {
            headers: {
              Authorization: `${token}`,
            },
          });
          setUserData(resp.data);
          setIsLogin(true);
        } catch (error) {
          console.log(error);
        }
      }
    };
    fetchProfile();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Navbar isLogin={isLogin} />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route
            path="/login"
            element={
              <Login
                setUserData={setUserData}
                localhost={localhost}
                server={server}
              />
            }
          />
          <Route path="/signup" element={<Signup />} />
          <Route path="/movers" element={<ListingsPage />} />
          <Route path="/boxes" element={<BoxesRange />} />
          <Route path="/search" element={<Search />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
