import Label from "./components/ui/label";
// import Onboarding from "./pages/onboarding";

function App() {
  // Router implementation here
  return (
    <div className="flex text-3xl bg-orange-500 h-screen md:w-[700px]">
      {/* <Badge variant="solid" />
      <Button variant="solid" size="lg">
        Sign in
      </Button>
      <Input placeholder="Enter your e-mail" type="text" /> */}
      {/* <Onboarding /> */}
      <Label>Email</Label>
    </div>
  );
}

export default App;
