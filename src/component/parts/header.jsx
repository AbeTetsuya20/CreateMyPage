import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import "../../stylesheet/styles.css";

const Demo = () => {
  const [count, setCount] = useState(0);

  function increase() {
    setCount(count + 1);
  }

  return (
    <div>
      <AppBar className="appBar">
        <Stack spacing={2} direction="row">
          <Button
            variant="contained"
            onClick={() => {
              console.log("onClick");
              increase();
              console.log(count);
            }}
          >
            <div className="button_in_text">TopPage</div>
          </Button>
          <Button
            variant="contained"
            onClick={() => {
              console.log("History clicked");
            }}
          >
            <div className="button_in_text">History</div>
          </Button>
          <Button
            variant="contained"
            onClick={() => {
              console.log("Create clicked");
            }}
          >
            <div className="button_in_text">Create</div>
          </Button>
        </Stack>
      </AppBar>
    </div>
  );
};

export default Demo;
