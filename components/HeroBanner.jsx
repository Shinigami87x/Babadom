import React from 'react';
import Link from 'next/link';
import { urlFor } from '../lib/client';

const HeroBanner = ({ heroBanner }) => {
  return (
    <div>
        <div>
            <p>{ heroBanner.smallText }</p>
            <h3>{ heroBanner.midText }</h3>
            <h1>{ heroBanner.largeText1 }</h1>
            <img src={ urlFor(heroBanner.image) } alt="hemp-product" />

            <div>
                <Link href={`/product/${heroBanner.product}`}>
                    <button type="button">{ heroBanner.buttonText }</button>
                </Link>
                <div>
                    <h5>Description</h5>
                    <p>{ heroBanner.desc }</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeroBanner