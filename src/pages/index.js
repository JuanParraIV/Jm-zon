import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";
import ProductFeed from "../components/ProductFeed";

export default function Home({ products }) {

  return (
    <div className="bg-gray-100">
      <Head>
        <title>Jm-zon</title>
      </Head>

      <Header />

      <main className="max-w-screen-2xl mx-auto">
        {/* BANNER */}
        <Banner />

        <ProductFeed products={products}/>
      </main>
    </div>
  );
}

export const getServerSideProps = async (context) => {
  const products = await fetch("https://fakestoreapi.com/products").then(
    (res) => res.json()
  );

  return {
    props: {
      products,
    }
  }
};
