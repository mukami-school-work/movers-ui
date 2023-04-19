import Reviews from "pages/reviews-page/Reviews";
import Signup from "./pages/signup-page/Signup";
import Login from "./pages/signup-page/Login";
import Navbar from "./components/Navbar"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {fill} from "@cloudinary/url-gen/actions/resize";
import {CloudinaryImage} from '@cloudinary/url-gen';
import ListingsPage from "./pages/listings page/ListingsPage";

function App() {
  const myImage = new CloudinaryImage('sample', {cloudName: 'dsnhbp0tg'}).resize(fill().width(100).height(150));
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/movers" element={<ListingsPage />} />
          <Route path="/reviews" element={<Reviews />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
