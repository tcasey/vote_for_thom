import React from "react";
import Button from "./Button";

const Form = props => {
  const { formName, inputName, placeHolder, btnText, btnType } = props;

  return (
    <form
      id="subscribe"
      name={formName}
      className="fx-center"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <input type="hidden" name="" value="subscribe" />
      <div className="">
        <div style={{ position: "absolute", left: "-5000px" }}>
          <input type="text" name="bot-field" value="" aria-hidden="true" />
        </div>
        <input
          type="email"
          className="input-cta-form"
          name={inputName}
          placeholder={placeHolder}
          required
        />
      </div>
      <Button btnType={btnType} btnText={btnText} />
    </form>
  );
};

export default Form;

Form.defaultProps = {
  formName: "subscribe",
  placeHolder: "Email Address",
  inputName: "email",
  btnText: "Submit",
  btnType: "formCta"
};
