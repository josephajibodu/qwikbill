import PropTypes from "prop-types";

function Label({ inputId, children, extraClass }) {
  return (
    <label
      htmlFor={inputId}
      className={`font-secondary font-bold text-sm text-black/30 ${extraClass}`}
    >
      {children}
    </label>
  );
}

export default Label;

Label.propTypes = {
  inputId: PropTypes.string.isRequired,
  children: PropTypes.string,
  extraClass: PropTypes.string,
};

Label.defaultProps = {
  children: "",
  extraClass: "",
};
