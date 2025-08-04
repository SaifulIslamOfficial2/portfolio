import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";

function MyFooter() {
  return (
    <footer className="bg-gray-900 text-white mt-8">
      <div className=" mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-3">Company</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-gray-400">About</a></li>
            <li><a href="#" className="hover:text-gray-400">Careers</a></li>
            <li><a href="#" className="hover:text-gray-400">Brand Center</a></li>
            <li><a href="#" className="hover:text-gray-400">Blog</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-3">Help Center</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-gray-400">Discord Server</a></li>
            <li><a href="#" className="hover:text-gray-400">Twitter</a></li>
            <li><a href="#" className="hover:text-gray-400">Facebook</a></li>
            <li><a href="#" className="hover:text-gray-400">Contact Us</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-3">Legal</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-gray-400">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-gray-400">Licensing</a></li>
            <li><a href="#" className="hover:text-gray-400">Terms & Conditions</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-3">Download</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-gray-400">iOS</a></li>
            <li><a href="#" className="hover:text-gray-400">Android</a></li>
            <li><a href="#" className="hover:text-gray-400">Windows</a></li>
            <li><a href="#" className="hover:text-gray-400">MacOS</a></li>
          </ul>
        </div>
      </div>
      <div className="bg-gray-800 px-6 py-6 flex flex-col sm:flex-row items-center justify-between">
        <p className="text-gray-400">&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 sm:mt-0">
          <a href="#" className="text-gray-400 hover:text-white"><BsFacebook size={24} /></a>
          <a href="#" className="text-gray-400 hover:text-white"><BsInstagram size={24} /></a>
          <a href="#" className="text-gray-400 hover:text-white"><BsTwitter size={24} /></a>
          <a href="#" className="text-gray-400 hover:text-white"><BsGithub size={24} /></a>
          <a href="#" className="text-gray-400 hover:text-white"><BsDribbble size={24} /></a>
        </div>
      </div>
    </footer>
  );
}

export default MyFooter;
