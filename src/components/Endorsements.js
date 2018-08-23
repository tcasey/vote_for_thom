import React from "react";

export default ({ endorsements }) => (
  <div>
    {endorsements.map(endorsement => (
      <article className="message">
        <div className="message-body">
          {endorsement.quote}
          <br />
          <cite> – {endorsement.author}</cite>
        </div>
      </article>
    ))}
  </div>
);
