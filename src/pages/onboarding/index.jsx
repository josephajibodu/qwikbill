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

function Onboarding() {
  const [curScreen, setCurScreen] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      if (curScreen < splashScreenResources.length) {
        setCurScreen(curScreen + 1);
      } else {
        setCurScreen(1);
      }
    }, displayInterval);

    return () => clearInterval(interval);
  }, [curScreen]);

  return (
    <>
      {curScreen === 1 && (
        <Splash
          heading={splashScreenResources[0].heading}
          imgUrl={splashScreenResources[0].image}
        />
      )}
      {curScreen === 2 && (
        <Splash
          heading={splashScreenResources[1].heading}
          imgUrl={splashScreenResources[1].image}
        />
      )}
      {curScreen === 3 && (
        <Splash
          heading={splashScreenResources[2].heading}
          imgUrl={splashScreenResources[2].image}
        />
      )}
    </>
  );
}

export default Onboarding;
