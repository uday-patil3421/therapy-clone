function Footer() {
  return (
    <footer className="text-gray-800 mt-12">
      <div className="max-w-6xl mx-auto py-8 px-4 grid md:grid-cols-3 gap-6">
        <div className="mx-auto">
          <h3 className="text-xl font-bold">Dr. Serena Blake, PsyD</h3>
          <p>1287 Maplewood Drive, Los Angeles, CA 90026</p>
          <p>Phone: (323) 555-0192</p>
          <p>Email: serena@blakepsychology.com</p>
        </div>

        <div className="mx-auto">
          <h4 className="font-semibold mb-2">Explore</h4>
          <ul className="space-y-1">
            <li>
              <a href="#about" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="#services" className="hover:underline">
                Services
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:underline">
                FAQ
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div className="mx-auto">
          <h4 className="font-semibold mb-2">Connect</h4>
          <div className="flex space-x-3">
            <a href="#">
              <span className="sr-only">Facebook</span>Facebook
            </a>
            <a href="#">
              <span className="sr-only">Instagram</span>Instagram
            </a>
            <a href="#">
              <span className="sr-only">Twitter</span>Twitter
            </a>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 py-4">
        <div className="max-w-6xl mx-auto text-center text-sm">
          © {new Date().getFullYear()} Dr. Serena Blake. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
export default Footer;
