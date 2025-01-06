import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import "./App.css";
// pages
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";

// components
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Container from "./components/Container/Container";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Container>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Container>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
