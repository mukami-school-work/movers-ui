import { BrowserRouter, Route, Routes } from "react-router-dom";
import ListingsPage from "./pages/listings page/ListingsPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/movers" element={<ListingsPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;