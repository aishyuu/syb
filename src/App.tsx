import "./App.css";
import Header from "./components/header";
import Banner from "./components/banner";
import { useEffect, useState } from "react";
import BestSellers from "./components/bestSellers";

function App() {
  const [data, setData] = useState({ product: [], deal: [], mostPopular: [] });

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

        const popularData = productData.filter((isPopular: any) => {
          return isPopular["is_popular"] == true;
        })

        const dealData = result["result"].filter((isDeal: any) => {
          return isDeal["_type"] == "deal";
        });

        setData({ product: productData, deal: dealData, mostPopular: popularData });
        console.log(data);
      });
  }, []);

  return (
    <div className="homepage-main">
      <Header />
      <div>
        {data["deal"][0] ? (
          <Banner bannerInfo={data["deal"][0]} />
        ) : (
          "No Data in here"
        )}
      </div>
      <div>
        <h1 className="most-popular-text">Most Popular</h1>
        {data["product"][0] ? (
          <BestSellers productData={data["mostPopular"]} />
        ) : (
          <h1>There is no Data here!</h1>
        )}
      </div>
    </div>
  );
}

export default App;
