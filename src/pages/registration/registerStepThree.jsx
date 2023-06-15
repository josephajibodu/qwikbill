import Button from "../../components/ui/button";
import Input from "../../components/ui/input";
import Label from "../../components/ui/label";

export default function RegisterStepThree() {
  return (
    <div className="flex flex-col bg-white h-full px-8">
      <h2 className="font-secondary text-xl font-bold text-gray-700">
        What&apos;s your name?
      </h2>

      <div className="h-10 mt-2.5 mb-[18px]">
        <p className="font-secondary text-base font-light text-gray-600">
          Please type in your full name
        </p>
      </div>
      <Label htmlFor="firstName">First Name</Label>
      <Input
        type="text"
        id="firstName"
        placeholder="First name"
        className="placeholder:font-extrabold placeholder:text-base mb-6"
      />
      <Label htmlFor="lastName">Last Name</Label>
      <Input
        type="text"
        id="lastName"
        placeholder="Last name"
        className="placeholder:font-extrabold placeholder:text-base"
      />
      <Button variant="solid" size="lg" className="mt-[20px]">
        Continue
      </Button>
    </div>
  );
}
