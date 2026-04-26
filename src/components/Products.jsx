// import { BiLogIn } from "react-icons/bi";
import ProductCard from "./ProductCard";

const Products = ({ cards, carts, setCarts }) => {
  return (
    <>
      <div className="w-full  md:max-w-10/12 mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {cards.map((card) => (
          <ProductCard
            key={card.id}
            card={card}
            carts={carts}
            setCarts={setCarts}
          ></ProductCard>
        ))}
      </div>
    </>
  );
};

export default Products;
