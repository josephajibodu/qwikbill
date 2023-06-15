import React from "react";
import Label from "../../components/ui/label";
import Input from "../../components/ui/input";

export default function StepTwo() {
  return (
    <div className="h-full px-4">
      <h1 className="text-2xl font-bold">Confirm Email Address</h1>
      <p className="text-md font-light my-3">
        Please enter the code sent to the email address{" "}
        <p className="font-bold">johndoe@example.com</p>
      </p>

      <Label title="Enter OTP" htmlFor="otp" />
      <Input id="otp" />
    </div>
  );
}
