import PropTypes from "prop-types";

function Label({ htmlFor, children, className }) {
  return (
    <label
      htmlFor={htmlFor}
      className={`block font-secondary font-bold text-sm text-black/40 ${className}`}
    >
      {children}
    </label>
  );
}

export default Label;

Label.propTypes = {
  htmlFor: PropTypes.string.isRequired,
  children: PropTypes.string,
  className: PropTypes.string,
};

Label.defaultProps = {
  children: "",
  className: "",
};
