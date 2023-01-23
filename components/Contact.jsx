import React from "react";
import Link from "next/link";

const about = () => {
  return (
    <div>
      <h2 className="m-auto text-center text-xl mt-12 bg-white rounded-full w-48 border-black border-4">
        Contact
      </h2>
      <div className="flex flex-column">
        <div className="max-w-3xl m-auto ">
          <h3 className="text-xl mt-4 text-center">
            Personal Collection
          </h3>
          <p className="text-center">
            BABAdom - Mgr. Zuzana Pančušková <br/>
            Harangovská 340/75 <br/>
            Sečovská Polianka <br/>
            094 14 <br/>
            Slovensko <br/>
          </p>
          <h3 className="text-xl mt-4 text-center">
            Email
          </h3>
          <p className="text-center">
          babadom@babadom.sk
          </p>
          <h3 className="text-xl mt-4 text-center">
            Phone Number
          </h3>
          <p className="text-center">
          00421 948 757 003 / 00421 918 823 622
          </p>

          
        </div>
      </div>
      <div className="m-auto text-center text-xl mt-8 w-48">
        <Link href="/" passHref>
          <button className="" type="button">
            <h2 className=" bg-white rounded-full border-black border-4 py-1 px-3 -mr-2 text-lg">
              Home Page
            </h2>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default about;
