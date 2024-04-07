import { TextField, Button, Container, Box, styled } from "@mui/material";

const SearchBar = ({ handleSubmit, handleChange, value }) => {
  return (
    <Box marginBottom={3}>
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        alignItems: "center",
        flexWrap: "wrap",
        flexDirection: "column",
        // border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "20px",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
        backgroundColor: "#f9f9f9",
      }}
    >
      <TextField
        id="outlined-basic"
        label="Location"
        variant="outlined"
        onChange={handleChange}
        value={value}
        sx={{ m: 2, minWidth: "350px", backgroundColor: "white", borderRadius: "4px" }}
        required
      />
      <Button
        variant="contained"
        onClick={handleSubmit}
        size="small"
        sx={{ backgroundColor: "#3f51b5", color: "white", '&:hover': { backgroundColor: "#303f9f" } }}
      >
        Search
      </Button>
    </Container>
  </Box>
  
  );
};

export default SearchBar;