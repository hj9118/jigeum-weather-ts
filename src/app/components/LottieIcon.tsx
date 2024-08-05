import Lottie from "lottie-react";

interface LottieIconProps {
  animationData: any;
}

const LottieIcon = ({ animationData }:LottieIconProps) => {
  return <Lottie animationData={animationData} loop={true} />;
};

export default LottieIcon;
