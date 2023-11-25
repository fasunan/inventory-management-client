import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
            <div className="flex gap-5">
                <img className="w-24 rounded-md" src="https://i.ibb.co/cvPNXkT/Logo.jpg" alt="" />
                <a className="btn btn-ghost normal-case text-xl">Fashion Store</a>
            </div>
            <nav className="grid grid-flow-col gap-4 text-xl font-semibold">
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
            </nav>
            <nav>
                <div className="grid grid-flow-col gap-4 text-3xl">

                    <a href=""> <FaFacebook className="text-blue-600"></FaFacebook></a>
                    <a href=""> <FaInstagram className="text-orange-700"></FaInstagram></a>
                    <a href=""><FaYoutube className="text-red-600"></FaYoutube></a>
                    <a href=""><FaTwitter className="text-blue-500"></FaTwitter></a>
                </div>
            </nav>
            <aside>
                <p>Copyright © 2023 - All right reserved by Fashion Store LTD</p>
            </aside>
        </footer>
    );
};

export default Footer;