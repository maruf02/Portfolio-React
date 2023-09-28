import React from "react";
import BannerIntro from "../BannerIntro/BannerIntro";
import ProPicAnime from "../ProPicAnime/ProPicAnime";
import BannerClient from "../BannerClient/BannerClient";

const BannerSection = () => {
  return (
    <div>
      <div className="bg-gradient-to-r from-[#114250] to-[#131514]  bg-no-repeat font-f py-16 ">
        <section className="container mx-auto lg:pt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:mx-auto  ">
          {/* <!-- left side --> */}
          <BannerIntro></BannerIntro>
          {/* <!-- middle section image anime  border  --> */}
          <section className="order-first  md:order-none">
            <ProPicAnime></ProPicAnime>
          </section>
          {/* <!-- middle section image anime --> */}
          {/* <!-- right section  --> */}
          <BannerClient></BannerClient>
        </section>
        {/* <!-- draw line for tablet --> */}
        <p className="hidden  border-b-2 my-10 w-full container mx-auto md:inline-block lg:hidden"></p>
      </div>
    </div>
  );
};

export default BannerSection;
