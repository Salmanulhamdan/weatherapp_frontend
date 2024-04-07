import { Box, Typography, Container } from "@mui/material";

export default function WeatherContainer({ weather }) {
  return (
    <Box
    sx={{

      // padding: 16,
      borderRadius: 8,
      boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.1)",
      marginBottom: 16,
    }}
    >
      <Container>
        <Typography variant="h4">{weather[0].main}</Typography>
        <Typography  style={{ marginBottom: 8 }}>
      <Box fontWeight="fontWeightBold" display="inline">
        
      </Box>
      {weather[0].description}
    </Typography>
        
     
      </Container>
    </Box>
  );
}