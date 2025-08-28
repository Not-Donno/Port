import Image from "next/image";
import { SongProps } from "./songDetails";
import Link from "next/link";

const SongCard = ({ title,  image }: SongProps) => {
  return (
      <div
        className={`relative flex h-[138px] w-[195px] items-center justify-center overflow-hidden rounded-xl py-0 sm:h-[140px] sm:w-[200px] md:h-[160px] md:w-[250px] lg:h-[190px] lg:w-[270px]`}
      >
        <Image
          src={image}
          alt={title}
          className="w-full items-stretch justify-center rounded-xl bg-cover bg-center"
        />
        <div className=" hidden h-[150%] w-full bg-gradient-to-t from-black to-transparent"></div>

        <div className="absolute bottom-3 left-5 hidden">
          <h4 className="text-[30px] text-white">{title}</h4>
        </div>
      </div>
  );
};

export default SongCard;
