import Nav from "../../components/NavBar/Nav";
import Products from "./Products";
import ShopBanner from "./ShopBanner";

const Shop = () => {
  return (
    <div className="w-full h-auto bg-white ">
      <Nav />
      <ShopBanner />
      <Products />
    </div>
  );
};
export default Shop;
