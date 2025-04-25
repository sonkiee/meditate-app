import LottieView from "lottie-react-native";
import React, { useMemo } from "react";
import { StyleSheet } from "react-native";

function LottieIcon(props) {
  const { style, source, loop = true } = props;

  return (
    <LottieView
      style={style}
      source={source || require("../../images/lottieAnimation/Tick.json")}
      autoPlay
      loop={loop}
    />
  );
}

export default LottieIcon;
