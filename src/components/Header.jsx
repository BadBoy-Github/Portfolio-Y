

const Header = () => {
  return (
    <>
      <div className=" text-white p-6 container mx-auto">
        <div className="flex items-center justify-between mt-5">
          <div className="font-medium text-3xl">
            <a
              href="/"
              className="text-sky-600 py-1 transition-colors duration-200"
            >
              Yakshana T.
            </a>
          </div>
          <div className="text-xl" id="navbar">
            <ul className="flex space-x-12">
              <li>
                <a
                  href="/"
                  className="py-1 text-md font-medium text-sky-600 transition-colors duration-200"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="py-1 text-md font-medium hover:text-sky-600 transition-colors duration-200"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="py-1 text-md font-medium hover:text-sky-600 transition-colors duration-200"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="py-1 text-md font-medium hover:text-sky-600 transition-colors duration-200"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header