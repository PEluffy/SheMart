import React from "react";
import Title from "./../components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from "./../components/NewsletterBox";

const Contact = () => {
  return (
    <div>
      {/* Title Section */}
      <div className="text-center text-2xl pt-10 border-t">
        <Title text1={"CONTACT"} text2={"US"} />
      </div>

      {/* Contact Content Section */}
      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
        {/* Contact Image */}
        <img
          className="w-full md:max-w-[480px] h-auto"
          src={assets.contact_img}
          alt="Contact us image"
        />

        {/* Contact Information */}
        <div className="flex flex-col justify-center items-start gap-4 max-w-[350px] self-center">
          <p className="font-semibold text-xl text-gray-600">Our Store</p>
          <p className="text-gray-500">
            54709 Willms Station <br /> Suite 350, Washington, USA
          </p>
          <p>
            Tel: (415) 555-0132 <br /> Email: admin@forever.com
          </p>

          <p className="font-semibold text-xl text-gray-600">
            Careers at Forever
          </p>
          <p>
            54709 Willms Station <br />
            Suite 350, Washington, USA
          </p>
          <p className="text-gray-500">
            Learn more about our teams and job openings.
          </p>

          <button className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500 mt-6">
            Explore jobs
          </button>
        </div>
      </div>
      <NewsletterBox />
    </div>
  );
};

export default Contact;
