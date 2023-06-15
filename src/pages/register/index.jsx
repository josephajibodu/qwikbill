import React, { useState } from "react";
import StepperIndicator from "./stepper-indicator";
import StepOne from "./step-one";
import Button from "../../components/ui/button";
import StepTwo from "./step-two";
import StepThree from "./step-three";
import StepFour from "./step-four";

const totalSteps = 4;

export default function Register() {
  const [currentStep, setCurrentStep] = useState(1);
  const handleContinue = () => {
    if (currentStep < totalSteps) {
      // validations
      setCurrentStep(currentStep + 1);
    }
  };

  // const handleBack = () => {
  //   if (currentStep > 1) {
  //     setCurrentStep(currentStep - 1);
  //   }
  // };
  return (
    <div className="h-full w-full flex flex-col">
      {/* Header */}
      <StepperIndicator
        steps={totalSteps}
        currentStep={currentStep}
        onStepChange={setCurrentStep}
      />

      {/* Body */}
      <div className="flex-grow">
        {currentStep === 1 && <StepOne />}
        {currentStep === 2 && <StepTwo />}
        {currentStep === 3 && <StepThree />}
        {currentStep === 4 && <StepFour />}
      </div>

      {/* footer */}
      <div className="flex gap-10 p-4">
        <Button onClick={handleContinue} className="w-full" size="lg">
          Continue
        </Button>
      </div>
    </div>
  );
}
