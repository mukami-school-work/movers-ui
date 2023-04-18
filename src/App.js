// import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/signin-page/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./pages/signup-page/Signup";
function App() {
  return (
    <>
    {/* <Login /> */}
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