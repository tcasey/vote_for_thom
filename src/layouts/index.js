import React, { Component } from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Colors } from "../constants";
import "./all.sass";

export default class TemplateWrapper extends Component {
  constructor(props) {
    super(props);
    this.toggleMenu = this.toggleMenu.bind(this);
    this.state = {
      menu: false
    };
  }
  toggleMenu() {
    const menu = !this.state.menu;
    this.setState({ menu });
  }
  render() {
    const { children } = this.props;
    const { menu } = this.state;

    return (
      <div>
        <Helmet title="Vote for Thom Casey" />
        <NavBar menu={menu} toggleMenu={this.toggleMenu} />
        <main style={{ width: "100vw" }}>{children()}</main>
        <Footer />
      </div>
    );
  }
}
TemplateWrapper.propTypes = {
  children: PropTypes.func
};
