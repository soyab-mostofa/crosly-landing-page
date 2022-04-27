import Image from "next/image";
import React from "react";
import { BsArrowRight } from "react-icons/bs";

const HeroSection = () => {
  return (
    <div className="container mx-auto max-w-6xl px-4">
      {/* top */}
      <div className="flex flex-col sm:grid grid-cols-4 grid-rows-2 sm:h-[600px]">
        <div className="col-span-2 flex justify-between items-end p-4 bg-purple-600 text-neutral-50 h-72 sm:h-auto">
          <div className="flex w-full justify-between items-center">
            <p> Analog sound for digital generation</p>{" "}
            <BsArrowRight className="text-3xl" />
          </div>
        </div>
        <div className="col-span-1 bg-neutral-800 text-center p-4 h-40 sm:h-auto">
          <p className="text-neutral-50">Amplify your style</p>
        </div>
        <div className="relative col-span-1 flex items-end p-4 h-72 sm:h-auto">
          <div className="absolute top-0 left-0 h-full w-full  basis-1/2">
            <Image
              priority
              src="https://images.unsplash.com/photo-1494232410401-ad00d5433cfa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              layout="fill"
              objectFit="cover"
              alt="phonograph"
            />
          </div>
          <p className="z-10">
            We are working to bring new life to a classic medium
          </p>
        </div>
        <div className="col-span-4 flex relative h-96 sm:h-auto">
          <div className="relative h-full w-full basis-1/2 ">
            <Image
              src="https://images.unsplash.com/photo-1635719918981-489600a42ebd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80"
              layout="fill"
              objectFit="cover"
              alt="phonograph"
            />
          </div>
          <div className="basis-1/2 bg-green-900 p-4">
            <p className="text-neutral-50 text-right text-9xl ">*</p>
          </div>
          <p className="absolute bottom-0 left-0 text-neutral-50 text-7xl uppercase">
            Don&apos;t Blend In
          </p>
        </div>
      </div>

      {/* Bottom */}

      <div className="max-w-6xl mx-auto p-8 md:flex justify-between gap-4">
        <p className="max-w-xl">
          We get our moniker from Rowel Crosley. a pretty radical guy from the
          1920s who knew music was for the people and created a radio for
          everyone. In keeping with his tradition and entrepreneurial spirit, we
          decided the vinyl experience was also for everyone. Our first record
          player was released In 1992, when CDs were still king. Naturally,
          everyone thought we were nuts. But now, after over 30 years of
          bringing stylish music to the people, we're one of the biggest
          manufacturers and trendsetters of the new-millennium Vinyl Resurgence
        </p>
        <button className="flex gap-2 mt-4 items-center uppercase">
          Learn More <BsArrowRight className="text-3xl" />
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
