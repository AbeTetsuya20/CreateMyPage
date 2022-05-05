import "../../stylesheet/styles.css";
// import Header from "../parts/header";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import React from "react";
import Back from "../parts/back";

const Top = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Back
        data={
          <div>
            Welcome to my site !!<br></br>
            <Button onClick={handleOpen}>Click here!</Button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box className="box">
                <Typography id="modal-modal-title" variant="h6" component="h5">
                  このサイトを作るにあたって参考にしたサイト
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  <br></br>
                  https://www.yuuuki-blog.com/2020/12/23/Portfolio%E3%82%92%E4%BD%9C%E3%81%A3%E3%81%9F%E8%A9%B1/
                </Typography>
              </Box>
            </Modal>
          </div>
        }
      />
    </div>
  );
};

export default Top;
