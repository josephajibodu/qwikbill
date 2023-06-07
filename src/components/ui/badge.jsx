import PropTypes from "prop-types";

export default function Badge({ variant, type }) {
  // bgColor, borderColor
  let color = "gray-700";

  if (type === "primary") {
    color = "teal-500";
  }

  let extraClass = `bg-${color} border-${color}`;

  if (variant === "outline") {
    extraClass = `bg-transparent border-${color}`;
  }

  return (
    <div
      className={`inline-block p-2 border-2 ${extraClass}  w-min h-min flex items-center justify-center rounded-lg`}
    >
      <svg
        xmlns="http://www.w3.ozrg/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className={`w-8 h-8 ${
          variant === "solid" ? "text-white" : "text-teal-500"
        }`}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
        />
      </svg>
    </div>
  );
}

Badge.propTypes = {
  variant: PropTypes.string,
  type: PropTypes.string,
};

Badge.defaultProps = {
  variant: "solid",
  type: "default",
};
