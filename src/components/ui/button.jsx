// import { ReactPropTypes } from "react";
import PropTypes from "prop-types";

export default function Button({ variant, children }) {
  let bgColor;

  switch (variant) {
    case "solid":
      bgColor = "bg-teal-500";
      break;
    case "outline":
      bgColor = "bg-transparent border-2 border-solid border-teal-500";
      break;
    default:
      bgColor = "bg-black";
      break;
  }

  return (
    <button
      type="button"
      className={`mt-2  text-base cursor-pointer font-bold text-white rounded-[32px] h-max w-full py-4 ${bgColor}`}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  variant: PropTypes.string,
  children: PropTypes.string,
};

Button.defaultProps = {
  variant: "solid",
  children: "default",
};
