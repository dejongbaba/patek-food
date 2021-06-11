import React, { ReactNode } from "react";
import yellowBg from "../../assets/png/yellow-bg.png";
import leftBg from "../../assets/png/left-bg.png";
import rightBg from "../../assets/png/right.png";
import catFish from "../../assets/png/kify-smoked-african-catfish.png";
import Header, { HeaderType } from "../Header/Header";
import TopNav from "../TopNav/TopNav";
import Nav from "../Nav/Nav";
import catfishFactory from "../../assets/png/catfishFactory.png";
import backgroundSquare from "../../assets/png/background-square.png";
import Button from "../Button/Button";
import Form from "../Form/Form";

export const HighQualityProduct = () => {
  return (
    <div className="d-flex position-relative my-4 py-2 w-100 height-400">
      <img
        className="position-absolute w-95 top-30-percent"
        src={yellowBg}
        alt=""
      />
      <img
        className="position-absolute w-30 bottom-left-20"
        src={leftBg}
        alt=""
      />
      <img className="position-absolute w-30 top-right" src={rightBg} alt="" />
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
  linkText = "Learn More",
}: Partial<PageTopType>) => {
  return (
    <>
      <TopNav />
      <Nav />
      <Header
        title={title}
        description={description}
        linkText={linkText}
        link={link}
      />
    </>
  );
};

export const ExploreProduct = () => {
  return <div className="height-400 position-relative"></div>;
};

type TextWithPatternProps = {
  className?: string;
  children?: ReactNode;
  title?: string;
  desc?: string;
  pattern?: boolean;
};

export const TextWithPattern = ({
  className = "",
  pattern = true,
  children,
  title = "Most technologically advanced fish production equipment in the industry",
  desc = "Our catfish is raised in acrylic tanks that use the latest farming\n" +
    "        practices and best management practices. Therefore, Patec Foods delivers\n" +
    "        the best farm-raised catfish in the market.",
}: TextWithPatternProps) => {
  return (
    <div
      className={`lh-regular position-relative align-center flex-grow-1 flex-basis-50-p-cent w-50 ${className}`}
    >
      {children}
      {pattern && (
        <div className="rectangle top-left bg-light-yellow position-absolute" />
      )}
      <h2>{title}</h2>
      <p className="lh-regular">{desc}</p>
    </div>
  );
};

type ImageWithPatternProps = {
  className?: string;
  image?: string;
  bgPattern?: string;
  bgPatternClassName?: string;
};

export const ImageWithPattern = ({
  className = "",
  image = catfishFactory,
  bgPattern = backgroundSquare,
  bgPatternClassName = "",
}: ImageWithPatternProps) => {
  return (
    <div
      className={`w-50 flex-basis-50-p-cent flex-grow-1 position-relative ${className}`}
    >
      {image && <img className="w-100 z-1" src={image} alt="catfish factory" />}
      {bgPattern && (
        <img
          src={bgPattern}
          alt=""
          className={`square-100 bottom-right position-absolute ${bgPatternClassName}`}
        />
      )}
    </div>
  );
};

type SectionProps = {
  children?: ReactNode;
  className?: string;
};

export function Section({ children, className = "" }: SectionProps) {
  return <section className={`mh-500-px ${className}`}>{children}</section>;
}

type SectionWithFlexProp = SectionProps & {
  flexClassName: string;
};
export const SectionWithFlex = ({
  children,
  className = "",
  flexClassName = "",
}: Partial<SectionWithFlexProp>) => {
  return (
    <Section className={className}>
      <div className="d-flex">
        <div className={`w-60 mt--50 mx-auto d-flex ${flexClassName}`}>
          {children}
        </div>
      </div>
    </Section>
  );
};

type CtaProp = {
  title: string;
  link: string;
  linkText: string;
};
export function BottomCta({
  title = "Buy healthy controlled Catfish from Hatchery to Oven",
  linkText = "Order Button",
  link,
}: Partial<CtaProp>) {
  return (
    <div className="bg-green d-flex justify-space-around align-center text-white w-80 h-150 br-2 my-5 mx-auto">
      <h2 className="w-40 text-white">{title}</h2>
      <a
        href={link}
        className="bg-white no-decoration pointer text-green d-flex align-center justify-center no-border br-1 text-center w-150 h-50"
      >
        {linkText}
      </a>
    </div>
  );
}

type CircularImageProp = {
  image: string;
  title: string;
};
export const CircularImageWithSpiral = ({
  image,
  title,
}: Partial<CircularImageProp>) => {
  return (
    <div className="text-center">
      <div className="spiral-img circle">
        <img src={image} className="w-100" alt="" />;
      </div>
      <p className="mt-3 fs-1-2 text-green">{title}</p>
    </div>
  );
};

type CardProp = {
  image: string;
  className: string;
  description: string;
  title: string;
  children: ReactNode;
};
export const CardWithText = ({
  image,
  className = "",
  description = "",
  title = "",
  children,
}: Partial<CardProp>) => {
  return (
    <div className={`card mb-2 br-2 bg-green-light ${className}`}>
      {image && <img className="w-100" src={image} alt="" />}
      {title && description && (
        <div className="p-2 text-green">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      )}
      {children}
    </div>
  );
};

type TimelineProps = {
  data: Array<TimelineDataProps>;
};

type TimelineDataProps = {
  title: string;
  description: string;
};
export const Timeline = ({ data }: Partial<TimelineProps>) => {
  return (
    <div className="timeline">
      <ul>
        {data?.length
          ? data.map((d: TimelineDataProps) => {
              return (
                <li>
                  <div className="right_content">
                    <h2>{d.title}</h2>
                    <p>{d.description}</p>
                  </div>
                </li>
              );
            })
          : null}
        <div style={{ clear: "both" }} />
      </ul>
    </div>
  );
};

type ProductListProp = {
  products: Array<ProductProp>;
};

type ProductProp = {
  name: string;
};

export const ProductList = ({ products }: ProductListProp) => {
  return (
    <ul className="py-2 unstyled-list p-0 w-300px bg-green br-2 text-center">
      {products?.length &&
        products.map((p: ProductProp) => (
          <li className="p-2 white pointer text-white bt-white-1 first-bt-white">
            {p.name}
          </li>
        ))}
    </ul>
  );
};

export const ProductCard = () => {
  return (
    <div className="p-4 w-100">
      <h3>WholeFish</h3>
      <ImageCarousel />
      <div className="d-flex align-start">
        <div>
          <Form.Select label="Size" name={""}>
            <option value="">Whole (80g - 110g)</option>
          </Form.Select>
          <div className="d-flex">
            <Form.CheckBox name="" label="N 4560(Kilogram)" />
            <Form.CheckBox name="" label="N 4560(Kilogram)" />
          </div>
        </div>
        <div>
          <span>Qty</span>
          <div className="d-flex">
            <Button
              type="button"
              title="+"
              className="text-yellow w-100-px height-100px"
            />
            <strong>4</strong>
            <Button
              type="button"
              title="-"
              className="text-yellow w-100-px height-100px"
            />
          </div>
        </div>
      </div>

      <Button
        type="button"
        title="Add to Cart"
        className="w-100 btn-green text-center"
      />
      <p className="text-gray text-center">
        {" "}
        Range per carton <strong>110 - 115</strong>
      </p>
    </div>
  );
};

export const ImageCarousel = ({ image }: any) => {
  return <img src={image} alt="" />;
};
