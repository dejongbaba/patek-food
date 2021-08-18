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
import catFish from "../../assets/png/fingerlings.png";
import aboutImg from "../../assets/jpeg/patek-about.jpeg";
import commitToQuality from "../../assets/jpeg/commit-quality.jpeg";
import highlyExperienced from "../../assets/jpeg/highly-experienced.jpeg";
import foodSafety from "../../assets/png/cirular-food-safety-image.png";
import bgSpiral from "../../assets/png/bg-spirals-right.png";
import bottomRightSpiral from "../../assets/png/bottom-right-spiral.png";
import healthyFarmFish from "../../assets/png/heathy-farm-fish.png";
import tabSizedFish from "../../assets/png/hand-washing-fish.png";
import overDried from "../../assets/png/dried-fish.png";
import effCirculatingSys from "../../assets/png/efficient-circulating-system.png";
type AboutType = {};

function About(props: AboutType) {
    const timelineData = [
        {
            title: "Hatchery",
            animation: "animation-translate-y",
            delay: 100,
            description:
                "From our broodstock facility, about 7 million fish eggs are produced every year.\n",
        },
        {
            title: "Fingerlings Stage",
            animation: "animation-translate-y",
            delay: 100,
            description:
                "The frys are moved from the hatchery to a nursery facility where they continue to grow until they are 5 to 7 inches long.",
        },
        {
            title: "Grow out ",
            animation: "animation-translate-y",
            delay: 100,
            description:
                "After 4 to 5 months, the fingerlings have grown to an average weight of 500g and are now ready to be harvested and processed. ",
        },
        {
            title: "Harvest ",
            animation: "animation-translate-y",
            delay: 100,
            description:
                "Workers use large weighted nets to crowd the fish to one area of the tank so they can be harvested and transferred into the conditioning area for processing.",
        },
        {
            title: "Processing",
            animation: "animation-translate-y",
            delay: 100,
            description:
                "The fish are gilled, gutted, cleaned, and placed into the smoking kiln in the various forms, sizes and cuts based on market demand.",
        },
        {
            title: "Packaging",
            animation: "animation-translate-y",
            delay: 100,
            description:
                "The products are then packed in 7kgs, placed in a sealed polyethylene bags and then into cartons.",
        },
        {
            title: "Delivery",
            animation: "animation-translate-y",
            delay: 100,
            description:
                "The packaged oven dried catfish are stored in dry and aerated area until they are loaded on our fleet of trucks, or onto the customer’s truck.",
        },
    ];
    return (
        <div>
            <PageTop
                image={aboutImg}
                description="We employ the most technologically advanced fish production equipment in the industry. "
                title="Certified by Federal Department of Fisheries and NAFDAC"
                linkText={"Contact us"}
                link={"/contact"}
            />
            <Banner
                description={
                    "Patec Foods is an aquaculture production and processing company focused on transforming the aquaculture " +
                    "industry in Nigeria and significantly empowering smallholder farmers." +
                    "\n" +
                    "At Patec, we produce the highest quality oven-dried catfish available in the market -" +
                    "grown in a cost-efficient and environmentally responsible manner." +
                    "We are driven by our core values of efficiency, sustainability, and wealth creation."
                }
            />
            <SectionWithFlex
                className="mt-4"
                flexClassName="justify-space-between"
            >
                <CircularImageWithSpiral
                    data-aos="animation-translate-y"
                    data-aos-delay="200"
                    title="Fingerlings"
                    image={catFish}
                />
                <CircularImageWithSpiral
                    data-aos="animation-translate-y"
                    data-aos-delay="300"
                    title="Table sized catfish"
                    image={tabSizedFish}
                />
                <CircularImageWithSpiral
                    data-aos="animation-translate-y"
                    data-aos-delay="400"
                    title="Oven dried smoked catfish"
                    image={overDried}
                />
            </SectionWithFlex>
            <div
                data-aos="animation-translate-y"
                data-aos-delay="100"
                className="br-right-top-bottom-2 md-lh-regular position-relative  p-2 md-p-5 mt-4 md-mt-0 mb-5 bg-green-lighter md-w-70 ml-auto"
            >
                We are committed to providing the best quality, oven dried
                catfish available in the marketplace, and because we are a
                vertically integrated catfish processor we can meet the high
                demands of the market consistently. We control the entire
                production process from the hatchery to delivery. This allows us
                to maintain the highest quality standards assuring that the
                highest quality products reach you in the marketplace.
                <img
                    style={{ width: "300px", height: "400px" }}
                    className="position-absolute bottom-left-2"
                    src={bottomRightSpiral}
                    alt=""
                />
            </div>
            <Section>
                <h2
                    data-aos="animation-translate-y"
                    className="text-green text-center mb-2"
                >
                    Our Key Success Factors
                </h2>
                <SectionWithFlex>
                    <div className="flex-grow-1 d-flex flex-column md-d-grid md-col-2 md-gap-2">
                        <CardWithText
                            data-aos="animation-translate-y"
                            data-aos-delay="100"
                            className="w-100"
                            image={effCirculatingSys}
                            title="Efficient Recirculating Aquaculture Systems"
                            description="We provide a constant and controlled environment for the fish, allowing for optimal and fully manageable production of African catfish, and other fish species using the Recirculating Aquaculture System (RAS).
In our closed circuit recirculating aquaculture system, the culture water is purified and reused continuously. The produced waste products; solid waste, ammonium and CO2, are either removed or converted into non-toxic products by the system components. The purified water is subsequently saturated with oxygen and then returned to the fish tanks."
                        />
                        <CardWithText
                            data-aos="animation-translate-y"
                            data-aos-delay="100"
                            className="w-100"
                            image={healthyFarmFish}
                            title="Healthy Farm Raised Catfish"
                            description="All our fish are grain fed from locally grown and processed feed containing no hormones or antibiotics of any kind. This ensures a healthy tasty product. We take steps to ensure our catfish products are farmed and processed in an environmentally responsible manner. This includes working with growers who employ environmentally beneficial farming methods and utilizing innovative equipment and processes. Our catfish are raised from fingerlings in our facility and they are constantly monitored to ensure water quality and fish health."
                        />
                        <CardWithText
                            data-aos="animation-translate-y"
                            data-aos-delay="100"
                            className="w-100"
                            image={commitToQuality}
                            title="Commitment to Quality"
                            description="Our farm is right next to our processing plant and this allows us to process harvested fish for smoking in less than 1 hour of being harvested, preserving the fish freshness, quality, and texture. In our state-of-the-art facility, smoking is done in an electric oven with polycyclic aromatic hydrocarbons (PAHs) levels not exceeding regulatory limits."
                        />
                        <CardWithText
                            data-aos="animation-translate-y"
                            data-aos-delay="100"
                            className="w-100"
                            image={highlyExperienced}
                            title="Highly Experienced Personnel"
                            description="At Patec Foods, our people are our greatest asset. We combine experience with technologies and insights to serve as the trusted partner for aquaculture products in Nigeria"
                        />
                    </div>
                </SectionWithFlex>
            </Section>
            <Section>
                <h2
                    data-aos="animation-translate-y"
                    className="w-80 mx-auto  text-left md-text-center mb-0 md-mb-initial fs-1-5 text-green"
                >
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
                <TextWithPattern
                    data-aos="animation-translate-y"
                    className="pr-3"
                    title="Food Safety and Quality Assurance"
                    desc="Patec Foods main processing facility, situated on 6,048 square-meters, employs some of the latest and most technologically advanced catfish smoking available today, taking into consideration the health implications. Every stage of the process from live-fish receiving to product shipment utilizes state-of-the-art equipment and systems to allow Patec Foods to provide our customers with the highest quality oven dried smoked catfish products accurately, consistently and efficiently."
                    pattern={false}
                >
                    <p className="font-pacifico">
                        Delivering Excellence from Egg to Harvest
                    </p>
                </TextWithPattern>
                <ImageWithPattern
                    data-aos="animation-translate-y"
                    image={foodSafety}
                    bgPattern={bgSpiral}
                    bgPatternClassName="wh md-top-right-3"
                />
            </SectionWithFlex>
            <Section className="bg-staffs md-height-800 position-relative">
                <div className="position-absolute m-2 md-m-0 top-right-2 box-shadow-1 br-0-5 p-2 bg-white md-w-300px text-green">
                    Our people are our greatest asset. We combine experience
                    with technologies and insights to serve as the trusted
                    partner for aquaculture products in Nigeria
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
