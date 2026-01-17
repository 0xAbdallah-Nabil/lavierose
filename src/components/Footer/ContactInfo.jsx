import { MapPin, Phone } from "lucide-react";
function ContactInfo() {
  return (
    <div className="flex flex-col justify-start items-center ">
      <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
      <div className="space-y-3">
        <a
          href="tel:+61452195885"
          className="flex items-start gap-3 text-gray-400 hover:text-white transition group justify-center"
        >
          <Phone className="w-5 h-5 mt-0.5 group-hover:scale-110 transition" />
          <span>+61 452 195 885</span>
        </a>
        <a
          href="https://www.google.com/maps/place/LaVie+Rose+Weddings+%26+Events/@-33.8566875,150.8795879,17z/data=!3m1!4b1!4m6!3m5!1s0x6b1297792780f463:0x4961ff6a5123c234!8m2!3d-33.8566875!4d150.8795879!16s%2Fg%2F11lct9hwmr!18m1!1e1?entry=ttu&g_ep=EgoyMDI2MDExMy4wIKXMDSoKLDEwMDc5MjA3M0gBUAM%3D"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-start gap-3 text-gray-400 hover:text-white transition group justify-center"
        >
          <MapPin className="w-5 h-5 mt-0.5 group-hover:scale-110 transition" />
          <span>Wetherill Park, Sydney, NSW, Australia</span>
        </a>
      </div>
    </div>
  );
}

export default ContactInfo;
