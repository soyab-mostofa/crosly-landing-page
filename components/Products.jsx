import Image from "next/image";
import React from "react";
import Smile from "../public/assets/Untitled-2.png";

const Products = () => {
  return (
    <div
      className="container mx-auto max-w-6xl px-4 py-12
    mt-[600px]"
    >
      <div className="relative">
        {/* absolute images */}
        <div className="absolute  h-96 w-80 -top-[600px] left-1/3 rotate-12">
          <Image
            objectFit="cover"
            src="https://images.unsplash.com/photo-1535992165812-68d1861aa71e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=780&q=80"
            layout="fill"
            alt="logo"
          />
        </div>
        <div className="absolute h-96 w-80 -top-[500px] left-2/3 -translate-x-[250px]">
          <Image
            objectFit="cover"
            src="https://images.unsplash.com/photo-1525362081669-2b476bb628c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            layout="fill"
            alt="logo"
          />
        </div>
        <div className="absolute  h-24 w-24 -top-[200px] -rotate-12 md:left-2/4 left-80 -translate-x-[250px]">
          <Image objectFit="cover" src={Smile} layout="fill" alt="logo" />
        </div>
        ;{/* absolute images */}
        <h2 className="text-5xl px-4">PRODUCTS</h2>
      </div>
      {/* images start */}
      <div className="grid sm:grid-cols-2">
        <div className="p-4 space-y-4">
          <div className="relative border-8 border-neutral-500 h-60 md:h-96 w-full">
            <Image
              objectFit="cover"
              src="https://images.unsplash.com/photo-1572327918315-173bc4545e39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              layout="fill"
              alt="logo"
            />
          </div>
          <p className="font-medium tracking-wider text-3xl">Turntables</p>
        </div>
        <div className="p-4 space-y-4">
          <div className="relative border-8 border-neutral-500 h-60 md:h-96 w-full">
            <Image
              objectFit="cover"
              src="https://images.unsplash.com/photo-1584541728894-dbcae08f94ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80"
              layout="fill"
              alt="logo"
            />
          </div>
          <p className="font-medium tracking-wider text-3xl">
            Radio and speakers
          </p>
        </div>
        <div className="p-4 space-y-4">
          <div className="relative border-8 border-neutral-500 h-60 md:h-96 w-full">
            <Image
              objectFit="cover"
              src="https://images.unsplash.com/photo-1630268698450-77abeaeecfd6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
              layout="fill"
              alt="logo"
            />
          </div>
          <p className="font-medium tracking-wider text-3xl">Vinal Records</p>
        </div>
        <div className="p-4 flex items-center justify-center">
          <p className="uppercase font-medium tracking-wider text-3xl">
            see more
          </p>
        </div>
      </div>
      {/* images ends */}
    </div>
  );
};

export default Products;
