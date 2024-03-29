import { useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";
import CurrencyFormat from "react-currency-format";
import { useSelector } from "react-redux";
import CheckoutProduct from "../components/CheckoutProduct";
import Header from "../components/Header";
import { selectItems, selectTotal } from "../slices/basketSlice";

const Checkout = () => {
  const items = useSelector(selectItems);
  const total = useSelector(selectTotal);
  const { data: session } = useSession();
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
        <div className="flex flex-col bg-white p-10 shadow-md ">
          {items.length > 0 && (
            <>
              <h2 className="whitespace-nowrap">
                Subtotal ({items.length} items) :  
                <span className="font-bold">
                  {
                    <CurrencyFormat
                      value={total}
                      displayType={"text"}
                      prefix={"$"}
                    />
                  }
                </span>
              </h2>

              <button
                disabled={!session}
                className={`button mt-2 ${
                  !session &&
                  "from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed"
                }`}
              >
                {!session ? "Sing in to checkout" : "Proceed to checkout"}
              </button>
            </>
          )}
        </div>
      </main>
    </div>
  );
};

export default Checkout;
