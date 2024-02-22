import { Link } from "react-router-dom";
import Appstore from '../assets/AppstoreLink.webp'
import PlayStore from '../assets/playStore.webp'
const Footer = () => {
    return (
        <div className="py-10" style={{ backgroundColor: "rgb(248, 248, 248)" }}>
            <div className="container flex flex-col md-flex-row justify-between">
                <div className="ms-9 grid grid-cols-1 sm:grid-cols-3 gap-5   md:grid-cols-4">
                    <ul>
                        <li className="font-normal tracking-wider   pb-2">ABOUT YUMHUB</li>
                        <li className=" text-gray-500 text-xs ">Who We Are</li>
                        <li className=" text-gray-500 text-xs">Security</li>
                        <Link to="/"  className="  text-gray-500 text-xs">Terms</Link>
                        <li className=" text-gray-500 text-xs">Sitemap</li>
                    </ul>
                    <ul>
                        <li className="font-normal tracking-widest  pb-2">FOR RESTAURANTS</li>
                        <li className=" text-gray-500 text-xs ">Who We Are</li>
                        <li className=" text-gray-500 text-xs">Security</li>
                    </ul>
                    <ul>
                        <li className="font-normal tracking-widest  pb-2">LEARN MORE</li>
                        <li className="  text-gray-500 text-xs ">Privacy</li>
                        <li className=" text-gray-500 text-xs">Security</li>
                        <li className=" text-gray-500 text-xs">Terms</li>
                        <li className=" text-gray-500 text-xs">Sitemap</li>
                    </ul>
                    <ul >
                        <li className="font-normal tracking-widest pb-2">SOCIAL</li>
                        <img src={Appstore} className="max-h-[2rem] object-cover" alt="app" />
                        <img src={PlayStore} className=" mt-2 max-h-[2rem] object-cover" alt="playstore" />
                       
                    </ul>
                </div>

                <div style={{width:'90%'}} className="ms-9 flex container mt-5 border-t border-gray-300 ">
                    <p className="mt-3 text-gray-500 text-xs">By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2008-2024 © YumHub™ Ltd. All rights reserved.</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
