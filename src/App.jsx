// import Login from "./pages/login";
// import Onboarding from "./pages/onboarding";

import RegisterStep2 from "./pages/registration/registerStep2";

// import StepperIndicator from "./components/stepperIndicator";

function App() {
  // Router implementation here
  return (
    <div className=" text-3xl bg-orange-500 h-screen w-full md:w-[700px]">
      {/* <Badge variant="solid" />
      <Button variant="solid" size="lg">
        Sign in */}

      <RegisterStep2 />
    </div>
  );
}

export default App;
