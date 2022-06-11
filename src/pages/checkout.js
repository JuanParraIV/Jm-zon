import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";
import CheckoutProduct from "../components/CheckoutProduct";
import Header from "../components/Header";
import { selectItems } from "../slices/basketSlice";

const Checkout = () => {
  const items = useSelector(selectItems);
  console.log(items);
  return (
    <div className="bg-gray-100">
      <Header />

      <main className="lg: flex max-w-screen-2xl mx-auto ">
        {/* Left */}

        <div className="flex-grow m-5 shadow-sm">
          <Image
            src="https://links.papareact.com/ikj"
            width={1020}
            height={250}
            objectFit="contain"
          />
          <div className="flex flex-col p-5 space-y-10 bg-white">
            <h1 className="text-3xl border-b pb-4 ">
              {items.length === 0
                ? "Your Amazon basket is empty"
                : "Your Shopping basket"}
            </h1>

            {items &&
              items?.map(
                (
                  {
                    category,
                    description,
                    id,
                    image,
                    price,
                    rating,
                    title,
                    hasPrime,
                  },
                  index
                ) => (
                  <CheckoutProduct
                    key={index}
                    id={id}
                    title={title}
                    price={price}
                    rating={rating}
                    description={description}
                    image={image}
                    hasPrime={hasPrime}
                    category={category}
                  />
                )
              )}
          </div>
        </div>

        {/* Right */}
      </main>
    </div>
  );
};

export default Checkout;
