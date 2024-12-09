import React from "react";
import { Navigation } from "../components/Navigation";
import { SocialBar } from "../components/SocialBar";
import { Wrapper } from "../shared/Wrapper";
import { HeroSection } from "../components/HeroSection";
import { CheckoutInterface } from "../components/CheckoutInterface";

export const Homepage = () => {
  return (
    <React.Fragment>
      <div className="min-h-screen bg-[url('./assets/images/bg-image.png')] bg-no-repeat bg-cover">
        <Wrapper className="">
          <SocialBar />
          <Navigation />
          <HeroSection />
        </Wrapper>
      </div>
      <Wrapper>
        {" "}
        {/* <Slider {...settings}>
          <div>
            <img src={mock1} alt="" />
          </div>
          <div>
            <img src={mock2} alt="" />
          </div>
          <div>lider {...settings}>
          <div>
            <img src={mock1} alt="" />
          </div>
          <div>
            <img src={mock2} alt="" />
          </div>
          <div>
            <img src={mock3} alt="" />
          </div>home
          <div>
            <img src={mock4} alt="" />
          </div>
          <div>
            <img src={mock5} alt="" />
          </div>
        </Slider>
            <img src={mock3} alt="" />
          </div>
          <div>
            <img src={mock4} alt="" />
          </div>
          <div>
            <img src={mock5} alt="" />
          </div>
        </Slider> */}
        {/* <CheckoutInterface /> */}
      </Wrapper>
    </React.Fragment>
  );
};
