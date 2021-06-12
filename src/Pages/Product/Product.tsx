import React from "react";
import {
  BottomCta,
  ImageWithPattern,
  PageTop,
  ProductCard,
  ProductList,
  Section,
  SectionWithFlex,
  TextWithPattern,
} from "../../Components/PatekUI/PatekUi";
import Footer from "../../Components/Footer/Footer";
import kify from "../../assets/png/kify.png";
import kifyPack from "../../assets/png/kify-smoked-african-catfish.png";
import catFishProduct from "../../assets/png/catfDryFish.png";
import worker from "../../assets/png/worker-working-bg.png";

function Product() {
  const prods = [
    { name: "whole fish" },
    { name: "Fish Head" },
    { name: "Fish Tail" },
    { name: "Fish Steak" },
  ];
  const productImages: string[] | undefined = [catFishProduct, catFishProduct];
  return (
    <div>
      <PageTop
        image={worker}
        link="/contact"
        linkText="Contact us"
        title="High quality products using high quality standards"
        description="We employ the most technologically advanced fish production equipment in the industry. "
      />
      <SectionWithFlex flexClassName="align-center">
        <ImageWithPattern image={kify} bgPattern="" />
        <TextWithPattern pattern={false} title="" desc="">
          <p className="text-green">
            Produced to high quality standards, Patec Foods dried smoked fish is
            packaged under the brand name ‘Kify’, targeted at Wholesalers,
            Retail Stores, HORECAs and Africans in Diaspora. Our oven dried
            catfish is filled with protein and other essential vitamins and
            minerals, and have a consistent mild flavor. A tasty local
            farm-raised catfish recipe will please even the pickiest eaters.
          </p>
          <div className="d-flex align-center">
            <i className="fa-1x fab fa-facebook mr-1 text-yellow" />
            <i className="fa-1x fab fa-linkedin mr-1 text-yellow" />
            <i className="fa-1x fab fa-instagram mr-1 text-yellow" />
          </div>
        </TextWithPattern>
      </SectionWithFlex>
      <h2 className="text-green text-center">The ‘Kify’ Catfish Promise</h2>
      <p className="text-center">At Patec Foods, our catfish products are:</p>
      <Section>
        <div className="w-80 h-600 mx-auto position-relative">
          <p className="yellow-dash text-yellow w-30 text-right position-absolute top-left-3">
            Are thoroughly cleaned and produced in a conducive envoronment. No
            muddiness. Consistency in mood and taste
          </p>
          <p className="yellow-dash text-green w-30 text-right position-absolute center-left-3">
            Are prepared in electric ovens without the use of coal. Hence, it
            has PAH and it is not carcinogenic
          </p>

          <p className="green-dash text-yellow w-30 text-right position-absolute bottom-left-3">
            Has different size options. Cusotmers are presented with different
            size options to pick from and it can be repacked and sold to the
            final consumer
          </p>
          <img
            className="w-40 center position-absolute"
            src={kifyPack}
            alt=""
          />
          <p className="text-green w-30 position-absolute top-right-4">
            Are completely eviscerated, making it ready-to-use in your meals
          </p>
          <p className="text-yellow w-30 position-absolute center-right-3">
            Are uniform in size. In every pack, you are guaranteed uniform size
            of fish
          </p>
          <p className="text-green w-30 position-absolute center-right-4 ">
            Has at least 6 months shelf life with quality and taste maintained
            during the period
          </p>
          <p className="text-yellow w-30 position-absolute bottom-right-4">
            Are consistently supplied to our customers based on their demand
          </p>
        </div>
      </Section>
      <SectionWithFlex>
        <div className="mr-3">
          <h2 className="font-bold text-green">Order now</h2>
          <ProductList products={prods} />
        </div>
        <ProductCard images={productImages} />
      </SectionWithFlex>
      <BottomCta title="Learn more about Patec Food" link="/about" />
      <Footer />
    </div>
  );
}

export default Product;
