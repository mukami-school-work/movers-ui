import { NavExRootPath, NavRootPath } from "components";
import { useEffect } from "react";
import { useLocation } from "react-router";

const Navbar = ({ isLogin }) => {
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector(".navbar");
      if (navbar) {
        if (window.scrollY > 0) {
          navbar.classList.add("sticky");
        } else {
          navbar.classList.remove("sticky");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (location.pathname === "/login" || location.pathname === "/signup") {
    return null;
  } else if (location.pathname === "/") {
    return <NavRootPath isLogin={isLogin} />;
  } else {
    return <NavExRootPath isLogin={isLogin} />;
  }
};

export default Navbar;
