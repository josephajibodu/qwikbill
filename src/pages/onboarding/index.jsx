import { useState } from "react";

import Splash from "../../components/ui/splash";
import splash1 from "../../assets/images/splash1.png";
import splash2 from "../../assets/images/splash2.jpeg";
import splash3 from "../../assets/images/splash3.jpeg";

const headings = [
  "Get the best Buy Now, Pay Later payment options",
  "Buy airtime and data just at the tip of your fingers for yourself, family and friends",
  "Pay your favourite vendors easily and seamlessly",
];

const imgUrls = [splash1, splash2, splash3];
const displayInterval = 1000;

function Onboarding() {
  const [curScreen, setCurScreen] = useState(1);

  setInterval(() => {
    if (curScreen < imgUrls.length) {
      setCurScreen(curScreen + 1);
    } else {
      setCurScreen(1);
    }
  }, displayInterval);

  return (
    <>
      {curScreen === 1 && <Splash heading={headings[0]} imgUrl={imgUrls[0]} />}
      {curScreen === 2 && <Splash heading={headings[1]} imgUrl={imgUrls[1]} />}
      {curScreen === 3 && <Splash heading={headings[2]} imgUrl={imgUrls[2]} />}
    </>
  );
}

export default Onboarding;
