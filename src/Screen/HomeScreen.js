import React from "react";
import Header from "../Component/Header1/Header";
import FooterScreen from "./FooterScreen";
import NoticeScreen from "./NoticeScreen";
import PrizeScreen from "./PrizeScreen";
import MessengerCustomerChat from "react-messenger-customer-chat";
const HomeScreen = () => {
  return (
    <div>
      <Header />
      <PrizeScreen />
      <NoticeScreen />
      <FooterScreen />
      <MessengerCustomerChat pageId="102839139265396" appId="432657688699929" />
    </div>
  );
};

export default HomeScreen;
