import React from "react";
import Banner from "../../Components/Banner/Banner";
import Footer from "../../Components/Footer/Footer";
import {
  BottomCta,
  CircularImageWithSpiral,
  HighQualityProduct,
  ImageWithPattern,
  PageTop,
  Section,
  SectionWithFlex,
  TextWithPattern,
} from "../../Components/PatekUI/PatekUi";
import Button from "../../Components/Button/Button";
import catFish from "../../assets/png/catfish-circle.png";

function Home() {
  return (
    <>
      <PageTop />
      <Banner />
      <SectionWithFlex className="mt-4">
        <TextWithPattern />
        <ImageWithPattern />
      </SectionWithFlex>
      <SectionWithFlex>
        <ImageWithPattern />
        <TextWithPattern />
      </SectionWithFlex>
      {/*<ExploreProduct />*/}
      <Section className="bg-green-lighter">
        <div className="position-relative w-50 mx-auto text-center">
          <h2 className="text-green font-bold pt-3">
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
        <SectionWithFlex flexClassName="justify-space-between p-3">
          <CircularImageWithSpiral image={catFish} title="Fingerlings" />
          <CircularImageWithSpiral
            image={catFish}
            title="Table sized catfish"
          />
          <CircularImageWithSpiral
            image={catFish}
            title="Oven dried smoked catfish"
          />
        </SectionWithFlex>
      </Section>
      <HighQualityProduct />
      <BottomCta />
      <Footer />
    </>
  );
}

export default Home;
