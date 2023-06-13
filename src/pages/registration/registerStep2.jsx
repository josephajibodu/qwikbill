import Button from "../../components/ui/button";
import Input from "../../components/ui/input";
import Label from "../../components/ui/label";
import StepperIndicator from "../../components/stepperIndicator";

export default function RegisterStep2() {
  return (
    <div className="flex flex-col bg-white h-full px-8 font-secondary">
      <StepperIndicator currStep="2" />
      <h2 className="font-secondary text-xl font-bold text-gray-700">
        Confirm Email Address
      </h2>
      <div className="h-10 mt-2.5 mb-[18px]">
        <p className="font-secondary text-base font-light text-gray-600">
          Please enter the code sent to the email address <nbsp />
          <b className="text-base font-bold">johndoe@example.com</b>
        </p>
      </div>
      <Label htmlFor="otp">Enter OTP</Label>
      <Input type="number" id="otp" />
      <Button variant="solid" size="lg" className="mt-[100px]">
        Continue
      </Button>
      <div className=" mt-6 text-xs font-bold text-center text-gray-600">
        <b>Didnt receive a code?</b>
        <a href="##" className="rounded-md ml-1 bg-gray-300 p-2">
          Resend
        </a>
      </div>
    </div>
  );
}
