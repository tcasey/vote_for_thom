import React from "react";
import graphql from "graphql";
import Endorsements from "../components/endorsements";

export const EndorsementPageTemplate = ({
  image,
  title,
  heading,
  description,
  intro,
  main,
  endorsements,
  fullImage
}) => (
  <section className="section section--gradient">
    <div className="container">
      <div className="section">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="content">
              <div
                className="full-width-image-container margin-top-0"
                style={{ backgroundImage: `url(${image})` }}
              />
              <div className="columns">
                <div className="column is-7">
                  <h3 className="has-text-weight-semibold is-size-2">
                    {heading}
                  </h3>
                  <p>{description}</p>
                </div>
              </div>
              <div className="columns">
                <div className="column is-7">
                  <h3 className="has-text-weight-semibold is-size-3">
                    {main.heading}
                  </h3>
                  <p>{main.description}</p>
                </div>
              </div>
              <Endorsements endorsements={endorsements} />
              <div
                className="full-width-image-container"
                style={{ backgroundImage: `url(${fullImage})` }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <EndorsementPageTemplate
      image={frontmatter.image}
      title={frontmatter.title}
      heading={frontmatter.heading}
      description={frontmatter.description}
      intro={frontmatter.intro}
      main={frontmatter.main}
      endorsements={frontmatter.endorsements}
      fullImage={frontmatter.full_image}
    />
  );
};

export const endorsementPageQuery = graphql`
  query EndorsementPage($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      frontmatter {
        title
        path
        image
        heading
        description
        intro {
          blurbs {
            image
            text
          }
          heading
          description
        }
        main {
          heading
          description
        }
        endorsements {
          author
          quote
        }
        full_image
      }
    }
  }
`;
