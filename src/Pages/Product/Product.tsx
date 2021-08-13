import React from "react";
import {
    BottomCta,
    ImageWithPattern,
    PageTop,
    Section,
    SectionWithFlex,
    TextWithPattern,
} from "../../Components/PatekUI/PatekUi";
import Footer from "../../Components/Footer/Footer";
import kify from "../../assets/png/kify.png";
import kifyPack from "../../assets/png/kify-smoked-african-catfish.png";
import patekProductImage from "../../assets/jpeg/patek-product.jpeg";

function Product() {
    // const {
    //     // data,
    //     // size,
    //     // selectedProduct,
    //     // subProducts,
    //     // loading,
    //     // onClickProduct,
    //     // onSizeChange,
    //     // quantity,
    //     // onPlus,
    //     // onMinus,
    // }: ProductContextType = useProductContext();
    // const { onAddItem, loading: cartLoading }: CartContextType =
    //     useCartContext();
    return (
        <div>
            <PageTop
                image={patekProductImage}
                link="/contact"
                linkText="Contact us"
                title="Our Smoked Catfish Can be Used in Various Meals"
                description="We employ the most technologically advanced fish production equipment in the industry. "
            />
            <SectionWithFlex flexClassName="align-center">
                <ImageWithPattern className="mr-3" image={kify} bgPattern="" />
                <TextWithPattern pattern={false} title="" desc="">
                    <h2 className="text-green font-bold fs-2">Our products</h2>
                    <p className="text-green mt-0 mb-2">
                        Kify is a premium seafood brand owned by Patec Foods
                        Limited. The pioneer product under the Kify brand is the
                        African Smoked Catfish - produced to the highest quality
                        for both the domestic and foreign markets
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
                The “Kify” Catfish Promise
            </h2>
            <p className="text-center">
                <i className="w-80 md-w-100 mx-auto md-text-center">
                    quality. convenience. availability
                </i>
            </p>

            <p className="w-80 mt-3 md-w-100 mx-auto md-text-center">
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
                        consistent in taste and never off flavour
                    </p>
                    <p className="md-yellow-dash text-green md-w-30 md-text-right md-position-absolute center-left-5">
                        thoroughly cleaned with no muddiness or sand
                    </p>

                    <p className="md-green-dash text-yellow md-w-30 md-text-right md-position-absolute bottom-left-5">
                        well eviscerated, making it ready-to-use in your meals
                    </p>
                    <img
                        className="d-none md-d-block  md-w-40 center md-position-absolute"
                        src={kifyPack}
                        alt=""
                    />
                    <p className="text-green md-w-30 md-position-absolute top-right-4">
                        well dried for a longer shelf life
                    </p>
                    <p className="text-yellow md-w-30 md-position-absolute center-right-3">
                        prepared in electric ovens which meet global food safety
                        standards
                    </p>
                    <p className="text-green md-w-30 md-position-absolute center-right-4 ">
                        available and consistently supplied to our customers all
                        year round
                    </p>
                    {/*<p className="text-yellow md-w-30 md-position-absolute bottom-right-4">*/}
                    {/*    Are consistently supplied to our customers based on*/}
                    {/*    their demand*/}
                    {/*</p>*/}
                </div>
            </Section>
            {/*<SectionWithFlex>*/}
            {/*    <div className="md-mr-3 position-relative">*/}
            {/*        <img*/}
            {/*            src={dottenPattern}*/}
            {/*            className="md-position-absolute top-left w-50"*/}
            {/*            alt=""*/}
            {/*        />*/}
            {/*        <h1 className="font-bold text-green position-relative z-1">*/}
            {/*            Order now*/}
            {/*        </h1>*/}
            {/*        <ProductList*/}
            {/*            onClickProduct={onClickProduct}*/}
            {/*            products={data}*/}
            {/*        />*/}
            {/*    </div>*/}
            {/*    <ProductCard*/}
            {/*        buttonLoading={cartLoading}*/}
            {/*        sizes={subProducts?.data}*/}
            {/*        onSizeChange={onSizeChange}*/}
            {/*        onPlus={onPlus}*/}
            {/*        size={size?.id}*/}
            {/*        onMinus={onMinus}*/}
            {/*        weights={selectedProduct?.weights}*/}
            {/*        onAddToCart={() => onAddItem(size, quantity)}*/}
            {/*        quantity={quantity}*/}
            {/*        page={subProducts?.page}*/}
            {/*        total={subProducts?.total}*/}
            {/*        loading={loading}*/}
            {/*        images={selectedProduct?.meta?.images}*/}
            {/*        name={selectedProduct?.name}*/}
            {/*    />*/}
            {/*</SectionWithFlex>*/}
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
