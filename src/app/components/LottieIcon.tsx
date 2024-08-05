import Lottie from "lottie-react";
import { LottieIconProps } from "../types";

const LottieIcon = ({ animationData }:LottieIconProps) => {
  return <Lottie animationData={animationData} loop={true} />;
};

export default LottieIcon;
