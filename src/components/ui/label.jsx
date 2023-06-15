import PropTypes from "prop-types";

function Label({ htmlFor, title, className }) {
  return (
    <label
      htmlFor={htmlFor}
      className={`block font-secondary font-bold text-sm text-black/40 ${className}`}
    >
      {title}
    </label>
  );
}

export default Label;

Label.propTypes = {
  htmlFor: PropTypes.string.isRequired,
  title: PropTypes.string,
  className: PropTypes.string,
};

Label.defaultProps = {
  title: "",
  className: "",
};
