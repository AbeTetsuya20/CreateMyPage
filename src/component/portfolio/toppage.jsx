import "../../stylesheet/TopPage.scss";
import "../../stylesheet/styles.css";
import Header from "../parts/header";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import React from "react";

const Top = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Header />
      <div className="home-body">
        <div className="title-container">
          <div className="title-home">
            Welcome to my site !!<br></br>
            <Button onClick={handleOpen}>Click here!</Button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box className="box">
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  経歴
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  桐蔭学園高等学校卒業<br></br>
                  法政大学情報科学部コンピュータ科学科入学
                </Typography>
              </Box>
            </Modal>
          </div>
          <div className="item purple"></div>
          <div className="item medium-blue"></div>
          <div className="item light-blue"></div>
          <div className="item red"></div>
          <div className="item orange"></div>
          <div className="item yellow"></div>
          <div className="item cyan"></div>
          <div className="item light-green"></div>
          <div className="item lime"></div>
          <div className="item magenta"></div>
          <div className="item lightish-red"></div>
          <div className="item pink"></div>
        </div>
        <div className="bottom-bar"></div>
      </div>
    </div>
  );
};

export default Top;
