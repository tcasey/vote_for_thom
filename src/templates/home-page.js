import React, { Component } from "react";
import Script from "react-load-script";
import Hero from "../components/Hero";
import get from "lodash.get";

const privacyImg =
  "https://res.cloudinary.com/bitbounti/image/upload/v1529812811/privacy.png";

export const HomePageTemplate = ({}) => {
  return (
    <section className="home">
      <div className="fx-center-vert column ph2">
        <div className="card row pb4">
          <img src={privacyImg} className="card-img" />
          <div className="ph2 card-text">
            <h3 className="title-font font-xl">Something Cool</h3>
            <p className="text-left font-sm pb">
              Voluptate sunt tempor elit veniam ipsum. Nulla ea anim excepteur
              quis sit irure duis aliqua culpa ea exercitation proident. Laboris
              id irure consequat do nostrud ad deserunt voluptate cillum ut
              velit voluptate. Duis anim sint dolore non eiusmod dolor mollit
              commodo quis enim esse.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default class HomePage extends Component {
  handleScriptLoad = () => {
    if (window.netlifyIdentity) {
      window.netlifyIdentity.on("init", user => {
        if (!user) {
          window.netlifyIdentity.on("login", () => {
            document.location.href = "/admin/";
          });
        }
      });
    }
    window.netlifyIdentity.init();
  };
  render() {
    const hero = get(
      this.props,
      "data.allMarkdownRemark.edges[0].node.frontmatter.hero.data"
    );

    return (
      <section>
        <Hero data={hero} />
        <div className="container content">
          <div className="container">
            <HomePageTemplate />
          </div>
        </div>
        <Script
          url="https://identity.netlify.com/v1/netlify-identity-widget.js"
          onLoad={this.handleScriptLoad.bind(this)}
        />
      </section>
    );
  }
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "home-page" } } }
    ) {
      edges {
        node {
          id
          html
          frontmatter {
            title
            templateKey
            hero {
              title
              text
              button
            }
          }
        }
      }
    }
  }
`;
