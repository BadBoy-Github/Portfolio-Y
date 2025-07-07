

const Header = () => {
  return (
    <>
      <div className=" text-white p-6 container mx-auto">
        <div className="flex items-center justify-between mt-5">
          <div className="font-medium text-3xl">
            <a
              href="/"
              className="text-sky-600 py-1 hover:text-sky-500 transition-colors duration-200 font-bold"
            >
              Yakshana T.
            </a>
          </div>
          <div className="flex justify-center items-center gap-12">
            <div className="text-xl" id="navbar">
              <ul className="flex space-x-12">
                <li>
                  <a
                    href="/"
                    className="py-1 font-medium text-sky-600 hover:text-sky-500 transition-colors duration-200"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/about"
                    className="py-1 font-medium hover:text-sky-500 transition-colors duration-200"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="/skills"
                    className="py-1 font-medium hover:text-sky-500 transition-colors duration-200"
                  >
                    Skills
                  </a>
                </li>
                <li>
                  <a
                    href="/review"
                    className="py-1 font-medium hover:text-sky-500 transition-colors duration-200"
                  >
                    Review
                  </a>
                </li>
              </ul>
            </div>
            <div className="text-xl font-medium outline outline-white px-4 py-1 rounded-xl hover:bg-sky-500 hover:outline-sky-500 hover:text-[#1d1d1d] transition-colors duration-200 cursor-pointer">
              <a href="/contact" className="">
                Contact me
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header