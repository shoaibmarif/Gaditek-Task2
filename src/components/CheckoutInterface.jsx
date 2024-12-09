import React from "react";
import Slider from "react-slick";
import mock1 from "../../public/assets/images/mock-1.png";
import mock2 from "../../public/assets/images/mock-2.png";
import mock3 from "../../public/assets/images/mock-3.png";
import mock4 from "../../public/assets/images/mock-4.png";
export const CheckoutInterface = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };
  return (
    <div>
      <h2>Checkout Our App Interface Look</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc
        ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet
        etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac
        nunc libero urna, feugiat.
      </p>

      <div>
        {/* <Slider {...settings}>
          <div>
            <img src={mock1} alt="" />
          </div>
          <div>
            <img src={mock2} alt="" />
          </div>
          <div>
            <img src={mock3} alt="" />
          </div>
          <div>
            <img src={mock4} alt="" />
          </div>
          <div>
            <img src={mock5} alt="" />
          </div>
        </Slider> */}{" "}
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
          </div>
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
      </div>
    </div>
  );
};
