/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from "react";
import PropTypes from "prop-types";

export default function StepperIndicator({ steps, currentStep, onStepChange }) {
  const handleClick = (step) => {
    onStepChange(step);
  };
  return (
    <div className="h-28 px-4 w-full flex gap-3 items-center">
      {Array(steps)
        .fill(0)
        .map((_, index) => (
          <div
            key={index}
            onClick={() => handleClick(index + 1)}
            className={`h-2 w-full cursor-pointer ${
              index + 1 <= currentStep ? "bg-teal-500" : "bg-gray-200"
            } ${index === 0 ? "rounded-s-lg" : ""} ${
              index === steps - 1 ? "rounded-e-lg" : ""
            }`}
          />
        ))}
    </div>
  );
}

StepperIndicator.propTypes = {
  steps: PropTypes.number.isRequired,
  currentStep: PropTypes.number,
  onStepChange: PropTypes.func.isRequired,
};

StepperIndicator.defaultProps = {
  currentStep: 1,
};
