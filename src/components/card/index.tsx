import "./index.css";
import { Link } from "react-router-dom";

export default function Card(props) {
  return (
    <Link
      to={`/product/${props["item"]["slug"]["current"]}`}
      className="card-wrapper">
      <div className=" card-container">
        <img
          src={props["item"]["images"][0]}
          alt={props["item"]["name"]}
          className="card-image"
        />
        <div className="card-information">
          <h5>{props["item"]["name"]}</h5>
          <p>{props["item"]["short_description"]}</p>
        </div>
        <div className="card-pricing">
            {props["item"]["on_sale"] == true ? <p></p> : <h3 className="price-normal">{`$${props["item"]["price"]}.00`}</h3>}
        </div>
      </div>
    </Link>
  );
}
