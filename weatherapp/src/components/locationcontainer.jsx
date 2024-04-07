import { Container, Typography, Box, styled } from "@mui/material";

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  borderRadius: "10px",
}));

const LocationContainer = ({ location, country }) => {
  return (
<Box marginBottom={2} className="location-container" sx={{ backgroundColor: "#f5f5f5", padding: "10px", borderRadius: "8px", boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)" }}>
      <Container>
        <Typography align="left">
          <Typography variant="h4" sx={{ fontWeight: "bold", marginBottom: "5px" }}>{location}</Typography>
          <Typography variant="h5">{country}</Typography>
        </Typography>
      </Container>
    </Box>
  );
};

export { StyledBox };

export default LocationContainer;