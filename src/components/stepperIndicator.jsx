/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import PropTypes from "prop-types";
import BackArrowIcon from "./icons/backArrow";

export default function StepperIndicator({ currentStep, totalSteps, setStep }) {
  const steps = Array(totalSteps).fill(null);
  const stepBack = currentStep - 1;
  function handleStepBack() {
    if (stepBack < 1);
    else setStep(stepBack);
  }

  function onStepChange(stepIndex) {
    setStep(stepIndex);
  }

  return (
    <div className="bg-white flex gap-[10vw] space-x-7 py-6 pl-8">
      <div className="cursor-pointer" onClick={handleStepBack}>
        <BackArrowIcon />
      </div>
      <div className="flex gap-0.5 self-center">
        {steps.map((curStep, index) => {
          let borderClass;
          const stepId = index;
          if (index === 0) borderClass = "rounded-l-full";
          else if (index === steps.length - 1) borderClass = "rounded-e-full";
          let bgColor = "bg-gray-400";
          if (index + 1 <= currentStep) bgColor = "bg-teal-500";
          return (
            <div
              key={stepId}
              className={`w-7 h-[5px] cursor-pointer ${bgColor} ${borderClass}`}
              onClick={() => onStepChange && onStepChange(index + 1)}
            />
          );
        })}
      </div>
    </div>
  );
}

StepperIndicator.propTypes = {
  currentStep: PropTypes.number.isRequired,
  totalSteps: PropTypes.number.isRequired,
  setStep: PropTypes.func.isRequired,
};
