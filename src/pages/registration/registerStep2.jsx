import Button from "../../components/ui/button";
import Input from "../../components/ui/input";
import Label from "../../components/ui/label";
import StepperIndicator from "../../components/stepperIndicator";

export default function RegisterStep2() {
  return (
    <div className="flex flex-col bg-white h-full px-8">
      <StepperIndicator currStep="2" />
      <h2 className="font-secondary text-xl font-bold text-gray-700">
        Confirm Email Address
      </h2>
      <div className="h-10 mt-2.5 mb-[18px]">
        <p className="inline font-secondary text-base font-light text-gray-600">
          Please enter the code sent to the email address <nbsp />
          <b className="inline text-base font-bold">johndoe@example.com</b>
        </p>
      </div>
      <Label htmlFor="e-mail">Enter OTP</Label>
      <Input type="e-mail" id="e-mail" />
      <Button variant="solid" size="lg" className="mt-[100px]">
        Continue
      </Button>
      <div className="bg-red-500 text-center">
        <b>Didnt receive a code?</b>
        <span>Resend</span>
      </div>
    </div>
  );
}
