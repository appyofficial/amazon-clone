import React from "react";
import "./styles/Home.css";
import { Product } from "../../components";
import products from "../../data/products_listening";
import { v4 as uuidv4 } from "uuid";
import { randomProducts } from "../../utils";

const newProducts = [
  {
    id: uuidv4(),
    title:
      "New Apple Watch Series 6 (GPS + Cellular, 40 mm) blue aluminum case, dark navy sport band",
    price: 5400,
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/71u17E1%2B8IL._AC_SL1500_.jpg",
    rating: 4,
  },
  {
    id: uuidv4(),
    title: "PlayStation 4 Pro (1TB, black): Fortnite Neo Versa Bundle",
    price: 3400,
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/61vVcWwVABL._SL1001_.jpg",
    rating: 5,
  },
];

const examplepro = randomProducts(products, 2);

const TodaysDeals = [
  {
    id: uuidv4(),
    title: "Apple iPhone 11 Pro, 64GB",
    price: 12560,
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/81HSzsIkJdL._AC_SX679_.jpg",
    rating: 5,
  },
  {
    id: uuidv4(),
    title: "Dyon Smart TV black",
    price: 7050,
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/81z-ohJ4mZL._AC_SL1500_.jpg",
    rating: 3,
  },
  {
    id: uuidv4(),
    title: "Xbox Live - 100 EUR Guthaben [Xbox Live Online Code]",
    price: 120,
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/61-Dp0e%2B5WL._SL1465_.jpg",
    rating: 5,
  },
];

const featured = [
  {
    id: uuidv4(),
    title:
      "Xiaomi Mi Electric Scooter Foldable E-Scooter Made of Aviation Aluminium with and without Road Approval (ABE) (App Connection, Max. Speed 20-25 km/h, up to 30-45 km Range, Maximum Load 100 kg)",
    price: 3500,
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/710klySRqRL._AC_SL1500_.jpg",
    rating: 5,
  },
];

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          alt="amazon banner"
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_2x._CB432458382_.jpg"
        />
      </div>

      <div className="home__row">
        {newProducts.map(({ title, id, price, imageUrl, rating }) => (
          <Product
            key={id}
            title={title}
            id={id}
            price={price}
            imageUrl={imageUrl}
            rating={rating}
          />
        ))}
      </div>
      <div className="home__row">
        {TodaysDeals.map(({ title, id, price, imageUrl, rating }) => (
          <Product
            key={id}
            title={title}
            id={id}
            price={price}
            imageUrl={imageUrl}
            rating={rating}
          />
        ))}
      </div>
      <div className="home__row">
        {featured.map(({ title, id, price, imageUrl, rating }) => (
          <Product
            key={id}
            title={title}
            id={id}
            price={price}
            imageUrl={imageUrl}
            rating={rating}
          />
        ))}
      </div>
      <div className="home__row">
        {examplepro.map((product) => (
          <Product
            title={product["Product Title"]}
            imageUrl={product["Image Urls"].split("|")[0]}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;

//screenbrush app for drwaing on the screen
