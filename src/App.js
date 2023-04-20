import { Landing } from "pages";
import Reviews from "pages/reviews-page/Reviews";
import Signup from "./pages/signup-page/Signup";
import Login from "./pages/signup-page/Login";
import Navbar from "./components/Navbar"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {fill} from "@cloudinary/url-gen/actions/resize";
import {CloudinaryImage} from '@cloudinary/url-gen';
import ListingsPage from "./pages/listings page/ListingsPage";
import BoxesRange from "./pages/boxes-page/BoxesRange";
import Search from "pages/search-page/Search";
import Profile from "pages/profile-page/Profile";


function App() {
  const myImage = new CloudinaryImage('sample', {cloudName: 'dsnhbp0tg'}).resize(fill().width(100).height(150));
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Landing />} />

          <Route path="/login" element={<Login />} />
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
