import React from "react";
import { css } from "emotion";
import { Colors, Layout } from "../../constants";

const Button = props => {
  const { btnText, btnType, type } = props;
  const styles = {
    btn: {
      display: "inline-block",
      fontSize: Layout.TEXT,
      lineHeight: 1.25,
      textDecoration: "none",
      color: Colors.WHITE,
      textAlign: "center",
      transition: "0.5s",
      border: 0
    },
    default: {
      padding: "16px 40px",
      borderRadius: "0.3rem",
      backgroundImage: `linear-gradient(45deg, ${Colors.PRIMARY} 30%,${
        Colors.SECONDARY
      } 90%)`,
      ":hover": {
        backgroundImage: `linear-gradient(45deg, ${Colors.SECONDARY} 30%,${
          Colors.PRIMARY
        } 90%)`
      }
    },
    cta: {
      padding: "16px 40px",
      borderRadius: "0.3rem",
      backgroundImage: `linear-gradient(45deg, ${Colors.PRIMARY_CTA} 30%,${
        Colors.SECONDARY_CTA
      } 90%)`,
      ":hover": {
        backgroundImage: `linear-gradient(45deg, ${Colors.SECONDARY_CTA} 30%,${
          Colors.PRIMARY_CTA
        } 90%)`
      }
    },
    form: {
      padding: "10px 40px",
      borderRadius: "0 0.3rem 0.3rem 0",
      backgroundImage: `linear-gradient(45deg, ${Colors.PRIMARY} 30%,${
        Colors.SECONDARY
      })`,
      ":hover": {
        backgroundImage: `linear-gradient(45deg, ${Colors.SECONDARY} 30%,${
          Colors.PRIMARY
        } 90%)`
      }
    },
    formCta: {
      padding: "10px 40px",
      borderRadius: "0 0.3rem 0.3rem 0",
      backgroundImage: `linear-gradient(45deg, ${Colors.PRIMARY_CTA} 30%,${
        Colors.SECONDARY_CTA
      } 90%)`,
      ":hover": {
        backgroundImage: `linear-gradient(45deg, ${Colors.SECONDARY_CTA} 30%,${
          Colors.PRIMARY_CTA
        } 90%)`
      }
    }
  };
  const btnClass = btnType ? styles[btnType] : styles.default;

  return (
    <button className={css([styles.btn, btnClass])} type={type}>
      {btnText}
    </button>
  );
};

export default Button;

Button.defaultProps = {
  btnText: "Early Access",
  type: "submit"
};
