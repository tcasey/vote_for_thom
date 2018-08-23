import React from "react";
import Link from "gatsby-link";
import "../layouts/blog.scss";

export default class BlogPage extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;
    return (
      <section className="blog">
        <div className="post-container">
          {posts
            .filter(post => post.node.frontmatter.templateKey === "blog-post")
            .map(({ node: post }) => {
              return (
                <div
                  className="content"
                  key={post.id}
                >
                  <h2>
                    <Link
                      className="title title-font"
                      to={post.frontmatter.path}
                    >
                      {post.frontmatter.title}
                    </Link>
                  </h2>
                  <div className="date">{post.frontmatter.date}</div>
                  <p>
                    {post.excerpt}
                    <br />
                    <br />
                    <Link
                      className="keep-reading"
                      to={post.frontmatter.path}
                    >
                      Keep Reading...
                    </Link>
                  </p>
                </div>
              );
            })}
        </div>
      </section>
    );
  }
}

export const pageQuery = graphql`
  query BlogQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
            path
          }
        }
      }
    }
  }
`;
