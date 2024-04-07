import LocationContainer from "./locationcontainer";
import TempContainer from "./tempcontainer";
import WeatherContainer from "./weathercontainer";
import { Box } from "@mui/material";

const CurrentWeatherContainer = ({ weather }) => {
  console.log(weather,"weatherfrom currentcuntainer")
  return (
    <Box
      sx={{
        display: "flex",
        alignContent: "center",
        flexWrap: "wrap",
        flexDirection: "column",
        gap: "20px",
        // backgroundColor: "theme.palette.secondary.main",
      }}
    >
      <LocationContainer
        country={weather.sys.country}
        location={weather.name}
      />
      <TempContainer temp={weather.main}  variant="subtitle1" />
      <WeatherContainer weather={weather.weather} />
    </Box>
  );
};

export default CurrentWeatherContainer;