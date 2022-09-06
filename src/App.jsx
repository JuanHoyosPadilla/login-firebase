import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Auth } from "./components/Auth";
import { AuthProvider } from "./context/AuthContext";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Perfil from "./pages/Perfil";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route
            path="/"
            element={
              <Auth>
                <Home />
              </Auth>
            }
          />
          <Route
            path="/perfil"
            element={
              <Auth>
                <Perfil />
              </Auth>
            }
          />
          <Route path="/login" element={<Login />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
