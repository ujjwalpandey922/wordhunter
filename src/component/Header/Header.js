import { MenuItem, TextField } from "@mui/material";
import React from "react";
import "./Header.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import categories from "../../data/Category";
function Header({ category, setCategory, word, setWord, mode }) {
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: mode ? "#0000" : "#fff",
      },
      mode: mode ? "light" : "dark",
    },
  });
  const handleChange = (language) => {
    setCategory(language);
    setWord("");
  };
  return (
    <div className="header">
      <span className="title">{word ? word : "Word Hunter"}</span>
      <div className="inputs">
        <ThemeProvider theme={darkTheme}>
          <TextField
            id="inputText"
            label="Enter what you looking for..."
            variant="standard"
            value={word}
            onChange={(e) => setWord(e.target.value)}
          />
          <TextField
            select
            id="select"
            label="Laguage"
            variant="standard"
            value={category}
            onChange={(e) => handleChange(e.target.value)}
          >
            {categories.map((e) => (
              <MenuItem lable={e.label} key={e.value} value={e.label}>
                {e.value}
              </MenuItem>
            ))}
          </TextField>
        </ThemeProvider>
      </div>
    </div>
  );
}

export default Header;
