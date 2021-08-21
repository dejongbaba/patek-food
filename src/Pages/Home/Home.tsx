import React, { useRef } from "react";
import Banner from "../../Components/Banner/Banner";
import Footer from "../../Components/Footer/Footer";
// @ts-ignore
import {
    BottomCta,
    CircularImageWithSpiral,
    ImageWithPattern,
    ProductSection,
    Section,
    SectionWithFlex,
    TextWithPattern,
} from "../../Components/PatekUI/PatekUi";
import { Link } from "react-router-dom";
import catFish from "../../assets/png/fingerlings.png";
import handFish from "../../assets/png/hand-washing-fish.png";
import stackFish from "../../assets/png/dried-fish.png";
import pondWaterFish from "../../assets/png/pond-watet-fish.png";
import dottedImage from "../../assets/png/dotted-image-pattern-2.png";
import TopNav from "../../Components/TopNav/TopNav";
import Nav from "../../Components/Nav/Nav";
import Header from "../../Components/Header/Header";
import useShowMenu from "../../hooks/useShowMenu";
import OwlCarousel from "react-owl-carousel";
import headerImg from "../../assets/jpeg/patek-home.jpeg";
import aboutImg from "../../assets/jpeg/patek-about.jpeg";
import thirdImg from "../../assets/jpeg/patek-food-3.jpeg";

const owlConfig = {
    loop: true,
    margin: 10,
    navigation: true,
    singleItem: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    autoplaySpeed: 1000,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: true,
            loop: true,
        },
        600: {
            items: 1,
            nav: true,
            loop: true,
        },
        1000: {
            items: 1,
            nav: true,
            loop: true,
        },
    },
};

function Home() {
    const menu = useRef<HTMLElement>(null);
    const hamBurger = useRef<HTMLButtonElement>(null);
    useShowMenu(hamBurger, menu);

    return (
        <>
            <TopNav ref={hamBurger} />
            {/*@ts-ignore */}
            <Nav ref={menu} />
            <OwlCarousel {...owlConfig}>
                <Header
                    image={headerImg}
                    title="Your Trusted Aquaculture Partner"
                    description="We employ the most technologically advanced fish
                                  production equipment in the industry."
                    link="/about"
                    linkText="Learn More"
                />{" "}
                <Header
                    image={aboutImg}
                    title="Certified by Federal Department of Fisheries and NAFDAC"
                    description="We employ the most technologically advanced fish
                                  production equipment in the industry."
                    link="/about"
                    linkText="Learn More"
                />{" "}
                <Header
                    image={thirdImg}
                    title="Vertically Integrated Aquaculture Processor"
                    description="We employ the most technologically advanced fish
                                  production equipment in the industry."
                    link="/about"
                    linkText="Learn More"
                />
            </OwlCarousel>

            <Banner />
            <SectionWithFlex
                flexClassName="flex-reverse-column"
                className="md-mt-4 mh-350-px"
            >
                <TextWithPattern
                    data-aos="animation-translate-y"
                    className="md-mr-3"
                />
                <ImageWithPattern data-aos="animation-translate-y" />
            </SectionWithFlex>
            <SectionWithFlex
                className="position-relative"
                flexClassName="justify-between"
            >
                <ImageWithPattern
                    data-aos="animation-translate-y"
                    bgPatternClassName="md-top-left"
                    className="md-mr-3"
                    image={pondWaterFish}
                />
                <TextWithPattern
                    titleClassName="mt-0"
                    className="mt-4"
                    pattern={false}
                    data-aos="animation-translate-y"
                    title="Our Farm Raised Catfish"
                    desc="We provide a constant and controlled environment for the fish, allowing for optimal and fully manageable production of African catfish.
All our fish are grain fed from locally grown and processed feed containing no hormones or antibiotics of any kind. This ensures a healthy tasty product. "
                >
                    <small className="font-pacifico">
                        Delivering Excellence from Egg to Harvest
                    </small>
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
                    <h2
                        data-aos="animation-translate-y"
                        className="fs-2 mb-1 text-green font-bold"
                    >
                        Delivering Excellence from Egg to Harvest
                    </h2>
                    <p data-aos="animation-translate-y" className=" mb-3">
                        At Patec Foods, we employ the most technologically
                        advanced fish production equipment in the industry to
                        produce high quality fingerlings, table sized catfish
                        (clarias gariepinus) and oven dried smoked catfish.
                    </p>
                    <Link
                        to="/products"
                        className="btn-green pointer w-150-px h-50-px no-border"
                        title="Explore Product"
                    />
                </div>
                <SectionWithFlex flexClassName="justify-space-between p-3">
                    <CircularImageWithSpiral
                        data-aos="animation-translate-y"
                        data-aos-delay="100"
                        image={catFish}
                        title="Fingerlings"
                    />
                    <CircularImageWithSpiral
                        data-aos="animation-translate-y"
                        data-aos-delay="200"
                        image={handFish}
                        title="Table sized catfish"
                    />
                    <CircularImageWithSpiral
                        data-aos="animation-translate-y"
                        data-aos-delay="300"
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
