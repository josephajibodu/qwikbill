import { useState } from "react";
import RegisterStepOne from "./registerStepOne";
import RegisterStepTwo from "./registerStepTwo";
import RegisterStepThree from "./registerStepThree";
import RegisterStepFour from "./registerStepFour";

export default function Register() {
  const [step, setStep] = useState(1);
  return (
    <div className="h-full">
      {step === 1 && <RegisterStepOne setStep={setStep} />}
      {step === 2 && <RegisterStepTwo setStep={setStep} />}
      {step === 3 && <RegisterStepThree setStep={setStep} />}
      {step === 4 && <RegisterStepFour setStep={setStep} />}
    </div>
  );
}
