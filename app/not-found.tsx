import React from "react";
import Link from "next/link";
import Image from "next/image";

const NotFound = () => {
  return (
    <div className="flex h-[100vh] flex-col items-center justify-center bg-gradient-to-r from-pink-100 via-purple-100 to-blue-100 text-[#0E1016] gap-5">
      <p className="text-[25px] sm:text-[30px] md:text-[35px] lg:text-[40px] uppercase">
        I think he lost it!
      </p>
      <Image
        src="/Panda.png"
        alt="Funny Meme"
        width={858}
        height={483}
        className="w-[40%] sm:w-[40%] md:w-[40%] lg:w-[40%]"
      />
      <div>
        <Link
          href="/"
          className="text-[25px] sm:text-[30px] md:text-[35px] lg:text-[40px] uppercase"
        >
          Head back to my{" "}
          <span className="underline underline-offset-2">Portfolio</span>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
