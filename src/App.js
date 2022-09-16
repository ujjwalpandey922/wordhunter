import { Container, IconButton } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import Defination from "./component/Defination/Defination";
import Header from "./component/Header/Header";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
function App() {
  const [word, setWord] = useState("");

  const [meaning, setMeaning] = useState([]);
  const [category, setCategory] = useState("en");
  const [mode, setmode] = useState(false);
  const DictinoryDataAPI = async () => {
    try {
      const res = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`
      );
      const data = await res.json();
      setMeaning(data);
      // console.log(meaning, data);
    } catch (error) {
      console.log("No meaning found 404");
    }
  };

  useEffect(() => {
    DictinoryDataAPI();
    //eslint-disable-next-line
  }, [category, word]);
  const ToggleMode = () => {
    setmode(!mode);
  };
  return (
    <div className={` App ${mode ? "light" : ""}`}>
      <Container maxWidth="md" className="cont">
        <div
          style={{ position: "absolute", top: 0, right: 15, paddingTop: 10 }}
        >
          <IconButton>
            {mode ? (
              <Brightness4Icon
                onClick={ToggleMode}
                style={{ color: "black" }}
              />
            ) : (
              <Brightness7Icon
                onClick={ToggleMode}
                style={{ color: "white" }}
              />
            )}
          </IconButton>
        </div>
        <Header
          category={category}
          setCategory={setCategory}
          word={word}
          setWord={setWord}
          mode={mode}
        />

        <Defination
          word={word}
          category={category}
          meaning={meaning}
          mode={mode}
        />
      </Container>
    </div>
  );
}

export default App;
