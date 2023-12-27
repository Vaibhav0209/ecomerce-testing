import React from "react";
import FETCHAPI from "../../serivces/api";
import "boxicons";
import { Link } from "react-router-dom";

const Item = ({ data, addToCart }) => {
  const { id, image, title, price } = data || {};
  return (
    <div className="group mt-12 p-4 w-72 md:w-80 bg-white h-80 max-h-96 rounded-xl flex flex-col justify-center items-center transition-transform duration-[300] hover:-translate-y-1  shadow-lg">
      <img
        src={image}
        className="h-36 mb-3 group-hover:h-40 duration-300"
        alt="product Image"
      />
      <Link to={`/product/${id}`}>
        <h3 className="text-gray-500 hover:text-blue-500 hover:underline">
          {title || "Shirt"}{" "}
        </h3>
      </Link>
      <div className=" flex justify-around items-center space-x-3 w-full  mt-4 ">
        <p className="text-blue-500 text-xl">${" " + price || "12"}</p>
        <span
          onClick={() => addToCart(data)}
          className="cursor-pointer bg-[#0EA5E9] rounded-full shadow-lg flex justify-center items-center p-2"
        >
          <box-icon name="cart" color="white" size="sm"></box-icon>
        </span>
      </div>
    </div>
  );
};

export default Item;
