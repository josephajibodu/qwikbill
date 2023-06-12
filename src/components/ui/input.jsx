import PropTypes from "prop-types";

export default function Input({ type, className, ...props }) {
  return (
    <input
      type={type}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
      className={`rounded inline-block border-[1px] border-solid border-black/40 p-4 h-11 outline-none disabled:cursor-not-allowed disabled:opacity-50 text-sm placeholder:font-thin placeholder:text-sm w-full ${className}`}
    />
  );
}

Input.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
};

Input.defaultProps = {
  type: "default",
  className: "",
};
