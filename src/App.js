import { PrivateRoute } from "components";
import useAuth from "hooks/useAuth";
import { Landing } from "pages";
import Profile from "pages/profile-page/Profile";
import Reviews from "pages/reviews-page/Reviews";
import Search from "pages/search-page/Search";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import ApartmentsPage from "./pages/apartments/ApartmentsPage";
import BoxesRange from "./pages/boxes-page/BoxesRange";
import ListingsPage from "./pages/listings page/ListingsPage";
import Location from "./pages/location/Location";
import Login from "./pages/signup-page/LoginPage";
import Signup from "./pages/signup-page/SignUpPage";

function App() {
  const { user, login, logout, spinner, localhost, server, isLogin, loading } =
    useAuth();
  if (loading) {
    return spinner();
  }
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
          path="/apartment"
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
