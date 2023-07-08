import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import NotesState from "./Context/notes/NotesState";
import Alert from "./Components/Alert";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import { useState } from "react";
function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  return (
    <>
      <NotesState>
        <Router>
          <Navbar />
          <Alert alert={alert} />
          <div className="container">
            <Routes>
              <Route
                exact
                path="/"
                Component={() => <Home showAlert={showAlert} />}
              />
              <Route exact path="/about" Component={About} />
              <Route
                exact
                path="/login"
                Component={() => <Login showAlert={showAlert} />}
              />
              <Route
                exact
                path="/signup"
                Component={() => <Signup showAlert={showAlert} />}
              />
            </Routes>
          </div>
        </Router>
      </NotesState>
    </>
  );
}

export default App;
