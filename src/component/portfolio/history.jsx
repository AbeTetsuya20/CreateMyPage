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
      <div className="item purple"></div>
      <div className="item medium-blue"></div>
      <div className="item light-blue"></div>
      <div className="item red"></div>
      <div className="item orange"></div>
      <Box>
        <Stack spacing={2}>
          <Item>
            <div className="element1">
              <h4>桐蔭学園高等学校普通科</h4>
              剣道部に所属していた。 数学が好きで英語が嫌いだった。
            </div>
          </Item>
          <h1 className="while">↓</h1>
          <Item>
            <div className="element1">
              <h4>法政大学 1 年生</h4>
              <a
                href="https://rat.cis.k.hosei.ac.jp"
                target="_blank"
                rel="noreferrer"
              >
                RAT
              </a>
              に所属しました。
            </div>
          </Item>
          <h1 className="while">↓</h1>
          <Item>
            <div className="element1">
              <h4>法政大学 2 年生</h4>
              <a href="https://metadata.co.jp/">metadata 株式会社</a>に所属
              <br></br>
              react や ruby on rails、自然言語処理について学んだ。<br></br>
              主に、react で単語の関係のグラフを作成をし、rails
              でコントロールをさせた。
            </div>
          </Item>
          <h1 className="while">↓</h1>
          <Item>
            <div className="element1">
              <h4>法政大学 3 年生</h4>
              <a href="https://appify.jp/">Appify</a>社に所属 <br></br>
            </div>
          </Item>
        </Stack>
      </Box>
    </div>
  );
};

export default History;
