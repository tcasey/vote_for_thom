import CMS from "netlify-cms";
import "netlify-cms/dist/cms.css";

import AboutPagePreview from "./preview-templates/AboutPagePreview";
import BlogPostPreview from "./preview-templates/BlogPostPreview";
import EndorsementPagePreview from "./preview-templates/EndorsementPagePreview";
import HomePagePreview from "./preview-templates/HomePagePreview";

CMS.registerPreviewStyle("/styles.css");
CMS.registerPreviewTemplate("about", AboutPagePreview);
CMS.registerPreviewTemplate("endorsements", EndorsementPagePreview);
CMS.registerPreviewTemplate("blog", BlogPostPreview);
CMS.registerPreviewTemplate("home", HomePagePreview);
