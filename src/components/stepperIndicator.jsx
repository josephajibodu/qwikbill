import PropTypes from "prop-types";

import BackArrowIcon from "./icons/backArrow";

export default function StepperIndicator({ currStep }) {
  const totalSteps = 5;
  const steps = Array(totalSteps).fill(null);
  return (
    <div className="bg-white flex gap-[10vw] space-x-7 py-6">
      <BackArrowIcon />
      <div className="flex gap-0.5 self-center">
        {steps.map((step, index) => {
          let borderClass;
          if (index === 0) borderClass = "rounded-l-full";
          else if (index === steps.length - 1) borderClass = "rounded-e-full";

          let bgColor = "bg-gray-400";
          if (index + 1 <= currStep) bgColor = "bg-teal-500";
          return (
            <div
              key={step}
              className={`w-7 h-[5px] ${bgColor} ${borderClass}`}
              // onClick={() => onStepChange && onStepChange(index + 1)}
            />
          );
        })}
      </div>
    </div>
  );
}

StepperIndicator.propTypes = {
  currStep: PropTypes.string.isRequired,
};

// StepperIndicator.defaultProps = {
//   className: "",
// };
