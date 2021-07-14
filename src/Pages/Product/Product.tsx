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
import dottenPattern from "../../assets/png/dotted-pattern.png";
import worker from "../../assets/png/worker-working-bg.png";
import { useProductContext } from "../../context/ProductContext";
import { CartContextType, ProductContextType } from "../../type";
import { useCartContext } from "../../context/CartContext";

function Product() {
  const {
    data,
    size,
    selectedProduct,
    subProducts,
    loading,
    onClickProduct,
    onSizeChange,
    quantity,
    onPlus,
    onMinus,
  }: ProductContextType = useProductContext();
  const { onAddItem, loading: cartLoading }: CartContextType = useCartContext();
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
        <ImageWithPattern className="mr-3" image={kify} bgPattern="" />
        <TextWithPattern pattern={false} title="" desc="">
          <h2 className="text-green font-bold fs-2">Our products</h2>
          <p className="text-green mt-0 mb-2">
            Produced to high quality standards, Patec Foods dried smoked fish is
            packaged under the brand name ‘Kify’, targeted at Wholesalers,
            Retail Stores, HORECAs and Africans in Diaspora. Our oven dried
            catfish is filled with protein and other essential vitamins and
            minerals, and have a consistent mild flavor. A tasty local
            farm-raised catfish recipe will please even the pickiest eaters.
          </p>
          <div className="d-flex align-center fs-1-8">
            <i className="fa-1x fab fa-facebook mr-1 text-yellow" />
            <i className="fa-1x fab fa-linkedin mr-1 text-yellow" />
            <i className="fa-1x fab fa-instagram mr-1 text-yellow" />
            <i className="fa-1x fab fa- mr-1 text-yellow" />
          </div>
        </TextWithPattern>
      </SectionWithFlex>
      <h2 className="text-green fs-2 w-80 md-w-100 mx-auto md-text-center">
        The ‘Kify’ Catfish Promise
      </h2>
      <p className="w-80 md-w-100 mx-auto md-text-center">
        At Patec Foods, our catfish products are:
      </p>
      <Section>
        <div className="w-80 md-h-600 mx-auto position-relative">
          <img
            className="d-block md-d-none  w-100 position-relative center-left-4"
            src={kifyPack}
            alt=""
          />
          <p className="md-yellow-dash text-yellow md-w-30 md-text-right md-position-absolute top-left-3">
            Are thoroughly cleaned and produced in a conducive envoronment. No
            muddiness. Consistency in mood and taste
          </p>
          <p className="md-yellow-dash text-green md-w-30 md-text-right md-position-absolute center-left-5">
            Are prepared in electric ovens without the use of coal. Hence, it
            has PAH and it is not carcinogenic
          </p>

          <p className="md-green-dash text-yellow md-w-30 md-text-right md-position-absolute bottom-left-5">
            Has different size options. Customers are presented with different
            size options to pick from and it can be repacked and sold to the
            final consumer
          </p>
          <img
            className="d-none md-d-block  md-w-40 center md-position-absolute"
            src={kifyPack}
            alt=""
          />
          <p className="text-green md-w-30 md-position-absolute top-right-4">
            Are completely eviscerated, making it ready-to-use in your meals
          </p>
          <p className="text-yellow md-w-30 md-position-absolute center-right-3">
            Are uniform in size. In every pack, you are guaranteed uniform size
            of fish
          </p>
          <p className="text-green md-w-30 md-position-absolute center-right-4 ">
            Has at least 6 months shelf life with quality and taste maintained
            during the period
          </p>
          <p className="text-yellow md-w-30 md-position-absolute bottom-right-4">
            Are consistently supplied to our customers based on their demand
          </p>
        </div>
      </Section>
      <SectionWithFlex>
        <div className="md-mr-3 position-relative">
          <img
            src={dottenPattern}
            className="md-position-absolute top-left w-50"
            alt=""
          />
          <h1 className="font-bold text-green position-relative z-1">
            Order now
          </h1>
          <ProductList onClickProduct={onClickProduct} products={data} />
        </div>
        <ProductCard
          buttonLoading={cartLoading}
          sizes={subProducts?.data}
          onSizeChange={onSizeChange}
          onPlus={onPlus}
          size={size?.id}
          onMinus={onMinus}
          weights={selectedProduct?.weights}
          onAddToCart={() => onAddItem(size, quantity)}
          quantity={quantity}
          page={subProducts?.page}
          total={subProducts?.total}
          loading={loading}
          images={selectedProduct?.meta?.images}
          name={selectedProduct?.name}
        />
      </SectionWithFlex>
      <BottomCta
        title="Learn more about Patec Food"
        linkText="Order Us"
        link="/about"
      />
      <Footer />
    </div>
  );
}

export default Product;

/*
 *
 * TODO Place the cart modal and the cart icon in the footer
 *  fetch all products
 * add reducer and global state to handle cart state and actions
 * handle cart item increase
 * add loader to show item once the product is selected
 * add handler for cart item decrease button
 * add handler for checkout
 * call order init
 * call verify with invoice id
 * then handle pay stack call back
 * add click handler on the product list
 * add loader to the product show case
 *
 *
 *
 * */
