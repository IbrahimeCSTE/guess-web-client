import React from "react";
import { Link } from "react-router-dom";

const AdminNav = () => {
  return (
    <div>
      <div className="card p-2 bg-dark">
        <div className="adminNav">
          <Link to="/update-news-manage">Update</Link>
          <Link to="/notice-manage">Notice</Link>
          <Link to="/time-manage">TimeUp </Link>
          <Link to="/yt-manage">Youtube</Link>
          <Link to="/yt-video">VideoLink</Link>
          <Link to="/fb-manage">Facebook</Link>
          <Link to="/me-manage">MobEmail</Link>
          <Link to="/winner-manage">winnerSection</Link>
          <Link to="/registerList">registerList</Link>
          <Link to="/selected-winner">SelectWinner</Link>
          <Link to="/dynamic-text">Dynamic</Link>
          <Link to="/header-img">HeaderImg</Link>
        </div>
      </div>
    </div>
  );
};

export default AdminNav;
