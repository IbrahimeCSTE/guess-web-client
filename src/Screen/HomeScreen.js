import React from "react";
// import MessengerCustomerChat from "react-messenger-customer-chat";
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
      {/* <MessengerCustomerChat pageId="102839139265396" appId="432657688699929" /> */}
    </div>
  );
};

export default HomeScreen;
