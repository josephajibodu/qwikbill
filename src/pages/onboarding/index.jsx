import { useEffect, useState } from "react";

import Splash from "../../components/ui/splash";
import splash1 from "../../assets/images/splash1.png";
import splash2 from "../../assets/images/splash2.jpeg";
import splash3 from "../../assets/images/splash3.jpeg";

const splashScreenResources = [
  {
    heading: "Get the best Buy Now, Pay Later payment options",
    image: splash1,
  },
  {
    heading:
      "Buy airtime and data just at the tip of your fingers for yourself, family and friends",
    image: splash2,
  },
  {
    heading: "Pay your favourite vendors easily and seamlessly",
    image: splash3,
  },
];
const displayInterval = 10_000;
const baseScreenState = 0;

function Onboarding() {
  const [curScreen, setCurScreen] = useState(baseScreenState);

  useEffect(() => {
    const interval = setInterval(() => {
      if (curScreen < splashScreenResources.length - 1) {
        setCurScreen(curScreen + 1);
      } else {
        setCurScreen(baseScreenState);
      }
    }, displayInterval);

    return () => clearInterval(interval);
  }, [curScreen]);

  return (
    <>
      {splashScreenResources.map(
        (splash, splashIndex) =>
          curScreen === splashIndex && (
            <Splash
              key={splash}
              heading={splash.heading}
              imgUrl={splash.image}
              opacity={curScreen === splashIndex ? "opacity-100" : "opacity-0"}
            />
          )
      )}
    </>
  );
}

export default Onboarding;
