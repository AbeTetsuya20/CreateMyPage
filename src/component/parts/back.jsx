import "../../stylesheet/TopPage.scss";
import "../../stylesheet/styles.css";

const Back = (props) => {
  return (
    <div>
      <div className="toppage-body">
        <div className="home-body">
          <div className="title-container">
            <div className="title-home">{props.data}</div>
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
    </div>
  );
};

export default Back;
