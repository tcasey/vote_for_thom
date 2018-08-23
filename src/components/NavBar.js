import React from "react";
import Link from "gatsby-link";
import Scrollchor from "react-scrollchor";
import { css } from "emotion";
import Logo from "./Logo";
import { Colors, Layout } from "../constants";

const Navbar = () => (
  <nav className={css(styles.container)}>
    <Link to="/" className={css(styles.logo)}>
      <Logo width={40} height={40} color={Colors.WHITE} />
    </Link>
    <div className={css(styles.row)}>
      <Link to="/about" className={css(styles.link)}>
        About
      </Link>
      <Link to="/endorsements" className={css(styles.link)}>
        Endorsements
      </Link>
      <Scrollchor to="#patreon" className={css(styles.link)}>
        Donate
      </Scrollchor>
    </div>
  </nav>
);

const styles = {
  container: {
    height: 57,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    background: Colors.NAV_BACKGROUND
  },
  row: {
    display: "flex",
    flexDirection: "row"
  },
  link: {
    fontSize: Layout.SPAN,
    display: "flex",
    padding: "8px 24px 8px 24px",
    textDecoration: "none",
    alignItems: "center",
    color: Colors.WHITE
  },
  logo: {
    paddingRight: Layout.EDGE_PADDING,
    paddingLeft: Layout.EDGE_PADDING,
    alignItems: "center",
    justifyContent: "center",
    display: "flex"
  }
};

export default Navbar;
