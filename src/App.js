import { Features, Hero, Navbar } from "components";
import { Login } from "pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {fill} from "@cloudinary/url-gen/actions/resize";
import {CloudinaryImage} from '@cloudinary/url-gen';
import ListingsPage from "./pages/listings page/ListingsPage";

function App() {
  const myImage = new CloudinaryImage('sample', {cloudName: 'dsnhbp0tg'}).resize(fill().width(100).height(150));
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/movers" element={<ListingsPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;