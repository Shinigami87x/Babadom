import React from 'react';
import Link from 'next/link';
import { urlFor } from '../lib/client';

const FooterBanner = ({ footerBanner: {discount, largeText1, largeText2, saleTime, smallText, midText, desc, product, buttonText, image } }) => {
  return (
    <div>
        FooterBanner
        <div>
            <div>
                <p>{discount}</p>
                <h3>{largeText1}</h3>
                <h3>{largeText2}</h3>
                <p>{saleTime}</p>
            </div>
            <div>
                <p>{smallText}</p>
                <h3>{midText}</h3>
                <p>{desc}</p>
                <Link href={`/product/${product}`} >
                    <button type="button">{buttonText}</button>
                </Link>
            </div>

            <img src={urlFor(image)} />
        </div>
    </div>
  )
}

export default FooterBanner