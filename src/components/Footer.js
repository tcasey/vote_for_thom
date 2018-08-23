import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { css } from "emotion";
import { Colors, Layout } from "../constants";
import Form from "./Form";
import ghIcon from "../img/github-icon.svg";
import twitterIcon from "../img/twitter.svg";
import linkedinIcon from "../img/linkedin.svg";
import instagramIcon from "../img/instagram.svg";

class Footer extends Component {
  render() {
    const {
      location: { pathname }
    } = this.props;
    return (
      <footer>
        <div className={css(styles.container)}>
          <div className="footer-container measure-normal ph2">
            <div className=" column ph2">
              <h3 className="title-font white font-lg pb">
                Sign up for updates
              </h3>
              <Form formName="subscribe_form" inputName="email" />
              <p className="white font-sm pb4 pt">
                Signing up for updates will keep you informed about our
                development progress. We’ll also keep you posted for
                opportunities to participate in testing and beta programs.
              </p>
            </div>
          </div>
        </div>
        <div className="row fx-space-around fx-center-vert pb pt">
          <a href="mailto: hello@tcasey.me" className={css(styles.link)}>
            Contact me
          </a>
          <div>
            <a href="https://twitter.com/_tcasey_" target="blank">
              <img src={twitterIcon} className="ph2" />
            </a>
            <a
              href="https://www.linkedin.com/trevorkc/"
              target="blank"
            >
              <img src={linkedinIcon} className="ph2" />
            </a>
            <a href="https://www.instagram.com/_tcasey_/" target="blank">
              <img src={instagramIcon} className="ph2" />
            </a>
          </div>
        </div>
      </footer>
    );
  }
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    paddingTop: Layout.EDGE_PADDING * 3,
    backgroundImage: Colors.BACKGROUND_GRADIENT
  },
  link: {
    fontSize: Layout.SPAN,
    display: "flex",
    padding: "8px 24px 8px 24px",
    textDecoration: "none",
    alignItems: "center",
    color: Colors.DEFAULT
  }
};

export default withRouter(Footer);
