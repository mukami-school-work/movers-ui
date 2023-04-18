import Signup from "./pages/signup-page/Signup";
import Login from "./pages/signup-page/Login";
import { Features, Hero, Navbar } from "components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />

          <Route path="/signup" element={<Signup />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;