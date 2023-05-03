import { useEffect, useState } from "react";
import "./App.css";
import { db } from "./firebase-config";
import { collection, getDocs } from "firebase/firestore";

const productionRef = await getDocs(collection(db, "products"));

function App() {
  const [productData, setProductData] = useState([])
  useEffect(() => {
    const dataArr = []
    productionRef.forEach((doc) => {
      dataArr.push(doc.data());
    });
    setProductData(dataArr)
  }, [])

  console.log(productData)
  
  return (
    <div>
      <h1>Hello There</h1>
    </div>
  );
}

export default App;
