import axios from "axios";
import React, { useEffect, useState } from "react";

const NoticeScreen = () => {
  const [noticeData, setNoticeData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("/api/notice");
      setNoticeData(data);
    };
    fetchData();
  }, []);
  return (
    <div className="container">
      <div className="card">
        <div className="card-header">
          <h3 className="text-center">গুরুত্বপূর্ণ তথ্য</h3>
        </div>
        <div className="card-body">
          {noticeData &&
            noticeData?.map((item, idx) => (
              <div key={idx} className="card eCnoticardPoint p-4">
                <h5>{item.notice}</h5>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default NoticeScreen;
