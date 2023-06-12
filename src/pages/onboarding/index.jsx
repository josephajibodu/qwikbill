import { useEffect, useState } from "react";

import Splash from "../../components/splash";
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

// const positions = [
//   [2, 0, 1],
//   [0, 1, 2],
//   [1, 2, 0],
// ];

const displayInterval = 10_000;
const baseScreenState = 0;

function Onboarding() {
  const [curScreen, setCurScreen] = useState(baseScreenState);
  // know the next index
  const nextIndex = (curScreen + 1) % splashScreenResources.length;

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
    <div className="relative w-full overflow-hidden">
      {splashScreenResources.map((splash, splashIndex) => (
        <Splash
          key={splash}
          heading={splash.heading}
          imgUrl={splash.image}
          isActive={curScreen === splashIndex}
          isNext={splashIndex === nextIndex}
        />
      ))}
    </div>
  );
}

export default Onboarding;
