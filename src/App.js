import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Help from "./components/Help";
import Account from "./components/Account";
import "./style.css";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/help" element={<Help />} exact />
          <Route path="/account" element={<Account />} exact />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
