import React from "react";
// @ts-ignore
import {
  BottomCta,
  CardWithText,
  CircularImageWithSpiral,
  ImageWithPattern,
  PageTop,
  Section,
  SectionWithFlex,
  TextWithPattern,
  Timeline,
} from "../../Components/PatekUI/PatekUi";
import Footer from "../../Components/Footer/Footer";
import Banner from "../../Components/Banner/Banner";
import catFish from "../../assets/png/catfish-circle.png";
import acrylicTank from "../../assets/png/acrylic-tanks.png";
import efficientAeration from "../../assets/png/efficient-filteration.png";
import foodSafety from "../../assets/png/cirular-food-safety-image.png";
import bgSpiral from "../../assets/png/bg-spirals-right.png";
import bottomRightSpiral from "../../assets/png/bottom-right-spiral.png";
import catFishbg from "../../assets/png/cat-fish-bg.png";
import healthyFarmFish from "../../assets/png/heathy-farm-fish.png";
import tabSizedFish from "../../assets/png/hand-washing-fish.png";
import overDried from "../../assets/png/over-dried-fish.png";
import effCirculatingSys from "../../assets/png/efficient-circulating-system.png";
type AboutType = {};

function About(props: AboutType) {
  const timelineData = [
    {
      title: "Hatchery",
      description:
        "Workers use large weighted nets to crowd the fish to one area of the tank so they can be harvested and transferred into the conditioning area for processing.",
    },
    {
      title: "Processing",
      description:
        "The fish are gilled, gutted, cleaned, and placed into the smoking kiln in the various forms, sizes and cuts based on market demand.",
    },
    {
      title: "Packaging",
      description:
        "The products are then packed in 7kgs, placed in a sealed polyethylene bags and then into cartons.",
    },
    {
      title: "Delivery",
      description:
        "The packaged oven dried catfish are stored in dry and aerated area until they are loaded on our fleet of trucks, or onto the customer’s truck.",
    },
  ];
  return (
    <div>
      <PageTop
        image={catFishbg}
        description="We employ the most technologically advanced fish production equipment in the industry. "
        title="Bxuy healthy controlled
Catfish from Hatchery to Oven"
        linkText={"Contact us"}
        link={"/contact"}
      />
      <Banner />
      <SectionWithFlex className="mt-4" flexClassName="justify-space-between">
        <CircularImageWithSpiral title="Fingerlings" image={catFish} />
        <CircularImageWithSpiral
          title="Table sized catfish"
          image={tabSizedFish}
        />
        <CircularImageWithSpiral
          title="Oven dried smoked catfish"
          image={overDried}
        />
      </SectionWithFlex>
      <div className="br-right-top-bottom-2 md-lh-regular position-relative  p-2 md-p-5 mt-4 md-mt-0 mb-5 bg-green-lighter md-w-70 ml-auto">
        We are committed to providing the best quality, oven dried catfish
        available in the marketplace, and because we are a vertically integrated
        catfish processor we can meet the high demands of the market
        consistently. We control the entire production process from the hatchery
        to delivery. This allows us to maintain the highest quality standards
        assuring that the highest quality products reach you in the marketplace.
        <img
          style={{ width: "300px", height: "400px" }}
          className="position-absolute bottom-left-2"
          src={bottomRightSpiral}
          alt=""
        />
      </div>
      <Section>
        <h2 className="text-green text-center mb-2">Our Key Success Factors</h2>
        <SectionWithFlex>
          <div className="flex-grow-1 d-flex flex-column md-d-grid md-col-2 md-gap-2">
            <CardWithText
              className="w-100"
              image={acrylicTank}
              title="High Quality Acrylic Tanks"
              description="At Patec Foods, we employ the most technologically advanced fish production equipment in the industry. Our catfish is raised in acrylic tanks that use the latest farming practices and best management practices. Therefore, Patec Foods delivers the best farm-raised catfish in the market."
            />
            <CardWithText
              className="w-100"
              image={efficientAeration}
              title="Efficient Filtration & Aeration Systems"
              description="Filtration and aeration are two key components required to run a successful fish farm. Aeration ensures there is adequate oxygen available for the fish and filtration is employed to maintain water quality in fish farming operations and ensure good healthy fish."
            />
            <CardWithText
              className="w-100"
              image={effCirculatingSys}
              title="Efficient Recirculating Aquaculture Systems"
              description="We provide a constant and controlled environment for the fish, allowing for optimal and fully manageable production of African catfish, and other fish species using the Recirculating Aquaculture System (RAS).
In our closed circuit recirculating aquaculture system, the culture water is purified and reused continuously. The produced waste products; solid waste, ammonium and CO2, are either removed or converted into non-toxic products by the system components. The purified water is subsequently saturated with oxygen and then returned to the fish tanks."
            />
            <CardWithText
              className="w-100"
              image={healthyFarmFish}
              title="Healthy Farm Raised Catfish"
              description="All our fish are grain fed from locally grown and processed feed containing no hormones or antibiotics of any kind. This ensures a healthy tasty product. We take steps to ensure our catfish products are farmed and processed in an environmentally responsible manner. This includes working with growers who employ environmentally beneficial farming methods and utilizing innovative equipment and processes. Our catfish are raised from fingerlings in our facility and they are constantly monitored to ensure water quality and fish health."
            />
          </div>
        </SectionWithFlex>
      </Section>
      <Section>
        <h2 className="w-80 mx-auto  text-left md-text-center mb-0 md-mb-initial fs-1-5 text-green">
          Patec Foods Catfish Life Cycle
        </h2>
        <SectionWithFlex className="md-pb-2">
          <Timeline data={timelineData} />
        </SectionWithFlex>
      </Section>
      <SectionWithFlex
        flexClassName="align-center pb-3"
        className="bg-green-light"
      >
        <TextWithPattern pattern={false}>
          <p className="font-pacifico">
            Delivering Excellence from Egg to Harvest
          </p>
        </TextWithPattern>
        <ImageWithPattern
          image={foodSafety}
          bgPattern={bgSpiral}
          bgPatternClassName="wh md-top-right-3"
        />
      </SectionWithFlex>
      <Section className="bg-staffs position-relative">
        <div className="position-absolute m-2 md-m-0 top-right-2 box-shadow-1 br-0-5 p-2 bg-white md-w-300px text-green">
          Our people are our greatest asset. We combine experience with
          technologies and insights to serve as the trusted partner for
          aquaculture products in Nigeria
        </div>
      </Section>
      <BottomCta
        link="/contact"
        linkText="Contact Us"
        title={"Learn more about Patec Food"}
      />
      <Footer />
    </div>
  );
}

export default About;
