import axios from "axios";
import React, { useEffect, useState } from "react";

const DynamicText = () => {
  const [link, setLink] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        "https://server.kajitbe.com/api/dynamic-text"
      );
      setLink(data[data.length - 1]);
    };
    fetchData();
  }, []);
  return (
    <div className=" dynamicText">
      <marquee
        behavior="scroll"
        scrollamount="5"
        width="100%"
        direction="right"
        height="auto"
      >
        {link ? link.text : "Welcome"}
      </marquee>
    </div>
  );
};

export default DynamicText;
