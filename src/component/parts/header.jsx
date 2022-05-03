import React from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import "../../stylesheet/styles.css";

const Demo = () => {
  return (
    <div>
      <AppBar className="appBar">
        <Stack spacing={2} direction="row">
          <Button
            style={{ fontsize: 20 }}
            variant="contained"
            onClick={console.log("toppage")}
          >
            TopPage
          </Button>
          <Button variant="contained">History</Button>
          <Button variant="contained">create</Button>
        </Stack>
      </AppBar>
    </div>
  );
};

export default Demo;
