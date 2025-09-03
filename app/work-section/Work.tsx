"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    title: "Hackthon Environment Awareness",
    description: "A 3D website made with three.js and React for interhouse hackathon.",
    image: "/bg.png",
    github: "https://github.com/Not-Donno/Hackthon",
    demo: "https://hackthon-kappa-five.vercel.app/",
  },
  {
    title: "Pixel Version of IRL map",
    description: "A project created in python that creates pixel version of google map location.",
    image: "/bg.png",
    github: "https://github.com/Not-Donno/Hackthon",
    demo: "#",
  },
  {
    title: "Python Vision",
    description: "Simple python project that detects hands and can be used as base for ai projects.",
    image: "/bg.png",
    github: "https://github.com/Not-Donno/PythonVision",
    demo: "#",
  },
];

const Work = () => {
  return (
    <section>
    <div className="w-full bg-[#0E1016] text-[#e4ded7] py-16">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-10"
      >
        My Work
      </motion.h2>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="bg-[#1A1D25] rounded-2xl shadow-lg overflow-hidden relative cursor-pointer"
          >
            {/* Image */}
            <div className="relative h-52 w-full">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col justify-between h-48">
              <div>
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-sm text-gray-400 mt-2">
                  {project.description}
                </p>
              </div>

              {/* Icon Buttons */}
              <div className="flex gap-4 mt-4">
                <Link
                  href={project.github}
                  target="_blank"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-[#e4ded7] text-[#0E1016] hover:bg-gray-300 transition"
                >
                </Link>
                {project.demo !== "#" && (
                  <Link
                    href={project.demo}
                    target="_blank"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-[#3A86FF] text-white hover:bg-[#2563eb] transition"
                  >
                  </Link>
                )}
              </div>
            </div>
          </motion.div>
        ))}

        {/* Full-width See More on GitHub Card */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="bg-gradient-to-r from-[#1A1D25] to-[#2B2F3A] rounded-2xl shadow-lg flex items-center justify-center cursor-pointer col-span-full h-40"
        >
          <Link
            href="https://github.com/Not-Donno"
            target="_blank"
            className="flex flex-col items-center text-center p-6"
          >
            <h3 className="text-xl font-semibold">See More on GitHub</h3>
          </Link>
        </motion.div>
      </div>
    </div>
    </section>
  );
};

export default Work;
