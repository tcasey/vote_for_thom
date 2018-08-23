import React, { Component } from "react";
import { Colors } from "../constants";

export default class ReviewIcon extends Component {
  render() {
    const { color, opacity } = this.props;
    return (
      <svg viewBox="0 0 379 125">
        <path
          fill={color}
          fillOpacity={opacity}
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 5C0 2.23853 2.23858 0 5 0H374C376.761 0 379 2.23853 379 5V125H0V5ZM103 35L109.511 55.0385H130.581L113.535 67.423L120.046 87.4615L103 75.077L85.9542 87.4615L92.4651 67.423L75.4194 55.0385H96.4891L103 35ZM167.511 55.0385L161 35L154.489 55.0385H133.419L150.465 67.423L143.954 87.4615L161 75.077L178.046 87.4615L171.535 67.423L188.581 55.0385H167.511ZM219 35L225.511 55.0385H246.581L229.535 67.423L236.046 87.4615L219 75.077L201.954 87.4615L208.465 67.423L191.419 55.0385H212.489L219 35ZM283.511 55.0385L277 35L270.489 55.0385H249.419L266.465 67.423L259.954 87.4615L277 75.077L294.046 87.4615L287.535 67.423L304.581 55.0385H283.511Z"
        />
      </svg>
    );
  }
}

ReviewIcon.defaultProps = {
  color: Colors.BLACK,
  opacity: 0.4
};
