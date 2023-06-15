import React from "react";
import Label from "../../components/ui/label";
import Input from "../../components/ui/input";

export default function StepFour() {
  return (
    <div className="h-full px-4">
      <h1 className="text-2xl font-bold">Setup your Password</h1>
      <p className="text-md font-light my-3">
        Avoid using common patterns or personal information.
      </p>

      <Label title="Password" htmlFor="password" />
      <Input id="password" />
      <div className="h-4 w-full" />
      <Label title="Confirm Password" htmlFor="confirm-password" />
      <Input id="confirm-password" />
    </div>
  );
}
