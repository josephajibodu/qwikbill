import PropTypes from "prop-types";

export default function Input({ type, placeholder }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="rounded border-[1px] border-solid border-black/40 text-sm p-1 h-fit outline-none disabled:cursor-not-allowed disabled:opacity-50"
    />
  );
}

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
};

Input.defaultProps = {
  type: "default",
  placeholder: "string",
};
