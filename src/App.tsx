import "./App.css";
import Header from "./components/header";
import Banner from "./components/banner";
import { useEffect, useState } from "react";


function App() {
  const [data, setData] = useState({ product: [], deal: [], banner: [] });

  const PROJECT_ID = "lwzct5bl";
  const DATASET = "production";
  const QUERY = encodeURIComponent('*[_type in ["product", "deal", "banner"]]');

  const url = `https://${PROJECT_ID}.api.sanity.io/v2023-05-01/data/query/${DATASET}?query=${QUERY}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((result) => {
        console.log(result["result"]);
        const productData = result["result"].filter((isProduct: any) => {
          return isProduct["_type"] == "product";
        });

        const dealData = result["result"].filter((isDeal: any) => {
          return isDeal["_type"] == "deal";
        });

        const bannerData = result["result"].filter((isBanner: any) => {
          return isBanner["_type"] == "banner";
        });

        setData({ product: productData, deal: dealData, banner: bannerData });
        console.log(data);
      });
  }, []);

  return (
    <div className="homepage-main">
      <Header />
      <div className="banner-container">
        <Banner bannerData={data["banner"]} dealData={data["deal"]} />
      </div>
    </div>
  );
}

export default App;
