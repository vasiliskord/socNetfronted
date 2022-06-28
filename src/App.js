import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CreatePost from "./pages/CreatePost";
import Header from "./components/Header"
import { Center, Container } from "@mantine/core";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";
import PostId from "./components/PostId";

function App() {

  return (
    <>
        <Router >
          <Header />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/createpost" element={<CreatePost />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Router>
        <ToastContainer/>
    </>
  );
}

export default App;
