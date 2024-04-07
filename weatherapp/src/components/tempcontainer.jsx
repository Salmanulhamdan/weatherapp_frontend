import { Container, Box, Typography } from "@mui/material";

const TempContainer = ({ variant, temp }) => {
  return (
    <Box marginBottom={2}>
      <Container>
        <Typography variant={variant} style={{ marginBottom: 8 }}>
          <Box fontWeight="fontWeightBold" display="inline">
            Current Temperature:{" "}
          </Box>
          {temp.temp} °C
        </Typography>
        <Typography variant={variant} style={{ marginBottom: 8 }}>
          <Box fontWeight="fontWeightBold" display="inline">
            Real Feel:{" "}
          </Box>
          {temp.feels_like} °C
        </Typography>
        <Typography variant={variant}>
          <Box fontWeight="fontWeightBold" display="inline">
            Humidity:{" "}
          </Box>
          {temp.humidity} %
        </Typography>
      
      </Container>
    </Box>
  );
};

export default TempContainer;


