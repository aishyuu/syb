import "./index.css";
import imageURLBuilder from "@sanity/image-url";

export default function Banner(props: any) {
  console.log(props);
  return (
    <div className="banner-main">
      {props.bannerData.map((banner: any) => {
        const linkEnd = banner["name"]["asset"]["_ref"].slice(
          6,
          banner["name"]["asset"]["_ref"].length - 4
        );
        return (
          <img
            src={`https://cdn.sanity.io/images/lwzct5bl/production/${linkEnd}.jpg`}
            alt=""
            className="banner-img"
          />
        );
      })}
    </div>
  );
}

// https://cdn.sanity.io/images/lwzct5bl/production/771eb7f772019fc0e4623a3963f25b0729114603-760x300.jpg
