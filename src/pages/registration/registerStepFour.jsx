import Button from "../../components/ui/button";
import Input from "../../components/ui/input";
import Label from "../../components/ui/label";

export default function RegisterStepFour() {
  return (
    <div className="flex flex-col bg-white h-full px-8">
      <h2 className="font-secondary text-xl font-bold text-gray-700">
        Setup your Password
      </h2>
      <div className="h-10 mt-2.5 mb-[18px]">
        <p className="font-secondary text-base font-light text-gray-600">
          Avoid using common patterns or personal information.
        </p>
      </div>
      <Label htmlFor="password">Password</Label>
      <Input
        type="password"
        id="password"
        placeholder="************"
        className="placeholder:font-bold placeholder:text-base mb-6"
      />
      <Label htmlFor="passwordConfirm">Confirm Password</Label>
      <Input
        type="password"
        id="passwordConfirm"
        placeholder="************"
        className="placeholder:font-bold placeholder:text-base"
      />
      <Button variant="solid" size="lg" className="mt-[20px]">
        Complete
      </Button>
    </div>
  );
}
