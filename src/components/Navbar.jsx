import { FaGithub, FaFacebook } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <nav className="w-full h-12 mb-10 flex items-center justify-between py-3">
        <div className="flex flex-shrink-0 items-center">
          PORTFOLIO
        </div>
        <div className="m-8 flex items-center justify-center gap-5 cursor-pointer z-0">
          {/* LinkedIn Icon (optional) */}
          {/* <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a> */}
          
          <a href="https://github.com/ZweThuta" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-2xl" /> {/* Increased icon size */}
          </a>
          
          <a href="https://www.facebook.com/share/15QmB6QSQj/" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-2xl" /> {/* Increased icon size */}
          </a>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
