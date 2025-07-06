

import { HeartPlus } from "lucide-react";

const LandingPage = () => {
  return (
    <>
      <div className="text-white p-6 container mx-auto mt-20">
        <div className="flex items-center justify-center flex-col space-y-12">
          <div className=" relative">
            <div className="flex">
              <img
                src="/public/hero.jpg"
                alt="Hero image"
                className="w-32 h-32 rounded-full"
              />
            </div>
            <span className="absolute -bottom-4 left-1/2 text-sm transform -translate-x-1/2 whitespace-nowrap text-[#1d1d1d] bg-white px-3 py-2 rounded-2xl shadow-lg flex items-center">
              <HeartPlus className="mr-2 size-6 text-[#1d1d1d] rounded-full" />
              <p className="text-base font-semibold">Medical Coder</p>
            </span>
          </div>
          <div className="bg-red-600">Heading</div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
