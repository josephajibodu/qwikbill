import Badge from "./components/ui/badge";
import Button from "./components/ui/button";

function App() {
  // Router implementation here
  return (
    <div className="flex text-3xl w-full bg-orange-500 h-screen md:w-[700px]">
      <Badge variant="solid" />
      <Button variant="solid">Sign in</Button>
    </div>
  );
}

export default App;
