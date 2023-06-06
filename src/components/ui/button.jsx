// import { ReactPropTypes } from "react";
import PropTypes from "prop-types";

export default function Button({ variant, size, children }) {
  let bgColor;
  let btnSize;
  let className;

  switch (variant) {
    case "solid":
      bgColor = "bg-teal-500 hover:bg-teal-500/90";
      break;
    case "outline":
      bgColor =
        "bg-transparent hover:bg-transparent/90 border-2 border-solid border-teal-500";
      break;
    default:
      bgColor = "bg-black";
      break;
  }

  switch (size) {
    case "sm":
      btnSize = "h-9 px-3 rounded-md";
      break;
    case "lg":
      btnSize = "h-11 px-8 rounded-md";
      break;
    default:
      btnSize = "h-10 py-2 px-4";
      break;
  }

  return (
    <button
      type="button"
      className={`text-base cursor-pointer font-bold text-white ${bgColor} ${btnSize} ${className}`}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  variant: PropTypes.string,
  children: PropTypes.node,
  size: PropTypes.string,
};

Button.defaultProps = {
  variant: "solid",
  children: "default",
  size: "sm",
};
