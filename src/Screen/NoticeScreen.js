import React from "react";

const NoticeScreen = () => {
  return (
    <div className="container">
      <div className="card">
        <div className="card-header">
          <h3 className="text-center">গুরুত্বপূর্ণ তথ্য</h3>
        </div>
        <div className="card-body">
          <div className="card eCnoticardPoint p-4">
            <h5>
              প্রতিটি খেলার ৩০ মিনিটের ভিতর ফলাফল প্রকাশ করা হবে।ফলাফল ই-মেইলের
              মাধ্যমে বা আমাদের ওয়েবসাইট এ প্রকাশ করা হবে। যারা উইনার হবে তারা
              যোগাযোগ করে তাদের প্রাইজ বুজে নিবে।
            </h5>
          </div>
          <div className="card eCnoticardPoint p-4">
            <h5>
              আমাদের ইউটিউব থেকে ভিডিও দেখে কোড সংগ্রহ করতে হবে।তারপর সেই কোড
              দিয়ে ফর্ম পূরণ করতে হবে। আর চ্যানেলটি অবশ্যই সাবস্ক্রাইব করতে হবে।
            </h5>
          </div>
          <div className="card eCnoticardPoint p-4">
            <h5>
              কমেন্টের এ গিয়ে উত্তর দিতে হবে।তারপর আমরা ওয়েবসাইট এবং কমেন্টের
              উত্তর যাদের সঠিক হবে তারদের লটারি করে ১০ জনকে পুরুস্কার করা হবে।
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoticeScreen;
