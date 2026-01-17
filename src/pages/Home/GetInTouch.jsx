import logo from "../../assets/imgs/GetInTouch.jpg";
import { Link } from "react-router-dom";
function GetInTouch() {
  return (
    <section className="relative flex justify-center items-center h-[50vh] w-full overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <img
          className="absolute inset-0 w-full h-full object-cover"
          src={logo}
          rel="preload"
          alt="La Vie Rose Logo"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className="relative flex flex-col justify-evenly items-center h-full w-full">
        <h1 className="normal text-center w-full px-4 text-base sm:text-2xl md:text-5xl font-bold text-white z-10">
          Get In Touch
        </h1>
        <Link to="/contact">
          <button className=" bottom-10 px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-500  hover:text-white transition z-10">
            Contact Us
          </button>
        </Link>
      </div>
    </section>
  );
}

export default GetInTouch;
