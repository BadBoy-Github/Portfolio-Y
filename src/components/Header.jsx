

const Header = () => {
  return (
    <>
      <div className=" text-white p-6 container mx-auto">
        <div className="flex items-center justify-between">
          <div className="font-extrabold text-3xl">
            <a
              href="/"
              className="text-violet-600 py-1 transition-colors duration-200"
            >
              Yakshana T.
            </a>
          </div>
          <div className="" id="navbar">
            <ul className="flex space-x-6">
              <li>
                <a
                  href="/"
                  className="py-1 text-md font-semibold text-violet-600 transition-colors duration-200"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="py-1 text-md font-semibold hover:text-violet-600 transition-colors duration-200"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="py-1 text-md font-semibold hover:text-violet-600 transition-colors duration-200"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="py-1 text-md font-semibold hover:text-violet-600 transition-colors duration-200"
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