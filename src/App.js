import React from "react";
import Navbar from "./components/navbar/navbar";
import Login from "./components/login/login";
import Dashboard from "./components/Dashboard/dashboard";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";

function App() {
  const [searchKeyword, setSearchKeyword] = React.useState("");
  const PrivateRoute = ({ element, ...props }) => {
    let isLogin = localStorage.getItem("isLogin");
    return (
      isLogin !== null && isLogin !== 0 ? (
        <element {...props} />
      ) : (
        <Navigate to="/" />
      )
    );
  };
  return (
    <>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard
                  setSearchKeyword={setSearchKeyword}
                  searchKeyword={searchKeyword}
                />
              </PrivateRoute>
            }
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
