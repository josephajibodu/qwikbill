import PropTypes from "prop-types";

export default function BackArrowIcon({ className }) {
  return (
    <svg
      width="16"
      height="15"
      viewBox="0 0 16 15"
      fill="none"
      className={`fill-teal-500 ${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.60564 1.65147L3.73182 6.5253H16V8.47483H3.73182L8.60564 13.3487L7.22712 14.7272L0 7.50006L7.22712 0.272949L8.60564 1.65147Z"
        fill="#008080"
      />
    </svg>
  );
}

BackArrowIcon.propTypes = {
  className: PropTypes.string,
};

BackArrowIcon.defaultProps = {
  className: "",
};
