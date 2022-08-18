import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Layout from "./layout/Layout";
import AddBook from "./pages/AddBook";
import Home from "./pages/Home";
import BookDetails from "./pages/BookDetails";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Navbar />} /> */}
        {/* <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
        </Route> */}
        <Route path="/" element={<Layout />}>
          <Route path="/" index element={<Home />} />
          <Route path="/bookDetails/:bookId" element={<BookDetails />} />
          {/* <Route path="/browseBook"  element={<BrowseBooks />} /> */}
        </Route>
        <Route path="/addBook" element={<AddBook />} />
        <Route path="/login" element={<Login />} />
        <Route path="/singUp" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
