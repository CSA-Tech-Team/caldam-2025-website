import React from "react";
import Link from "next/link";
import footerData from "@/constants/footer.json";
import { BiCopyright } from "react-icons/bi";
import { FaCode } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

function Footer() {
  return (
    <div className="bg-black text-white p-8">
      <div className="relative flex max-lg:space-y-10 max-lg:flex-col justify-between mb-8">
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1958.0951362514777!2d77.00151924190861!3d11.024346534066895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8582f1435fa59%3A0x137d95bfd8909293!2sPSG%20College%20Of%20Technology!5e0!3m2!1sen!2sin!4v1710593008393!5m2!1sen!2sin"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen=""
            className="h-full w-full"
          ></iframe>
        </div>
        <div className="lg:text-right">
          <div className="text-lg mb-8">
            <h1 className="text-2xl font-bold">CONTACT</h1>
            <p>{footerData["contactEmail"]}</p>
            <p>{footerData["contactMobile"]}</p>
          </div>
          <div className="text-lg">
            <h1 className="text-2xl font-bold">IMPORTANT LINKS</h1>
            {footerData["importantLinks"].map((link, index) => (
              <div key={index}>
                <Link href={link.URL}>{link.title}</Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="text-center">
        <div className="bg-orange h-1 mb-4"></div>
        <div className="space-y-2">
          <p>
            Copyright <BiCopyright className="inline" /> 2024 - 2025, PSG
            College of Technology
          </p>
          <p>
            <FaCode className="inline" /> with{" "}
            <FaHeart className="text-red-600 inline" /> CSA Tech Team
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
