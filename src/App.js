import { Hero, Navbar } from "components";
import { Login } from "pages";
import Reviews from "pages/reviews-page/Reviews";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      {/* <Hero /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/reviews" element={<Reviews />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
