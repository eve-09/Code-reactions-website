import React from "react";
import "../Css/Logos.css";
import { useMediaQuery } from "@react-hook/media-query";

const Logo = () => {
  const isHorizontal = useMediaQuery("(max-width: 600px)");
  return (
    <>
      <div class="slide">
        <img
          src="https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Logo.svg.original.svg"
          height={isHorizontal ? "50" : "80"}
          width="200"
          alt="linkedin"
        />
      </div>
      <div class="slide">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Intuit_Logo.svg/1200px-Intuit_Logo.svg.png"
          height={isHorizontal ? "50" : "60"}
          width="200"
          alt="intuit"
        />
      </div>
      <div class="slide">
        <img
          src="https://www.codingelements.com/images/logos/color-icon.png"
          height={isHorizontal ? "50" : "80"}
          width="120"
          alt="coding-elements"
        />
      </div>
      <div class="slide">
        <img
          src="../training-app-removebg-preview.png"
          height={isHorizontal ? "50" : "90"}
          width="160"
          alt="trainer-app"
        />
      </div>
      <div class="slide">
        <img
          src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/si0xwnocrpaph8h7aiok"
          height={isHorizontal ? "50" : "80"}
          width="120"
          alt="wikisheets"
        />
      </div>
      <div class="slide">
        <img
          src="https://www.businesseventsthailand.com/microsite/bizconnect/assets/images/logo-biz-s1.png"
          height={isHorizontal ? "50" : "80"}
          width="200"
          alt="bizconnect"
        />
      </div>
      <div class="slide">
        <img
          src="https://blog.logomyway.com/wp-content/uploads/2018/06/facebook-logo.jpg"
          height={isHorizontal ? "50" : "80"}
          width="200"
          alt="facebook"
        />
      </div>
      <div class="slide">
        <img
          src="https://www.earlyiq.com/sites/default/files/partner_logos/filmio-logo3.png"
          height={isHorizontal ? "50" : "80"}
          width="200"
          alt="filmio"
        />
      </div>
      <div class="slide">
        <img
          src="https://cdn.shopify.com/s/files/1/2195/1817/files/Color_logo_with_background_1000x@2x.png?v=1554433197"
          height={isHorizontal ? "50" : "80"}
          width="180"
          alt="medi-sports"
        />
      </div>
    </>
  );
};

const Logos = () => {
  return (
    <>
      <div class="logo-slider">
        <div class="slide-track">
          <Logo />
          <Logo />
          <Logo />
        </div>
      </div>
    </>
  );
};

export default Logos;
