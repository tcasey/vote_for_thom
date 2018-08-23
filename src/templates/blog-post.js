import React from "react";
import Content, { HTMLContent } from "../components/Content";
import Helmet from "react-helmet";
import "../layouts/blog.scss";

export const BlogPostTemplate = ({
  content,
  contentComponent,
  title,
  helmet,
  date,
  object
}) => {
  const PostContent = contentComponent || Content;
  return (
    <section className="post-container">
      {helmet ? helmet : ""}
      <div className="container content">
        <div className="columns">
          <div className="column">
            <h2 className="title title-font">{title}</h2>
            <div className="date">{date}</div>
            <PostContent content={content} className="post-content" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ({ data }) => {
  const { markdownRemark: post } = data;
  return (
    <BlogPostTemplate
      content={post.html}
      contentComponent={HTMLContent}
      description={post.frontmatter.description}
      helmet={<Helmet title={`Blog | ${post.frontmatter.title}`} />}
      title={post.frontmatter.title}
      date={post.frontmatter.date}
    />
  );
};

export const blogPageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        date(formatString: "MMMM DD, YYYY")
        title
        description
      }
    }
  }
`;
