import Image from "next/image";
import React from "react";
import { StarIcon } from "@heroicons/react/solid";
import CurrencyFormat from "react-currency-format";
import { addToBasket, removeFromBasket } from "../slices/basketSlice";
import { useDispatch } from "react-redux";

const CheckoutProduct = ({
  category,
  description,
  id,
  image,
  price,
  rating,
  title,
  hasPrime,
}) => {
  const dispatch = useDispatch();
  const addItemToBasket = () => {
    const product = {
      category,
      description,
      id,
      image,
      price,
      rating,
      title,
      hasPrime,
    };
    dispatch(addToBasket(product));
  };

  const removeItemFromBasket=()=>{
    
    dispatch(removeFromBasket({id}));
  }
  const rate = rating.rate;
  return (
    <div className="grid grid-cols-5">
      <Image src={image} width={200} height={200} objectFit="contain" />

      {/* Middle */}
      <div className="col-span-3 mx-5">
        <p>{title}</p>
        <div className="flex">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon key={i} className="h-5 text-yellow-400" />
            ))}
        </div>
        <p className="text-xs my-2 line-clamp-3">{description}</p>
        <CurrencyFormat
          value={price}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"$"}
        />

        {hasPrime && (
          <div className="flex items-center space-x-2">
            <img
              loading="lazy"
              className="w-12"
              src="https://links.papareact.com/fdw"
              alt=""
            />
            <p className="text-xs text-gray-500 ">Free Next-day Delivery</p>
          </div>
        )}
      </div>
      {/* Right Add /Remove Buttons */}
      <div className="flex flex-col space-y-2 my-auto justify-self-end">
        <button onClick={addItemToBasket} className="button">
          Add to basket
        </button>
        <button onClick={removeItemFromBasket} className="button">
          Remove from Basket
        </button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
