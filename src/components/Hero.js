import React, { Component } from "react";
import Scrollchor from "react-scrollchor";
import { css } from "emotion";
import Img from "gatsby-image";
import Button from "./Button";
import { Colors, Layout } from "../constants";

class Hero extends Component {
  static defaultProps = {
    title: "Vote for Thom",
    text: "Let's make Delano better for future generations",
    button: "Donate"
  };
  render() {
    const { title, text, button } = this.props;
    return (
      <section className={css(styles.container)}>
        <div className="fx-center pb4">
          <div className="measure-normal padding-horizontal pt2">
            <h1 className={css(styles.title)}>{title}</h1>
            <p className="white pb2">{text}</p>
            <Scrollchor to="#subscribe">
              <Button btnType="cta" btnText={button} />
            </Scrollchor>
          </div>
        </div>
      </section>
    );
  }
}

const styles = {
  title: {
    fontSize: Layout.MAIN_TITLE,
    color: Colors.WHITE,
    fontFamily: "lato"
  },
  container: {
    marginBottom: Layout.EDGE_PADDING * 4,
    paddingLeft: Layout.EDGE_PADDING * 2,
    paddingTop: 160,
    display: "flex",
    justifyContent: "space-around",
    backgroundImage: Colors.BACKGROUND_GRADIENT,
    "@media (max-width: 706px)": {
      paddingTop: 60
    }
  }
};

export default Hero;
