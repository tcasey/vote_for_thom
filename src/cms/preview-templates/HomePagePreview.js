import React from "react";
import { HomePageTemplate } from "../../templates/home-page";

const HomePagePreview = ({ entry, widgetFor }) => (
  <HomePageTemplate
    title={entry.getIn(["data", "title"])}
    content={widgetFor("body")}
  />
);

export default HomePagePreview;
