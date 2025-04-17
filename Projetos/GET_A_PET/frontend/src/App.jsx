import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import "./App.css";
// pages
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";
import Profile from "./pages/User/Profile"

// components
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Container from "./components/Container/Container";
import Message from "./components/Message/Message";

// context
import { UserProvider } from "./context/UseContext";
import MyPets from "./pages/MyPet/MyPets";
import AddPet from "./pages/AddPet/AddPet";
import EditPet from "./pages/EditPet/EditPet";

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <Navbar />
        <Message />
        <Container>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/user/profile" element={<Profile />}/>
            <Route path="/pet/mypets" element={<MyPets />}/>
            <Route path="/pet/add" element={<AddPet />}/>
            <Route path="/pet/edit/:id" element={<EditPet />}/>
            <Route path="/" element={<Home />} />
          </Routes>
        </Container>
        <Footer />
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
