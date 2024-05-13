"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface Props {
  image: string;
  title: string;
  text: string;
  link: string;
}

const ProjectCard = ({ image, title, text, link }: Props) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  function handleFlip() {
    if (!isAnimating) {
      setIsFlipped(!isFlipped);
      setIsAnimating(true);
    }
  }
  return (
    <div>
      <div
        onClick={handleFlip}
        className="w-[300px] h-[250px] lg:w-[450px] lg:h-[280px] rounded-md cursor-pointer">
        <motion.div
          className="flip-card-inner w-full h-full"
          initial={false}
          animate={{ rotateY: isFlipped ? 180 : 360 }}
          transition={{ duration: 0.6, animationDirection: "normal" }}
          onAnimationComplete={() => setIsAnimating(false)}>
          <div
            style={{ backgroundImage: `url(${image})` }}
            className="w-full h-full group relative flip-card-front bg-cover bg-center text-white rounded-lg lg:p-4">
            <div className="absolute inset-0 w-full h-full rounded-md bg-black opacity-0 group-hover:opacity-40" />
            <div className="absolute inset-0 w-full h-full text-[20px] pb-10 hidden group-hover:flex items-center z-[20] justify-center">
              Más información &gt;
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${image})` }}
            className="w-full h-full group relative flip-card-back bg-cover bg-center text-white rounded-lg  lg:p-4">
            <div className="absolute inset-0 w-full h-full rounded-md bg-black opacity-80 z-[-1]" />
            <div className="flex flex-col gap-5 z-[30] mx-10">
              <h1 className="mt-5 text-whote lg:text-2xl font-semibold">
                {title}
              </h1>
              <p className="text-gray-200 text-[12px] lg:text-[15px]">{text}</p>
            </div>
            <div className="absolute bottom-0 left-0 mb-5 ml-5"></div>
          </div>
        </motion.div>
      </div>
      <Link
        href={link}
        className="flex  justify-center w-[300px]  lg:w-[450px] lg:h-[80px] rounded-full">
        <button className="  mt-5 h-[50px] justify-center lg:mt-5 relative inline-flex items-center  p-0.5  me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-xl group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
          <span className=" px-5 py-3 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Ver página
          </span>
        </button>
      </Link>
    </div>
  );
};

export default ProjectCard;
