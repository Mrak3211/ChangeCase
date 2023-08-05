import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./Components/About";
import NavBar from "./Components/NavBar";
import TextForm from "./Components/TextForm";
import { SetStateAction, useState } from "react";
import Alert from "./Components/Alert";
import React from "react";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState<SetStateAction<any>>(null);
  const showAlert = (message: string, type: string) => {
    setAlert({ msg: message, type: type });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#13305b";
      showAlert("Dark Mode Has Enable Successfully", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Has Enable Successfully", "success");
    }
  };
  return (
    <div>
      <BrowserRouter>
        <NavBar title="ChangeCase" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <Routes>
          <Route
            path="/"
            element={
              <TextForm
                heading="Enter Text To Change Case"
                mode={mode}
                showAlert={showAlert}
                title={"ChangeCase - Home"}
              />
            }
          />
          <Route
            path="/about"
            element={<About mode={mode} title={"ChangeCase - About"} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
