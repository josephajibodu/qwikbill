import { useState } from "react";
import RegisterStepOne from "./registerStepOne";
import RegisterStepTwo from "./registerStepTwo";
import RegisterStepThree from "./registerStepThree";
import RegisterStepFour from "./registerStepFour";
import StepperIndicator from "../../components/stepperIndicator";

export default function Register() {
  const [step, setStep] = useState(1);
  return (
    <div className="h-full bg-white">
      <StepperIndicator currentStep={step} totalSteps={4} setStep={setStep} />
      {step === 1 && <RegisterStepOne />}
      {step === 2 && <RegisterStepTwo />}
      {step === 3 && <RegisterStepThree />}
      {step === 4 && <RegisterStepFour />}
    </div>
  );
}
