import { useState, useEffect } from "react";
import Home from "./pages/Home";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Domains from "./pages/Domains";
import Resources from "./pages/Resources";


function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    console.log("TinyURL Loaded");

    setTimeout(() => {
      setLoading(false);
    }, 2000);

  }, []);

  if (loading) {
    return (
      <div style={{
        minHeight: "100vh",
        backgroundColor: "#0980a1",
        color: "white",
        display:"flex",
        justifyContent: "center",
        alignItems: "center"
      }}>
        <h1 style={{
          fontSize: "75px",
          fontFamily: "'Google Sans Flex','inter',sans-serif",
          fontWeight: "900",
          fontStyle: "italic",
          letterSpacing: "-3px",
          animation:"tiny-move-all 1.5s ease-in-out infinite"
        }}>
          T I N Y U R L
        </h1>
      
      </div>
  

    );
  }
 return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/domains" element={<Domains/>} />
        <Route path="/resources" element={<Resources/>} />
        {/* <Route path="/domains" element={<Domains/>} /> */}




      </Routes>
    </BrowserRouter>
  );
}

export default App;