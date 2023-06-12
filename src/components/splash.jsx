import PropTypes from "prop-types";
import Button from "./ui/button";

export default function Splash({
  imgUrl,
  heading,
  isActive = false,
  isNext = false,
}) {
  let translateClass = "-translate-x-full opacity-0";
  if (isNext) {
    translateClass = "translate-x-full opacity-0";
  } else if (isActive) {
    translateClass = "translate-x-0 opacity-100";
  }

  return (
    <div className="absolute w-full">
      <div
        className={`relative flex flex-col h-screen w-full justify-end font-primary bottom-0 transition-all duration-1000 ${translateClass}`}
      >
        <img
          src={imgUrl}
          alt="onboarding"
          className="absolute object-cover h-full w-full opacity-90"
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
    </div>
  );
}

Splash.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
  isNext: PropTypes.bool,
};

Splash.defaultProps = {
  isActive: false,
  isNext: false,
};
