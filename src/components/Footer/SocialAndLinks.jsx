import { Facebook, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
function SocialAndLinks() {
  return (
    <div className=" text-center">
      <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
      <div className="flex gap-4 mb-6 justify-center ">
        <a
          href="https://www.facebook.com/profile.php?id=61551690547462&mibextid=wwXIfr&rdid=eYjSWvhjBLUsw7i5&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1BZAKeRd1U%2F%3Fmibextid%3DwwXIfr#"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition group"
          aria-label="Facebook"
        >
          <Facebook className="w-5 h-5 group-hover:scale-110 transition" />
        </a>
        <a
          href="https://www.instagram.com/lavie_rose_weddingsandevents/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition group"
          aria-label="Instagram"
        >
          <Instagram className="w-5 h-5 group-hover:scale-110 transition" />
        </a>
      </div>
      <div className="space-y-2">
        <Link
          to="/privacy-policy"
          className="block text-gray-400 hover:text-white transition text-sm"
        >
          Privacy Policy
        </Link>
        <Link
          to="/terms-and-conditions"
          className="block text-gray-400 hover:text-white transition text-sm"
        >
          Terms & Conditions
        </Link>
      </div>
    </div>
  );
}

export default SocialAndLinks;
