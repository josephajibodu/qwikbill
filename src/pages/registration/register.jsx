import { useState } from "react";
import RegisterStep1 from "./registerStep1";
import RegisterStep2 from "./registerStep2";
import RegisterStep3 from "./registerStep3";
import RegisterStep4 from "./registerStep4";

export default function Register() {
  const [step, setStep] = useState(1);
  return (
    <div className="h-full">
      {step === 1 && <RegisterStep1 setStep={setStep} />}
      {step === 2 && <RegisterStep2 setStep={setStep} />}
      {step === 3 && <RegisterStep3 setStep={setStep} />}
      {step === 4 && <RegisterStep4 setStep={setStep} />}
    </div>
  );
}
