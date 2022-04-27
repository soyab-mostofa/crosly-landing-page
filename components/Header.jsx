import Image from "next/image";
import React from "react";
import Logo from "../public/assets/crosly-logo.svg";
const items = ["Story", "Products", "News", "Retailers"];

const Header = () => {
  return (
    <div className="container mx-auto flex justify-between items-center px-4">
      <Image
        src={Logo}
        height={Logo.height}
        width={Logo.width / 2}
        alt="logo"
      />

      <div className="flex gap-2">
        {items.map((item, i) => (
          <p key={i} className="text-lg">
            {item}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Header;
