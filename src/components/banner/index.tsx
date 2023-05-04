import "./index.css";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Banner(props: any) {
  const [bannerInfo, setBannerInfo] = useState({});

  useEffect(() => {
    setBannerInfo(props["bannerInfo"]);
    console.log(bannerInfo);
    console.log(bannerInfo["banner_image"]);
  }, [props]);
  return (
    <div className="banner-main">
      <div
        className="banner-img"
        style={
          bannerInfo["banner_image"]
            ? { backgroundImage: `url(${bannerInfo["banner_image"]})` }
            : { backgroundColor: "blue" }
        }>
        {bannerInfo["name"] ? (
          <Link
            className="card-link"
            to={`/deal/${bannerInfo["slug"]["current"]}`}>
            <div className="card-overlay">
              <div className="card-text-container">
                <div className="card-text-content">
                  <h1 className="card-text-header">{bannerInfo["name"]}</h1>
                  <div className="card-subsection">
                    <span className="card-text-subheader">
                      {bannerInfo["description"]}
                    </span>
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ) : (
          <h1>Loading</h1>
        )}
      </div>
    </div>
  );
}
