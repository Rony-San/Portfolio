"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Projects,
  SkillData,
  Profile,
  ProfilePhone,
  NavLinks,
} from "@/constants";
import Image from "next/image";
import "swiper/css";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Link from "next/link";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import React, { useRef, useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import { Carousel } from "react-responsive-carousel";
import { useEffect } from "react";
import router, { useRouter } from "next/router";
import { usePathname } from "next/navigation";
// import ScrollButton from "@/components/ScrollButton";
export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  const proyectosRef = useRef<HTMLDivElement | null>(null);
  const technologiesRef = useRef<HTMLDivElement | null>(null);

  const [isRouting, setisRouting] = useState(false);
  const path = usePathname();
  const [prevPath, setPrevPath] = useState("/");

  const scrollingToDiv = (
    variableDiv: React.MutableRefObject<HTMLDivElement | null>
  ) => {
    variableDiv.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollingToDivPhone = (id: string) => {
    const variableDiv = document.getElementById(id);
    if (variableDiv) {
      variableDiv.scrollIntoView({ behavior: "smooth" });
    }
  };
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  useEffect(() => {
    if (prevPath !== path) {
      setisRouting(true);
    }
  }, [path, prevPath]);

  useEffect(() => {
    setIsLoading(false);
  }, []);
  useEffect(() => {
    const handleLoad = () => {
      setIsLoading(false);
    };

    window.addEventListener("load", handleLoad);

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return (
    <main
      className="w-screen h-screen overflow-y-auto relative"
      style={{
        background: "url(/main-bg.webp) no-repeat center center/cover",
      }}>
      {isLoading && (
        <div className="fixed top-0 left-0 w-full h-full bg-white opacity-75 flex justify-center items-center z-50">
          <p className="text-lg font-semibold text-gray-800">Cargando...</p>
        </div>
      )}
      {/* Inicio Celular */}
      <div
        id="homeSection"
        className=" grid grid-rows-2  items-center w-full h-full bg-cover bg-center  lg:hidden ">
        <div
          className="w-full flex justify-center items-center mt-5 mb-10  "
          data-aos="fade-up"
          data-aos-delay="500">
          <Image
            src={ProfilePhone.src}
            alt={""}
            width={ProfilePhone.width}
            height={ProfilePhone.height}
            className="rounded-full border-4 border-white shadow-xl border-double shadow-purple-500/50 mix-blend-lighten"
          />
        </div>
        <div
          className="   flexjustify-center items-start gap-5 z-[10]  lg:max-w-[750px]  sm:w-45 mb-52 mx-5"
          data-aos="fade-up">
          <h1 className="text-[30px] text-white font-semibold text-left">
            RONY SANTIAGO BAÑOL
          </h1>
          <h1 className=" text-[30px]  text-left text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
            Desarrollador Web
          </h1>
          <p className="text-gray-200 text-left mt-5 md:block text-[15px]">
            Ingeniero de sistemas con sólida formación en Desarrollo Full Stack
            y ciberseguridad. Especializado en la creación de aplicaciones web
            responsivas con implementación de APIs RESTful.
          </p>
        </div>
      </div>

      {/* Inicio Pc */}
      <div className="lg:flex items-center  justify-between  w-full h-full bg-cover bg-center hidden ">
        <div
          className="  w-2/4 items-center  ml-44   z-[10]  lg:max-w-[750px]    "
          data-aos="fade-up">
          <h1 className=" text-left text-[50px] text-white font-semibold">
            RONY SANTIAGO BAÑOL
          </h1>
          <h1 className=" mt-10 text-[50px] text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
            Desarrollador Web
          </h1>
          <p className="mt-5 text-gray-200 hidden md:block text-[20px] ">
            Ingeniero de sistemas con sólida formación en Desarrollo Full Stack
            y ciberseguridad. Especializado en la creación de aplicaciones web
            responsivas con implementación de APIs RESTful, priorizando la
            integridad y seguridad en todas las etapas de desarrollo.
          </p>

          <div className="flex-col md:flex-row hidden md:flex gap-5 ">
            <button
              onClick={() => scrollingToDiv(proyectosRef)}
              className="mt-10 rounded-[20px] group relative bg-violet-500 hover:bg-violet-400 px-5 py-3 text-lg text-white max-w-[200px] ">
              Mis Proyectos
            </button>
            <button
              onClick={() => scrollingToDiv(technologiesRef)}
              className="mt-10 rounded-[20px] group relative bg-transparent px-5 border border-white py-3 text-lg text-white max-w-[200px] hover:bg-violet-300 hover:text-black shadow-purple-500/50 ">
              Mis hábilidades
            </button>
          </div>
        </div>

        <div
          className="w-2/4 flex justify-center items-center   "
          data-aos="fade-up"
          data-aos-delay="500">
          <Image
            src={Profile.src}
            alt={Profile.name}
            width={Profile.width}
            height={Profile.height}
            className="rounded-full border-4 border-white mx-24 shadow-xl border-double shadow-purple-500/50 mix-blend-lighten"
          />
        </div>
      </div>
      {/* ACÁAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA VA LA MIRAD */}
      {/* aquiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii */}
      {/* Este es el swipper para PhOne */}
      <div
        ref={proyectosRef}
        id="proyectosRef"
        className="  flex flex-col items-center justify-center  w-full h-screen bg-cover bg-center "
        style={{ backgroundImage: "url(/mountains.jpg)" }}>
        <div className="flex flex-col items-center gap-4 w-full ">
          <h1 className=" text-white font-bold items-center mt-5 justify-center mb-5 text-[30px] lg:text-[50px] text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500   ">
            {" "}
            PROYECTOS
          </h1>
          <p className="text-gray-400 items-center justify-center text-[15px] lg:text-[25px] mx-10 mb-15">
            Estos son algunos de los proyectos que he realizado como
            desarrollador Frontend
          </p>
        </div>
        <div className="w-[80%]  lg:hidden  mb-20">
          <Swiper
            slidesPerView={1}
            autoplay={{
              delay: 0,
              disableOnInteraction: true,
              reverseDirection: false,
            }}
            speed={1500}
            pagination={{
              type: "progressbar",
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className=" mt-10 
            ">
            {Projects.map((project, index) => (
              <SwiperSlide key={index} className="  ">
                <ProjectCard
                  key={index}
                  title={project.title}
                  text={project.text}
                  image={project.src}
                  link={project.link}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Este es el Swiper para Pc */}
        <div className="w-[80%] hidden lg:flex ">
          <Swiper
            slidesPerView={2}
            // centeredSlidesBounds={true}
            // centeredSlides={true}
            autoplay={{
              delay: 0,
              disableOnInteraction: true,
              reverseDirection: false,
            }}
            speed={1500}
            pagination={{
              type: "progressbar",
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className=" mt-10 max-w-6xl
            ">
            {Projects.map((project, index) => (
              <SwiperSlide key={index} className="px-20 ">
                <ProjectCard
                  key={index}
                  title={project.title}
                  text={project.text}
                  image={project.src}
                  link={project.link}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      {/* Aqui está el swipper de las habildiades */}
      <div
        ref={technologiesRef}
        id="Technologies"
        className=" flex flex-col items-center justify-center h-full bg-cover bg-center ">
        <div className="flex flex-col  items-center gap-5 ">
          <h1 className="w-full text-center font-semibold items-center justify-center text-white text-[30px] lg:text-[50px] mb-5">
            CONOCIMIENTOS
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
              {" "}
              &{" "}
            </span>{" "}
            TECNOLOGIAS
          </h1>

          <p className="text-gray-400 items-center justify-center  text-[15px] lg:text-[25px] mx-10 ">
            Estas son algunas de las tecnologías y lenguajes de programación que
            domino.
          </p>
        </div>
        <Swiper
          spaceBetween={5}
          slidesPerView={6}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          speed={5000}
          modules={[Autoplay]}
          className="max-w-[80%] mt-20 
            ">
          {SkillData.map((skill, index) => (
            <SwiperSlide key={index} className="mx-1">
              <Image
                src={skill.Image}
                alt={skill.name}
                width={skill.width}
                height={skill.height}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <Swiper
          spaceBetween={5}
          slidesPerView={5}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            reverseDirection: true,
          }}
          speed={5000}
          modules={[Autoplay]}
          className="max-w-[80%] lg:mt-20 ">
          {SkillData.map((skill, index) => (
            <SwiperSlide key={index}>
              <Image
                src={skill.Image}
                alt={skill.name}
                width={skill.width}
                height={skill.height}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* Aqui el botonsito */}
      <div
        style={{ left: "25%" }}
        className="lg:hidden flex h-9 fixed bottom-0 z-[50] w-[50%] md:w-[50%] max-h-[250px] rounded-t-lg
        justify-between items-center border-x-2
        bg-black border-t-2
        border-white pr-10 pl-5 py-7">
        {NavLinks.map((nav) => (
          <button
            key={nav.name}
            onClick={() => scrollingToDivPhone(nav.link)}
            className=" pl-5 min-w-[20%]">
            <nav.icon className="w-[24px] h-[24px] text-white hover:text-purple-700" />
          </button>
        ))}
      </div>
    </main>
  );
}
