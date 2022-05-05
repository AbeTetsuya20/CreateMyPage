import React from "react";
import "../../stylesheet/footer.scss";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";

function Footer() {
  return (
    <div className="footer">
      <p className="footItem">© 2022 AbeTetuya</p>
      <GitHubIcon
        className="icon footItem first"
        onClick={() => window.open("https://github.com/AbeTetsuya20", "_blank")}
      />
      <TwitterIcon
        className="icon footItem"
        onClick={() => window.open("https://twitter.com/golan2002", "_blank")}
      />
    </div>
  );
}

export default Footer;
