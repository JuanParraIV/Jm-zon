import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image";
import React, { useState } from "react";
import CurrencyFormat from 'react-currency-format';

const Product = ({
  id,
  title,
  price,
  description,
  category,
  image,
  rating,
}) => {
    const [rate, setQuantity] = useState(rating.rate);
  const ratingStar = (rating) => {
    let star = rating.rate;
    let stars = [];
    for (let i = 0; i < Math.floor(star); i++) {
      stars.push(<StarIcon className="h-5 text-yellow-500 " />);
    }
    return stars;
  };

  const [hasPrime, setHasPrime] = useState(Math.random() < 0.5);
  return (
    <div className='relative flex flex-col m-5 bg-white z-30 p-10'>
      <p className='absolute top-2 right-2 text-xs italic text-gray-500'>{category}</p>
      <Image
        src={image}
        width={200}
        height={200}
        objectFit="contain"
        alt="Product"
        className=""
      />
      <h4 className='my-3 '>{title}</h4>
      <div className="flex">{ratingStar(rating)} <p className='text-xs text-gray-500'> {rate}</p></div>
      <p className='text-xs my-2 line-clamp-2'>{description}</p>

      <div className='mb-5'>
        <CurrencyFormat
            value={price}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
        />
      </div>
      {hasPrime &&(
          <div className='flex items-center space-x-2 -mt-5'>
              <img className='w-12' src="https://links.papareact.com/fdw" alt="" />
              <p className='text-xs text-gray-500'>FREE Next-day Delivery</p>
          </div>
      )}

        <button className='mt-auto button'> Add to the Basket</button>
    </div>
  );
};

export default Product;
