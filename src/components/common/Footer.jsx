import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

// reusable footer (Adrite agency style)
// dark + clean + 4 column layout

function Footer() {
  return (
    <footer className="bg-dark text-white pt-20 pb-10">

      <div className="container-custom grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* logo + description */}
        <div>
          <h2 className="text-2xl font-heading font-bold mb-4">
            adrite
          </h2>

          <p className="text-gray-400 leading-7">
            We build scalable digital solutions for modern businesses with clean UI and strong architecture.
          </p>
        </div>

        {/* quick links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>

          <ul className="space-y-3 text-gray-400">
            <li>Home</li>
            <li>About</li>
            <li>Service</li>
            <li>Resources</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>

          <ul className="space-y-3 text-gray-400">
            <li>Karachi, Pakistan</li>
            <li>support@adrite.com</li>
            <li>+92 300 0000000</li>
          </ul>
        </div>

        {/* social + newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>

          <div className="flex gap-4 text-xl mb-6">
            <FaFacebookF />
            <FaInstagram />
            <FaLinkedinIn />
          </div>

          <input
            type="email"
            placeholder="Enter email"
            className="w-full p-3 rounded-full text-black outline-none"
          />
        </div>

      </div>

      {/* bottom bar */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-500 text-sm">
        © 2026 Adrite. All rights reserved.
      </div>

    </footer>
  );
}

export default Footer;