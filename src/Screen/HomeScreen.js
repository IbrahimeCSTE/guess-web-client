import React from "react";
import Header from "../Component/Header1/Header";
import DynamicText from "./DynamicText";
import FooterScreen from "../Screen/FooterScreen";
import Sports from "./Sports";
const HomeScreen = () => {
  return (
    <div>
      <Header />
      <DynamicText />
      <Sports />
      <FooterScreen />
    </div>
  );
};

export default HomeScreen;
