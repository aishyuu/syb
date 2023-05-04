import "./App.css";
import Header from "./components/header";
import Banner from "./components/banner";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState({ product: [], deal: [] });

  const PROJECT_ID = "lwzct5bl";
  const DATASET = "production";
  const QUERY = encodeURIComponent('*[_type in ["product", "deal"]]');

  const url = `https://${PROJECT_ID}.api.sanity.io/v2023-05-01/data/query/${DATASET}?query=${QUERY}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((result) => {
        const productData = result["result"].filter((isProduct: any) => {
          return isProduct["_type"] == "product";
        });

        const dealData = result["result"].filter((isDeal: any) => {
          return isDeal["_type"] == "deal";
        });

        setData({ product: productData, deal: dealData });
      });
  }, []);

  return (
    <div className="homepage-main">
      <Header />
      <div>
        {data["deal"][0] ? <Banner bannerInfo={data["deal"][0]} /> : "No Data in here"}
      </div>
      <div>
        {}
      </div>
    </div>
  );
}

export default App;
