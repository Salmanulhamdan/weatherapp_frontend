
import './App.css'
// import WeatherApp from './pages/homepage'
import { useState } from "react";
import { Box, ThemeProvider } from "@mui/material";
import useFetch from "./components/hooks/useFetch";
import SearchBar from './components/searchbar';
import CurrentWeatherContainer from './components/currentweather';
import { theme } from "./theme.jsx";

function App() {
  

  const [location, setLocation] = useState("");
  const [data, fetchData] = useFetch();

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData(location);
  };

  return (
    <main>
      <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center", // Center items vertically
            backgroundImage: "url('/weather.jpg')", // Background image
            backgroundSize: "cover",  // Cover the entire box with the background image
            gap: "30px",
            backgroundPosition: "center", // Center the background image
            padding: "150px",       // Add padding around the box
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Add a shadow
            borderRadius: "8px",   // Add border radius
          }}
      >
        <SearchBar
          value={location}
          handleChange={(e) => setLocation(e.target.value)}
          handleSubmit={handleSubmit}
        />
       
      <ThemeProvider theme={theme}>
        {data.main && <CurrentWeatherContainer weather={data} />}
      </ThemeProvider>
      </Box>
    </main>
  );
}


export default App
