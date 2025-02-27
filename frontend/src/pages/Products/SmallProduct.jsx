import { Link } from "react-router-dom";
import HeartIcon from "./HeartIcon";

const SmallProduct = ({ product }) => {
  return (
    <div className="w-[18rem] ml-[2rem] p-1 bg-[#292c35] rounded-lg">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className=" rounded-lg h-[14rem] w-[18rem]"
        />
        <HeartIcon product={product} />
      </div>

      <div className="p-2 ">
        <Link to={`/product/${product._id}`}>
          <h2 className="flex justify-between items-center">
            <div>{product.name}</div>
            <span className="bg-pink-100 text-pink-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-pink-900 dark:text-pink-300">
              ${product.price}
            </span>
          </h2>
        </Link>
      </div>
    </div>
  );
};

export default SmallProduct;
