import Home from "./Components/Home";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HashRouter } from "react-router-dom";
import CreateWorkout from "./Components/CreateWorkout";
import EditWorkout from "./Components/EditWorkout";
import { GlobalProvider } from "./Context/GlobalState";
import Heading from "./Components/Heading";
import { createTheme, ThemeProvider } from "@mui/material/styles";
function App() {
  const [darkMode, setDarkMode] = useState(false);
  const darkTheme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <div className="App">
        <GlobalProvider>
          <HashRouter>
            <Heading darkMode={darkMode} setDarkMode={setDarkMode} />
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/createworkout" element={<CreateWorkout />} />
              <Route path="/editworkout/:id" element={<EditWorkout />} />
            </Routes>
          </HashRouter>
        </GlobalProvider>
      </div>
    </ThemeProvider>
  );
}

export default App;
