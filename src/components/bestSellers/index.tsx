import Card from "../card";
import "./index.css";
import { useState, useEffect } from "react";

export default function BestSellers(props) {
  const [mostPopular, setMostPopular] = useState([]);

  useEffect(() => {
    setMostPopular(props.productData);
    console.log(mostPopular);
  }, [props]);

  return (
    <div className="most-popular-container">
      {mostPopular[0] == undefined ? (
        <h1>Loading</h1>
      ) : (
        mostPopular.map((item) => {
          return (
            <Card item={item}/>
          );
        })
      )}
    </div>
  );
}
