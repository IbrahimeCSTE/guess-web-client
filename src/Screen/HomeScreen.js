import React from "react";
import Header from "../Component/Header1/Header";
import DynamicText from "./DynamicText";
import FooterScreen from "../Screen/FooterScreen";
import Sports from "./Sports";

import { getAnalytics, logEvent } from "firebase/analytics";

import { useEffect } from "react";
import app from "../Component/Firebase/FirebaseAuth";

const HomeScreen = () => {
  const googleAnalytics = getAnalytics(app);

  useEffect(() => {
    logEvent(googleAnalytics, "visited all client");
  }, []);
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
