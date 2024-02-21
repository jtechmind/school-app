import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Student from "./components/student/Student";

function App() {
  const [welcomeApp, setWelcomeApp] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/school")
      .then((response) => setWelcomeApp(response.data))
      .catch((error) => console.error("Error loading application", error));
  }, []);

  return (
    <div className="App">
      <h1>{welcomeApp}</h1>
      <Student />
      <header />
    </div>
  );
}

export default App;
