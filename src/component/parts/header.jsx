import React from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import "../../stylesheet/styles.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div>
      <AppBar className="appBar">
        <Stack spacing={2} direction="row">
          <Button
            variant="contained"
            onClick={() => {
              console.log("onClick");
              navigate("/");
            }}
          >
            <div className="button_in_text">TopPage</div>
          </Button>
          <Button
            variant="contained"
            onClick={() => {
              console.log("History clicked");
              navigate("/history");
            }}
          >
            <div className="button_in_text">History</div>
          </Button>
          <Button
            variant="contained"
            onClick={() => {
              console.log("Create clicked");
              navigate("/create");
            }}
          >
            <div className="button_in_text">Create</div>
          </Button>
        </Stack>
      </AppBar>
    </div>
  );
};

export default Header;
