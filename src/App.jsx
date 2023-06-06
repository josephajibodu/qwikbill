import Badge from "./components/ui/badge";
import Button from "./components/ui/button";
import Input from "./components/ui/input";

function App() {
  // Router implementation here
  return (
    <div className="flex text-3xl bg-orange-500 h-screen md:w-[700px]">
      <Badge variant="solid" />
      <Button variant="solid" size="lg">
        Sign in
      </Button>
      <Input placeholder="Enter your e-mail" type="text" />
    </div>
  );
}

export default App;
