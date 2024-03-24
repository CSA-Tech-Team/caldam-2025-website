import React from "react";
import Link from "next/link";
function Footer() {
  return (
    <div className="p-6 z-50 relative bg-black text-white ">
      <div className=" flex max-lg:flex-col justify-between ">
        <div className=" flex flex-col space-y-5  ">
          <h1 className=" lg:text-4xl  font-bold max-lg:text-2xl ">Location</h1>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1958.0951362514777!2d77.00151924190861!3d11.024346534066895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8582f1435fa59%3A0x137d95bfd8909293!2sPSG%20College%20Of%20Technology!5e0!3m2!1sen!2sin!4v1710593008393!5m2!1sen!2sin"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen=""
            className=" lg:w-[500px] rounded-md lg:h-[200px] max-lg:h-full max-lg:w-full  "
          ></iframe>
        </div>
        <div className=" flex space-x-4  py-4 lg:flex-col text-lg justify-between">
          <div className=" flex flex-col items-center ">
            <h1 className=" font-bold lg:text-3xl max-lg:text-xl ">CONTACT</h1>
            <p>email@psgtech.ac.in</p>
            <p>XX - XXXXXXXXXX</p>
          </div>
          <div className=" flex flex-col items-center  ">
            <h1 className=" lg:text-3xl max-lg:text-xl font-bold ">
              IMPORTANT LINKS
            </h1>
            <Link className=" hover:underline " prefetch href={"/"}>
              Call for Papers
            </Link>
            <Link className=" hover:underline " prefetch href={"/"}>
              Accepted Papers
            </Link>
            <Link className=" hover:underline " prefetch href={"/"}>
              Pre-Conference School
            </Link>
          </div>
        </div>
      </div>
      <div className=" flex flex-col justify-center items-center">
        <h1 className="font-semibold text-2xl">copyright</h1>
        <div className="border-b-2 border-yellow-400 w-32 h-8"></div>
        <span>{"</> "} by CSA TECH TEAM</span>
      </div>
    </div>
  );
}

export default Footer;
