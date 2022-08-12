import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Layout from "./layout/Layout";
import AddBook from "./pages/AddBook";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Navbar />} /> */}
        {/* <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
        </Route> */}
        <Route path="/" element={<AddBook />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
