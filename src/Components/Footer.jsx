import { BsFacebook, BsInstagram, BsTelegram, BsTwitter } from "react-icons/bs";
import React from 'react';

function Footer() {
    const currentDate = new Date();
    const year = currentDate.getFullYear();

    return (
        <>
            <footer className="relative left-0 bottom-0 h-[10vh] py-5 flex flex-col sm:flex-row items-center justify-between text-white bg-gray-800 sm:px-20 ">
                <section className="text-lg">
                    <span className="text-gray-300">Copyright {year} All rights are reserved by Krishna.</span>
                </section>
                <section className="flex items-center justify-center gap-5 text-2xl text-gray-300">
                    <a href="facebookIcon" className="hover:text-yellow-500 transition-all ease-in-out duration-300">
                        <BsFacebook />
                    </a>
                    <a href="instagramIcon" className="hover:text-yellow-500 transition-all ease-in-out duration-300">
                        <BsInstagram />
                    </a>
                    <a href="telegramIcon" className="hover:text-yellow-500 transition-all ease-in-out duration-300">
                        <BsTelegram />
                    </a>
                    <a href="twitterIcon" className="hover:text-yellow-500 transition-all ease-in-out duration-300">
                        <BsTwitter />
                    </a>
                </section>
            </footer>
        </>
    );
}

export default Footer;
