

import { HeartPlus } from "lucide-react";

const LandingPage = () => {
  return (
    <>
      <section id="home">
        <div className="text-white p-6 container mx-auto mt-20">
          <div className="flex items-center justify-center flex-col space-y-12">
            <div className=" relative group">
              <div className="flex">
                <img
                  src="/public/hero.jpg"
                  alt="Hero image"
                  className="w-32 h-32 rounded-full group-hover:scale-105 transition-all duration-300"
                />
              </div>
              <span className="absolute -bottom-4 left-1/2 text-sm transform -translate-x-1/2 whitespace-nowrap text-[#1d1d1d] bg-white px-3 py-2 rounded-2xl shadow-lg flex items-center cursor-pointer">
                <HeartPlus className="mr-2 size-6 text-[#1d1d1d] rounded-full" />
                <p className="text-base font-medium">Medical Coder</p>
              </span>
            </div>
            <div className="py-6 px-8 mx-4 md:mx-10">
              <h1 className="text-3xl md:text-4xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-sky-600 via-sky-800/80 to-gray-800/80 text-center leading-tight">
                <span className="block">Precision Coding</span>
                <span className="block">Healthcare Data Excellence</span>
              </h1>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingPage;
