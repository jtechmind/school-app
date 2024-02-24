import { useEffect, useState } from "react";
import axios from "axios";

import Header from "./components/Header";
import Course from "./components/course/Course";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/users/Login";
import SignUp from "./components/users/SignUp";

function App() {
  // const [welcomeApp, setWelcomeApp] = useState([]);
  // useEffect(() => {
  //   axios
  //     .get("http://localhost:8080/school")
  //     .then((response) => setWelcomeApp(response.data))
  //     .catch((error) => console.error("Error loading application", error));
  // }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/sign-in" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </BrowserRouter>

      {/* <h1>{welcomeApp}</h1> */}
      {/* <Course /> */}
    </div>
  );
}

export default App;
