import { useState } from "react";
import reactLogo from "./assets/react.svg";
import NavbarSec from "./Components/NavbarSec";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./Components/LoginPage";
import AccountPage from "./Components/AccountPage";
import HomePage from "./Components/HomePage.Jsx";
import PrivateRoute from "./Components/PrivateRoute";

function App() {
  return (
    <>
      <NavbarSec />
      <div className="container">
        <Routes>
          <Route
            path="/HomePage"
            element={
              <PrivateRoute>
                <HomePage />
              </PrivateRoute>
            }
          />
          <Route path="/LoginPage" element={<LoginPage />} />
          <Route path="/AccountPage" element={<AccountPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
