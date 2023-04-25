import useAuth from "auth/useAuth";
import { PrivateRoute } from "components";
import { Landing } from "pages";
import Profile from "pages/profile-page/Profile";
import Reviews from "pages/reviews-page/Reviews";
import Search from "pages/search-page/Search";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import BoxesRange from "./pages/boxes-page/BoxesRange";
import ListingsPage from "./pages/listings page/ListingsPage";
import Login from "./pages/signup-page/LoginPage";
import Signup from "./pages/signup-page/SignUpPage";
import ApartmentsPage from "./pages/apartments/ApartmentsPage";
import  Location  from "./pages/location/Location";

function App() {
  const { user, login, logout, localhost, server, isLogin } = useAuth();
  return (
    <>
      <Navbar isLogin={isLogin} user={user} logout={logout} />
      <Routes>
        <Route path="/" element={<Landing isLogin={isLogin} />} />
        <Route
          path="/login"
          element={
            <Login login={login} localhost={localhost} server={server} />
          }
        />
        <Route
          path="/signup"
          element={
            <Signup localhost={localhost} server={server} login={login} />
          }
        />
        <Route
          path="/movers"
          element={
            <PrivateRoute>
              <ListingsPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/boxes"
          element={
            <PrivateRoute>
              <BoxesRange />
            </PrivateRoute>
          }
        />
        <Route
          path="/search"
          element={
            <PrivateRoute>
              <Search />
            </PrivateRoute>
          }
        />
        <Route
          path="/reviews"
          element={
            <PrivateRoute>
              <Reviews />
            </PrivateRoute>
          }
        />
        <Route
          path="/pickup"
          element={
            <PrivateRoute>
              <Location />
            </PrivateRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
         <Route
          path="/location"
          element={
            <PrivateRoute>
              <ApartmentsPage />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
}
export default App;
