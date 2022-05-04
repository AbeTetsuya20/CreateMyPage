import React, { Component } from "react";
import { Collapse } from "react-collapse";
import "./item-style.css";

class Item extends Component {
  state = {
    isOpened: this.props.isOpen,
  };

  onItemClick = (id) => {
    this.setState({ isOpened: !this.state.isOpened });
  };

  render() {
    const { isOpened } = this.state;
    const { title, content1, content2 } = this.props;
    return (
      <div>
        <div onClick={this.onItemClick} className="title">
          <span>{title}</span>
        </div>
        <Collapse isOpened={isOpened} className="content">
          {isOpened && (
            <div>
              <p>{content1}</p>
              <p>{content2}</p>
            </div>
          )}
        </Collapse>
      </div>
    );
  }
}

export default Item;
