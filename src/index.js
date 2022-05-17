import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; //External CSS
import Appbar from "./components/Appbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Cards from "./components/Cards";
const root = ReactDOM.createRoot(document.getElementById("root"));
// Rules🔥: const ✅ let ✅ var ❌ || for.Each, for range, for (v of ) ❌
// map filter✅

const Time = () => {
  const time = new Date().toLocaleTimeString();
  return <h1 className="time">Time: {time} </h1>;
};

const value = true;

const names = "Vinay";

const arr1 = ["Vasanthi", "Triveni", "Durgadevi", "Manoj"];

// Hooks use karenge ||
root.render(
  <>
    <Appbar />

    <h1>Top NetFlix Movies for Free🔥</h1>

    <ul className="cards">
      <Cards
        name="Amazing Spider man"
        link="https://cdn.shopify.com/s/files/1/0747/3829/products/mHP0317_1024x1024.jpeg?v=1571444288"
      />
      <Cards name="Fast and furious" />
      <Cards name="Avatar" />
      <Cards name="Priraes of the caribbean" />
      <Cards name="The Shawshank Redemption" />
      <Cards name="RRR" />
    </ul>
  </>
);
