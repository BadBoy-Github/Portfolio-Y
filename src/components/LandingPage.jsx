const LandingPage = () => {
  return (
    <>
      <div className="text-white p-6 container mx-auto mt-20">
        <div className="flex items-center justify-center">
          <div className="bg-green-600 relative">
            <div className="flex">
              <img
                src="/public/hero.jpg"
                alt="Hero image"
                className="w-26 h-26 rounded-full"
              />
            </div>
            <span className="absolute -bottom-2 left-1/2 text-sm transform -translate-x-1/2 whitespace-nowrap text-[#1d1d1d] bg-white px-4 py-1 rounded-full shadow-lg">
              Medical Coder
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
