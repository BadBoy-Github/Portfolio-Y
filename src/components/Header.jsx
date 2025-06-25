

const Header = () => {
  return (
    <>
      <div className=" text-white p-6 container mx-auto border-b border-gray-700">
        <div className="flex items-center justify-between">
          <div className="font-extrabold text-3xl">Yakshana T.</div>
          <div className="" id="navbar">
            <ul className="flex space-x-6">
              <li>Home</li>
              <li>About</li>
              <li>Skills</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header