import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Sports = () => {
  const [link, setLink] = useState([]);
  const [loading, setLoading] = useState(true);
  const [dataLength, setDataLength] = useState(1);
  const [perPageNews, setPerPageNews] = useState(6);
  const [selectedPage, setSelectedPage] = useState(0);
  let totalPage = Math.ceil(dataLength / perPageNews);
  useEffect(() => {
    //window.location.href = "sports";
    const fetchData = async () => {
      setLoading(true);
      const { data } = await axios.get("https://server.kajitbe.com/api/news");
      setDataLength(data.length);
      let skip = selectedPage * perPageNews;
      setLink(data.reverse().slice(skip, skip + perPageNews));
      //console.log(data);
      setLoading(false);
    };
    fetchData();
  }, [dataLength, selectedPage]);
  return (
    <div className="container my-4">
      <h3 className="text-danger my-3">খেলাধুলা</h3>
      <div className="">
        <div className="card-header">
          <ul className="nav sportsTab nav-tabs card-header-tabs">
            <li className="nav-item ">
              <Link className="nav-link" to="/sports/cricket">
                ক্রিকেট
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/sports/football">
                ফুটবল
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/sports/other">
                অন্য খেলা
              </Link>
            </li>
          </ul>
        </div>
        <div className="card-body my-5">
          {loading ? (
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          ) : (
            <div className="row g-0">
              {link.length > 0 &&
                link.map((item, idx) => (
                  <div key={idx} className="col-md-6 my-2 col-lg-4">
                    <Link to={`/sports/single-news/${item._id}`}>
                      <div className="card newsCard p-2">
                        <div className="newCardSmallDevice">
                          <div className="newsCardImg">
                            <img
                              src={item.imgUrl}
                              className="card-img-top img-fluid"
                              alt="news"
                            />
                          </div>
                          <div className="my-3 mx-2 newsCardContent">
                            <h5 className="newsTitle card-title">
                              {item.title}
                            </h5>
                            <p className="card-text newsDes1">{item.des1}</p>
                          </div>
                        </div>
                        <div className="btnAndtime card-footer mt-auto text-muted">
                          <div>
                            <span>
                              {item.postDate ? item.postDate : "somedays ago"}
                            </span>
                          </div>
                          <div>
                            <h6 className="text-primary">আরো পড়ুন</h6>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
            </div>
          )}
        </div>
      </div>
      <div className="pagination d-flex justify-content-center my-5">
        <div className={loading ? "d-none" : ""}>
          {[...Array(totalPage).keys()].map(
            (pg) =>
              pg < 10 && (
                <button
                  onClick={(e) => setSelectedPage(pg)}
                  className={
                    pg === selectedPage
                      ? "btn mx-1 btn-danger text-white"
                      : "btn mx-1 btn-dark text-white"
                  }
                >
                  {pg + 1}
                </button>
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default Sports;
