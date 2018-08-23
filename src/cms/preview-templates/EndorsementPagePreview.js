import React from "react";
import { EndorsementPageTemplate } from "../../templates/endorsements-page";

const EndorsementPagePreview = ({ entry, getAsset }) => {
  const entryBlurbs = entry.getIn(["data", "intro", "blurbs"]);
  const blurbs = entryBlurbs ? entryBlurbs.toJS() : [];

  const entryEndorsements = entry.getIn(["data", "endorsements"]);
  const endorsements = entryEndorsements ? entryEndorsements.toJS() : [];

  return (
    <EndorsementPageTemplate
      image={entry.getIn(["data", "image"])}
      title={entry.getIn(["data", "title"])}
      heading={entry.getIn(["data", "heading"])}
      description={entry.getIn(["data", "description"])}
      intro={{ blurbs }}
      main={{
        heading: entry.getIn(["data", "main", "heading"]),
        description: entry.getIn(["data", "main", "description"]),
        image1: {
          image: getAsset(entry.getIn(["data", "main", "image1", "image"])),
          alt: entry.getIn(["data", "main", "image1", "alt"])
        },
        image2: {
          image: getAsset(entry.getIn(["data", "main", "image2", "image"])),
          alt: entry.getIn(["data", "main", "image2", "alt"])
        },
        image3: {
          image: getAsset(entry.getIn(["data", "main", "image3", "image"])),
          alt: entry.getIn(["data", "main", "image3", "alt"])
        }
      }}
      fullImage={entry.getIn(["data", "full_image"])}
      endorsements={endorsements}
    />
  );
};

export default EndorsementPagePreview;
