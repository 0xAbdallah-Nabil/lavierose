import "./style.css";
import logo from "../../assets/imgs/contactUs.jpg";
import ContactForm from "./Form";
function Contact() {
  return (
    <>
      <main className="relative flex justify-center items-center h-[50vh] w-full overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <img
            className="absolute inset-0 w-full h-full object-cover"
            rel="preload"
            src={logo}
            alt="La Vie Rose Logo"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <h1 className=" text-center w-full px-4 text-base sm:text-2xl md:text-3xl font-bold text-white z-10">
          Contact Us
        </h1>
      </main>
      <ContactForm />
    </>
  );
}

export default Contact;
