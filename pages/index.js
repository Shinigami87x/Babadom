import React from 'react'
import { Product, FooterBanner, HeroBanner } from '../components';
import { client } from '../lib/client';

const Home = ({ products, bannerData }) => {
  return (
    <div>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />

      <div className="m-auto max-w-6xl relative">
      <div className="bg-separator bg-no-repeat text-center my-8">
        <h2 className="bg-white relative top-4 w-72 m-auto text-2xl border-black border-2 rounded-full ">Best Selling Products</h2>
        <p className="text-base m-auto mt-8 max-w-5xl">Hemp cloths of many variations</p>
      </div>
      </div>

      <div className="max-w-5xl m-auto flex flex-row space-x-4 mb-8">
        {products?.map((product) => <Product className="" key={product._id} product={product} /> )}
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