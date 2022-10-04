import React from "react";
import Header from "../Component/Header1/Header";
import DynamicText from "./DynamicText";
import FooterScreen from "./FooterScreen";
import NoticeScreen from "./NoticeScreen";
import PrizeScreen from "./PrizeScreen";
const HomeScreen = () => {
  return (
    <div>
      <Header />
      <DynamicText />
      <PrizeScreen />
      <NoticeScreen />
      <FooterScreen />
    </div>
  );
};

export default HomeScreen;
