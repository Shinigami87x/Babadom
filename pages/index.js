import React from 'react'
import { Product, FooterBanner, HeroBanner } from '../components';
import { client } from '../lib/client';

const Home = ({ products, bannerData }) => {
  return (
    <div>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />

      <div className="text-center my-8">
        <h2 className="bg-white w-72 m-auto text-2xl border-black border-2 rounded-full ">Best Selling Products</h2>
        <p className="text-base mt-2">Hemp cloths of many variations</p>
      </div>

      <div className="max-w-4xl m-auto flex flex-row space-x-4 mb-8">
        {products?.map((product) => <Product key={product._id} product={product} /> )}
      </div>

      <FooterBanner footerBanner={bannerData && bannerData[0]} />
    </div>
  )
};

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData }
  }
}

export default Home