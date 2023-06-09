import Input from "../../components/ui/input";
import Label from "../../components/ui/label";

function Login() {
  return (
    <div>
      <Label htmlFor="userNumber">Phone Number or Email</Label>
      <Input type={"email" && "tel"} id="userNumber" />
    </div>
  );
}

export default Login;
