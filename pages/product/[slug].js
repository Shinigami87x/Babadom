import React, { useState } from 'react'
import Product from './../../components/Product';
import { client, urlFor } from '../../lib/client';
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai';

const ProductDetails = ({ product, products }) => {
  const { image, name, details, price } = product;
  const [index, setIndex] = useState(0);
  return (
    <div>
        <div>
            <div>
                <div>
                   <img src={urlFor(image && image[index])} className="" />
                </div>
                
                <div>
                    {image?.map((item, i) => (
                        <img 
                            src= {urlFor(item)}
                            className={i === index ? 'small-image selected-image' : 'small-image'}
                            onMouseEnter={() => setIndex(i)}
                        />
                    ))}
                </div>
                   
            </div>
            <div>
                <h1>{name}</h1>
                <div>
                    <div>
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiOutlineStar />
                    </div>
                    <p>
                        (20)
                    </p>
                </div>
                <h4>Details: </h4>
                <p>{details}</p>
                <p>${price}</p>
                <div>
                    <h3>Quantity:</h3>
                    <p>
                        <span onClick=""><AiOutlineMinus /></span>
                        <span onClick="">0</span>
                        <span onClick=""><AiOutlinePlus /></span>
                    </p>
                </div>
                <div>
                    <button type="button" onClick="">Add to Cart</button>
                    <button type="button" onClick="">Buy Now</button>
                </div>
            </div>
        </div>
        <div> 
            <h2>You may also like</h2>
            <div>
                <div>
                    {products.map((item) => (
                        <Product key={item._id}
                        product={item} />
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export const getStaticPaths = async () => {
    const query = `*[_type == "product"] {
        slug {
            current
        }
    }`;

    const products = await client.fetch(query);
    const paths = products.map((product) => ({
        params: {
            slug: product.slug.current
        }
    }));

    return {
        paths,
        fallback: 'blocking'
    }
}

export const getStaticProps = async ({ params: { slug }}) => {
    const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
    const productsQuery = '*[_type == "product"]';

    const product = await client.fetch(query);
    const products = await client.fetch(productsQuery);

    return {
      props: { products, product }
    }
  }

export default ProductDetails