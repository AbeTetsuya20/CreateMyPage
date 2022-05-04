import "../../stylesheet/styles.css";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

const History = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <div className="site_body">
      <Box>
        <Stack spacing={2}>
          <Item>
            <div className="element1">
              <h4>桐蔭学園高等学校普通科</h4>
              剣道部に所属していました。 数学が好きでした。
            </div>
          </Item>
          <h1 className="while">↓</h1>
          <Item>
            <div className="element1">
              <h4>法政大学 1 年生</h4>
              RAT　に所属しました。
            </div>
          </Item>
          <h1 className="while">↓</h1>
          <Item>
            <div className="element1">
              <h4>桐蔭学園</h4>
              数学が好きでした
            </div>
          </Item>
          <h1 className="while">↓</h1>
          <Item>
            <div className="element1">
              <h4>桐蔭学園</h4>
              数学が好きでした
            </div>
          </Item>
          <div className="item purple"></div>
          <div className="item medium-blue"></div>
          <div className="item light-blue"></div>
          <div className="item red"></div>
          <div className="item orange"></div>
          <div className="item orange"></div>
          <div className="item yellow"></div>
          <div className="item cyan"></div>
          <div className="item light-green"></div>
          <div className="item lime"></div>
          <div className="item magenta"></div>
          <div className="item lightish-red"></div>
          <div className="item pink"></div>
        </Stack>
      </Box>
    </div>
  );
};

export default History;
