import React from "react";
import Link from "next/link";
import Image from "next/image";
import stage from "../images/stage.jpg";

const about = () => {
  return (
    <div className="relative">
      <h2 className="m-auto text-center text-xl mt-12 bg-white rounded-full w-48 border-black border-4">
        About Hemp Fabric
      </h2>
      <Image
        src={stage}
        alt="stage-picture"
        className="block mx-auto mt-6 rounded-md drop-shadow-xl"
        height={353}
      />
      <div className="max-w-3xl m-auto ">
        <h3 className="text-3xl mt-4">
          Hemp fabric, which we can call all textiles, is made from the fibers
          of the hemp plant <br /> (Cannabis sativa).
        </h3>
        <div className="text-lg">
          <p className="mt-4">
            Scientists have identified hemp fabric prints in 30,000-year-old
            fossils. Even prehistoric people could use its thermoregulatory
            properties. Hemp is one of the first cultural, purposefully
            cultivated plants in the world. The ancient Chinese made hemp ropes.
            They relied on their strength and durability.
          </p>
          <p className="mt-4">
            Even at the beginning of the last century, technical hemp was
            commonly used in almost all areas of human activity - food,
            cosmetics, textile industry, construction, healthcare... until it
            was replaced by synthetics. Technical hemp fiber can replace almost
            any other textile fiber, so it is possible to make a variety of
            textiles from it: shoes, sweatshirts, jeans, socks, underwear,
            towels, bedding, and everyday products.
          </p>
          <p className="mt-4">
            Our ancestors cultivated this very important economic plant wherever
            it was possible to grow grain. In addition to the foothills and
            mountainous, colder areas, it can be found practically in the entire
            territory of Slovakia thanks to the ideal climatic conditions. By
            processing it, high-quality fibers were obtained, from which strong,
            coarse, but also finer canvases and threads were produced. Almost
            everything linen was made from these materials - dresses, bed
            sheets, kitchen towels, but also sacks, sheets for carrying hay and
            straw, called zayds in Zemplín. Hemp canvas is highly durable
            compared to other natural fabrics. It has up to 4 times longer
            service life. It does not contain proteins and therefore does not
            attract moths. Thanks to its properties, it was possible not only to
            leave, but also to use home-made solid sheets of hand-woven canvas
            from generation to generation.
          </p>
          <p className="mt-4">
            As a plant, sown hemp is naturally resistant to pests. Compared to
            cotton, it needs 50% less water and 95% less pesticides, fungicides,
            herbicides and insecticides to grow. Its cultivation itself is
            environmentally friendly.
          </p>
          <p className="mt-4">
            Absorbs odors and sweat. Hemp fiber absorbs 4 times more moisture
            than cotton. It is antibacterial and antifungal, also suitable for
            allergy sufferers. Hemp fiber textiles can absorb up to 95% of UV
            radiation.
          </p>
          <p className="mt-4">
            In addition to these advantages, the hemp linen and kitchen textiles
            produced at BABAdom are very usable at work and their quality
            increases over time, because the so-called felting of the fibers
            occurs. The more you use hemp fabric and wash it, the more supple
            and soft it will become. And the more your satisfaction will grow.
          </p>
          <p className="mt-4">
            The era of synthetic fibers is coming to an end. Sown hemp is coming
            back into the limelight. Not only for its healing properties.
          </p>
          <p className="mt-4">
            Our high-quality, hand-made bed linen, clothing accessories, kitchen
            textiles - tea towels, bread pans, gloves, but also washcloths - all
            of this represents an ecological and healthy alternative for the
            modern person.
          </p>
          <p className="mt-4">
            We produce in Slovakia, mainly from 100% hemp canvas without
            admixtures of flax or cotton. Because there is beauty in purer hemp.
            There is beauty in nature... try on...
          </p>

          <div className="m-auto text-center text-xl mt-8 w-48">
          <Link href="/" passHref>
              <button className="" type="button">
                <h2 className="bg-white rounded-full border-black border-4 py-1 px-3 -mr-2 text-lg">
                  Home Page
                </h2>
              </button>
            </Link>
        </div>
        </div>
      </div>
    </div>
  );
};

export default about;
