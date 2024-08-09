import React from "react";
import m1Image from "../assets/PHY3.jpg"; // Import the image directly

function Header() {
  return (
    <header className="relative">
      <div className="grid place-items-center">
        <img
          id="m1"
          src={m1Image}
          alt="Physics"
          className="mix-blend-multiply h-[200px] w-[430px] mt-[15vh]"
        />
        <p
          id="content"
          className="font-[Comic Neue] text-[#1d1b1d] text-2xl font-bold text-center italic mt-4"
        >
          Drive links for study materials of courses of physics autumn semester
          2023
        </p>
      </div>
    </header>
  );
}

export default Header;
