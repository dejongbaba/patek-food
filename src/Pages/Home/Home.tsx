import React from "react";
import Banner from "../../Components/Banner/Banner";
import Footer from "../../Components/Footer/Footer";
// @ts-ignore
import {
  BottomCta,
  CircularImageWithSpiral,
  ProductSection,
  ImageWithPattern,
  PageTop,
  Section,
  SectionWithFlex,
  TextWithPattern,
} from "../../Components/PatekUI/PatekUi";
import { Link } from "react-router-dom";
import catFish from "../../assets/png/catfish-circle.png";
import handFish from "../../assets/png/hand-washing-fish.png";
import stackFish from "../../assets/png/stack-off-fish.png";
import pondWaterFish from "../../assets/png/pond-watet-fish.png";
import dottedImage from "../../assets/png/dotted-image-pattern-2.png";

function Home() {
  return (
    <>
      <PageTop />
      <Banner />
      <SectionWithFlex
        flexClassName="flex-reverse-column"
        className="md-mt-4 mh-350-px"
      >
        <TextWithPattern className="md-mr-3" />
        <ImageWithPattern />
      </SectionWithFlex>
      <SectionWithFlex
        className="position-relative"
        flexClassName="justify-between"
      >
        <ImageWithPattern
          bgPatternClassName="md-top-left"
          className="md-mr-3"
          image={pondWaterFish}
        />
        <TextWithPattern
          titleClassName="mt-0"
          className="mt-4"
          pattern={false}
          title="Our Farm Raised Catfish"
          desc="We provide a constant and controlled environment for the fish, allowing for optimal and fully manageable production of African catfish.
All our fish are grain fed from locally grown and processed feed containing no hormones or antibiotics of any kind. This ensures a healthy tasty product. "
        >
          <small>Delivering Excellence from Egg to Harvest</small>
        </TextWithPattern>
        <div className="position-absolute bg-light-yellow center-right-2 w-90 h-350 br-left-2" />
      </SectionWithFlex>
      <Section className="bg-green-lighter position-relative md-mt-2">
        <div className="position-absolute square-100 bg-green-light center-left-3" />
        <img
          src={dottedImage}
          alt=""
          className="position-absolute w-200px center-right-5 md-center-right-3"
        />
        <div className="position-relative px-1 md-px-0 md-w-50 pt-3 mx-auto text-center">
          <h2 className="fs-2 mb-1 text-green font-bold">
            Delivering Excellence from Egg to Harvest
          </h2>
          <p className=" mb-3">
            At Patec Foods, we employ the most technologically advanced fish
            production equipment in the industry to produce high quality
            fingerlings, table sized catfish (clarias gariepinus) and oven dried
            smoked catfish.
          </p>
          <Link
            to="/products"
            className="btn-green pointer w-150-px h-50-px no-border"
            title="Explore Product"
          />
        </div>
        <SectionWithFlex flexClassName="justify-space-between p-3">
          <CircularImageWithSpiral image={catFish} title="Fingerlings" />
          <CircularImageWithSpiral
            image={handFish}
            title="Table sized catfish"
          />
          <CircularImageWithSpiral
            image={stackFish}
            title="Oven dried smoked catfish"
          />
        </SectionWithFlex>
      </Section>
      <ProductSection />
      <BottomCta linkText="Order" link="/products" />
      <Footer />
    </>
  );
}

export default Home;
