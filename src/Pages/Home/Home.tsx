import React from "react";
import TopNav from "../../Components/TopNav/TopNav";
import Nav from "../../Components/Nav/Nav";
import Header, { HeaderType } from "../../Components/Header/Header";
import Banner from "../../Components/Banner/Banner";
import Footer from "../../Components/Footer/Footer";
import BottomCta from "../../Components/BottomCta/BottomCta";
import catFish from "../../assets/png/kify-smoked-african-catfish.png";
import yellowBg from "../../assets/png/yellow-bg.png";
import leftBg from "../../assets/png/left-bg.png";
import rightBg from "../../assets/png/right.png";
import backgroundSquare from "../../assets/png/background-square.png";
import catfishFactory from "../../assets/png/catfishFactory.png";
import Button from "../../Components/Button/Button";

const HighQualityProduct = () => {
  return (
    <div className="d-flex position-relative my-4 p-2 w-100 height-400">
      <img
        className="position-absolute w-50 top-50-percent"
        src={yellowBg}
        alt=""
      />
      <img
        className="position-absolute w-30 bottom-left-20"
        src={leftBg}
        alt=""
      />
      <img
        className="position-absolute w-30 top-right-20"
        src={rightBg}
        alt=""
      />
      <div className="w-70 mx-auto d-flex align-center">
        <img className="w-50" src={catFish} alt="" />
        <div>
          <h2 className="text-green lh-regular">
            High quality products using high quality standards
          </h2>
          <p className="lh-regular">
            Our oven dried catfish is filled with protein and other essential
            vitamins and minerals, and have a consistent mild flavor. A tasty
            local farm-raised catfish recipe will please even the pickiest
            eaters.
          </p>
        </div>
      </div>
    </div>
  );
};

export type PageTopType = HeaderType & {};
export const PageTop = ({
  title = "Buy healthy controlled Catfish from Hatchery to Oven",
  description = `We employ the most technologically advanced fish
                     production equipment in the industry.`,
  link = "/about",
}: Partial<PageTopType>) => {
  return (
    <>
      <TopNav />
      <Nav />
      <Header title={title} description={description} link={link} />
    </>
  );
};

const ExploreProduct = () => {
  return (
    <div className="height-400 position-relative">
      <div className="position-relative w-50 mx-auto text-center">
        <h2 className="text-green font-bold">
          Delivering Excellence from Egg to Harvest
        </h2>
        <p className="text-green mb-3">
          At Patec Foods, we employ the most technologically advanced fish
          production equipment in the industry to produce high quality
          fingerlings, table sized catfish (clarias gariepinus) and oven dried
          smoked catfish.
        </p>
        <Button
          type="button"
          className="btn-green w-150-px h-50-px no-border"
          title="Explore Product"
        />
      </div>
    </div>
  );
};

const FirstSection = () => {
  return (
    <div className="d-flex position-relative">
      <div className="square-100 bg-light-yellow position-absolute" />
      <img
        src={backgroundSquare}
        alt=""
        className="square-100 bottom-right-20-10 position-absolute"
      />
      <div className="w-60 mt--50 mx-auto d-flex">
        <div className="lh-regular align-center flex-grow-1 flex-basis-50-p-cent w-50">
          <h2>
            Most technologically advanced fish production equipment in the
            industry
          </h2>
          <p className="lh-regular">
            Our catfish is raised in acrylic tanks that use the latest farming
            practices and best management practices. Therefore, Patec Foods
            delivers the best farm-raised catfish in the market.
          </p>
        </div>
        <img
          className="flex-grow-1 flex-basis-50-p-cent w-50"
          src={catfishFactory}
          alt="catfish factory"
        />
      </div>
    </div>
  );
};

function Home() {
  return (
    <div className="home">
      <PageTop />
      <Banner />
      <FirstSection />
      <ExploreProduct />
      <HighQualityProduct />
      <BottomCta />
      <Footer />
    </div>
  );
}

export default Home;
