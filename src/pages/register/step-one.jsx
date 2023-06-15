import React from "react";
import Label from "../../components/ui/label";
import Input from "../../components/ui/input";

export default function StepOne() {
  return (
    <div className="h-full px-4">
      <h1 className="text-2xl font-bold">What’s your Email Address?</h1>
      <p className="text-md font-light my-3">
        You will recieve a verification code so make sure it is active
      </p>

      <Label title="Email Address" htmlFor="email" />
      <Input id="email" />
    </div>
  );
}
