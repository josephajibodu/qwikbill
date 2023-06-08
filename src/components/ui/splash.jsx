import PropTypes from "prop-types";
import Button from "./button";

export default function Splash({ imgUrl, heading }) {
  return (
    <div className="relative flex flex-col h-screen w-screen justify-end font-primary bottom-0">
      <img
        src={imgUrl}
        alt="onboarding"
        className="absolute object-cover h-full w-full"
      />
      <div className="flex flex-col mx-6 z-0">
        <h2 className="font-bold text-[22px] text-center mb-9 font-primary">
          {heading}
        </h2>

        <Button variant="solid" size="lg" className="mb-4 font-primary">
          Open an account now
        </Button>
        <Button variant="outline" size="lg" className="mb-16 font-primary">
          Sign in
        </Button>
      </div>
    </div>
  );
}

Splash.propTypes = {
  imgUrl: PropTypes.string,
  heading: PropTypes.string,
};

Splash.defaultProps = {
  imgUrl: "default",
  heading: "default",
};
