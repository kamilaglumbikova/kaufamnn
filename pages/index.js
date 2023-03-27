import Itembenefit from "@/components/home/Itembenefit";
import Itemslider from "@/components/home/Itemslider";
import Onas from "@/components/home/Onas";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Referenceblock from "@/components/home/Referenceblock";
import Mapblock from "@/components/home/Mapblock";

export default function Home() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <div className="max-w-[1440px] mx-auto font-rubik">
        <Carousel
          className="top-carousel h-[610px]"
          responsive={responsive}
          showDots={true}
          removeArrowOnDeviceType={[
            "tablet",
            "mobile",
            "desktop",
            "superLargeDesktop",
          ]}
        >
          <Itemslider title="Drevo" imgUrl="/assets/home/home1.png" />
          <Itemslider
            title="Elektroinštalácie"
            imgUrl="/assets/home/home2.png"
          />
          <Itemslider title="Stavebníctvo" imgUrl="/assets/home/home3.png" />
          <Itemslider title="Kov" imgUrl="/assets/home/home4.png" />
        </Carousel>
        <div className="grid md:grid-cols-4 grid-cols-1 lg:px-[104px] px-[24px] py-[48px] md:py-[96px] gap-[16px] md:gap-0">
          <Itembenefit
            imgUrl="/assets/home/benefit1.svg"
            title="On Demand Pricing"
            text="On make 100€+"
            position="left"
          />
          <Itembenefit
            imgUrl="/assets/home/benefit2.svg"
            title="Quality Products"
            text="We made for you"
            position="right"
          />
          <Itembenefit
            imgUrl="/assets/home/benefit3.svg"
            title="Best Built Quality"
            text="Its guarantee"
            position="left"
          />
          <Itembenefit
            imgUrl="/assets/home/benefit4.svg"
            title="24/7 Online Support"
            text="We are here"
            position="right"
          />
        </div>
        <Onas />
      </div>
      <Referenceblock title="Na čo sme hrdí?" />
      <Mapblock />
    </>
  );
}
