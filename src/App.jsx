import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import About from "./Components/About";
import Portfolio from "./Pages/Portfolio";
import { ThemeProvider, createTheme } from "@mui/material/styles";

export default function App() {
  const [themeMode, setThemeMode] = useState("light");

  const appTheme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: themeMode,
          primary: {
            main: "#3b82f6",
          },
        },
        typography: {
          fontFamily: '"Outfit", "Inter", sans-serif',
        },
      }),
    [themeMode]
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", themeMode === "dark");
    document.body.classList.toggle("dark", themeMode === "dark");
  }, [themeMode]);

  return (
    <ThemeProvider theme={appTheme}>
      <BrowserRouter>
        <Navbar
          themeMode={themeMode}
          onToggleTheme={() =>
            setThemeMode((prev) => (prev === "light" ? "dark" : "light"))
          }
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
