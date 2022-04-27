import React from "react";
import { BsArrowRight } from "react-icons/bs";

const items = [
  "About Crosley",
  "Products",
  "Our team",
  "News",
  "Career",
  "Support",
  "Resellers",
  "FAQ",
  "Privacy Policy",
  "Contact",
];

const Footer = () => {
  return (
    <div className="bg-green-900 text-neutral-50 ">
      <div className="container mx-auto max-w-6xl px-4 py-12 md:flex md:justify-between ">
        <div className="basis-1/2">
          <p className="text-3xl ">Hear it first</p>
          <div className="flex items-center">
            <input
              type="text"
              className="bg-transparent border-b-2 border-neutral-50 px-1 py-4"
            />
            <button>
              <BsArrowRight className="text-3xl -ml-8" />
            </button>
          </div>
        </div>
        <div className="grid grid-cols-2 space-x-12 space-y-2 mt-8 first:space-x-0">
          {items.map((item, i) => (
            <p key={i}>{item}</p>
          ))}
        </div>
        <div className="space-y-2 mt-8">
          <p>Facebook</p>
          <p>Instagram</p>
          <p>Pinterest</p>
        </div>
      </div>
      <p className="text-center">2020 crosley radio &copy;</p>
    </div>
  );
};

export default Footer;
