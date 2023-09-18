import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Layout from "./layout/Layout";
import AddBook from "./pages/AddBook";
import Home from "./pages/Home";
import BookDetails from "./pages/BookDetails";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import BrowseBooks from "./pages/BrowseBooks";
import { useAuthContext } from "./hooks/useAuthContext";

// import { useAuthContext } from "./hooks/useAuthContex";
function App() {
  const { user } = useAuthContext();
  console.log(user);
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Navbar />} /> */}
        {/* <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
        </Route> */}
        <Route path="/" element={<Layout />}>
          <Route path="/" index element={<Home />} />
          <Route path="/:bookId" element={<BookDetails />} />
          <Route path="/bookDetails/:bookId" element={<BookDetails />} />
          <Route path="/browseBook" element={<BrowseBooks />} />
          <Route path="/addBook" element={<AddBook />} />
        </Route>
        <Route path="/addBook" element={<AddBook />} />
        <Route
          path="/login"
          element={!user ? <Login /> : <Navigate to="/" />}
        />
        <Route path="/singUp" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
