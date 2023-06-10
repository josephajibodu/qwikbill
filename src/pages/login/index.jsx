import { IoFingerPrintOutline } from "react-icons/io5";
import Button from "../../components/ui/button";
import Input from "../../components/ui/input";
import Label from "../../components/ui/label";

function Login() {
  return (
    <form className="flex flex-col mx-auto mt-5 px-5 space-y-6">
      <div className="font-secondary">
        <Label htmlFor="userNumber">Phone Number or Email</Label>
        <Input
          type={"email" && "tel"}
          id="userNumber"
          placeholder="0704 XXX"
          required
        />
      </div>
      <div className="font-secondary">
        <Label htmlFor="password">Password</Label>
        <Input
          type="password"
          id="userPassword"
          placeholder="*********"
          required
        />
      </div>
      <Button variant="solid" size="lg" className="font-primary">
        Login
      </Button>
      <div className="font-primary text-sm font-normal flex flex-col items-center gap-4">
        <a
          href="http://#"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          Forgot Password?
        </a>
        <div>
          <IoFingerPrintOutline size="96px" color="teal" />
        </div>
      </div>
    </form>
  );
}

export default Login;
