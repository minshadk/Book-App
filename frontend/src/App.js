import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Layout from "./layout/Layout";
import AddBook from "./pages/AddBook";
import Home from "./pages/Home";
import BookDetails from "./pages/BookDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Navbar />} /> */}
        {/* <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
        </Route> */}
        <Route path="/" element={<BookDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
