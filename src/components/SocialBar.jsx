import React from "react";
import email from "../../public/assets/icons/mail-fill.png";
import phone from "../../public/assets/icons/phone-fill.png";
import facebook from "../../public/assets/icons/facebook-fill.png";
import instagram from "../../public/assets/icons/instagram-fill.png";
import twitter from "../../public/assets/icons/twitter-fill.png";
import youtube from "../../public/assets/icons/youtube-fill.png";

export const SocialBar = () => {
  return (
    <ul className="flex items-center text-white justify-between flex-col lg:flex-row  py-6">
      <div className="flex gap-6">
        <li className="flex items-center justify-center">
          <img src={email} alt="Appolly Email" />
          <span className="ml-2">Info@youremail.com</span>
        </li>
        <li className="flex items-center">
          <img src={phone} alt="Appolly Number" />
          <span className="ml-2">(480) 555-0103</span>
        </li>
      </div>
      <div className="flex items-center justify-between gap-6 mt-4 lg:mt-0">
        <SocialIcon title={"Facebook"} url={"#"} icon={facebook} />
        <SocialIcon title={"Instagram"} url={"#"} icon={instagram} />
        <SocialIcon title={"Twitter"} url={"#"} icon={twitter} />
        <SocialIcon title={"Youtube"} url={"#"} icon={youtube} />
      </div>
    </ul>
  );
};

const SocialIcon = ({ title, icon, url }) => {
  return (
    <a href={url}>
      <img src={icon} alt={title} />
    </a>
  );
};
