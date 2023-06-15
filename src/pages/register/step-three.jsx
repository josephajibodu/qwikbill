import React from "react";
import Label from "../../components/ui/label";
import Input from "../../components/ui/input";

export default function StepThree() {
  return (
    <div className="h-full px-4">
      <h1 className="text-2xl font-bold">What’s your name?</h1>
      <p className="text-md font-light my-3">Please type in your full nname</p>

      <Label title="First Name" htmlFor="firstname" />
      <Input id="firstname" />
      <div className="h-4 w-full" />
      <Label title="Last Name" htmlFor="lastname" />
      <Input id="lastname" />
    </div>
  );
}
