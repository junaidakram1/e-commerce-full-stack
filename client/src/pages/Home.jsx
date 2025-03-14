import React from "react";
import Navbar from "../components/Navbar";
import Categories from "../components/Categories";
import Announcements from "../components/Announcements";
import Slider from "../components/Slider";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import ProductList from "./ProductList";
import Product from "./Product";
import Login from "./Login";
import Register from "./Register";
import Cart from "./Cart";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Announcements />
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
      <Footer />
      {/* <ProductList /> */}
      {/* <Product /> */}
      {/* <Login /> */}
      {/* <Register /> */}
      {/* <Cart /> */}
    </div>
  );
};

export default Home;
