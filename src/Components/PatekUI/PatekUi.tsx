import React, { ReactNode, useRef } from "react";
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
import OwlCarousel from "react-owl-carousel";
import { Link } from "react-router-dom";
import useShowMenu from "../../hooks/useShowMenu";
import { CartButtonProps, CartItemProp } from "../../type";
import Spinner from "../Spinner/Spinner";
import { formatNumber, naira } from "../../utils/fx/fx";

export const ProductSection = () => {
  return (
    <div className="d-flex position-relative my-4 py-2 w-100 md-height-400">
      <img
        className="position-absolute d-none md-d-block w-90 top-left"
        src={yellowBg}
        alt=""
      />
      <img className="position-absolute w-300px top-left" src={leftBg} alt="" />
      <img
        className="position-absolute w-300px top-right--4"
        src={rightBg}
        alt=""
      />
      <div className="w-80 md-w-70 mx-auto d-flex flex-column md-flex-row align-center">
        <img className="w-100 md-w-50" src={catFish} alt="" />
        <div className="text-center md-text-left">
          <h2 className="text-green md-lh-regular">
            High quality products using high quality standards
          </h2>
          <p className="md-lh-regular">
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
  image,
  linkText = "Learn More",
}: Partial<PageTopType>) => {
  const menu = useRef<HTMLElement>(null);
  const hamBurger = useRef<HTMLButtonElement>(null);
  useShowMenu(hamBurger, menu);
  return (
    <>
      <TopNav ref={hamBurger} />
      {/*@ts-ignore */}
      <Nav ref={menu} />
      <Header
        image={image}
        title={title}
        description={description}
        linkText={linkText}
        link={link}
      />
    </>
  );
};

type TextWithPatternProps = {
  className?: string;
  titleClassName?: string;
  descClassName?: string;
  children?: ReactNode;
  title?: string;
  desc?: string;
  pattern?: boolean;
};

export const TextWithPattern = ({
  className = "",
  pattern = true,
  children,
  titleClassName = "",
  descClassName = "",
  title = "Most technologically advanced fish production equipment in the industry",
  desc = "Our catfish is raised in acrylic tanks that use the latest farming\n" +
    "        practices and best management practices. Therefore, Patec Foods delivers\n" +
    "        the best farm-raised catfish in the market.",
}: TextWithPatternProps) => {
  return (
    <div
      className={`md-lh-regular position-relative align-center flex-grow-1 flex-basis-50-p-cent md-w-50 ${className}`}
    >
      {children}
      {pattern && (
        <div className="rectangle bottom-left-4 md-top-left bg-light-yellow position-absolute" />
      )}
      <h2 className={`fs-1-8 ${titleClassName}`}>{title}</h2>
      <p className={`md-lh-regular ${descClassName}`}>{desc}</p>
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
      className={`md-w-50 flex-basis-50-p-cent flex-grow-1 position-relative ${className}`}
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
  return <section className={`mh-450-px ${className}`}>{children}</section>;
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
        <div
          className={`w-80 md-w-60 mt--50 mx-auto d-flex flex-column md-flex-row ${flexClassName}`}
        >
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
  link = "",
}: Partial<CtaProp>) {
  return (
    <div className="bg-green p-1 md-p-0 d-flex justify-space-around flex-column md-flex-row align-center text-white w-80 md-h-150 br-2 my-5 mx-auto">
      <h2 className="md-w-40 text-white text-center md-text-left">{title}</h2>
      <Link
        to={link}
        className="bg-white no-decoration pointer text-green d-flex align-center justify-center no-border br-1 text-center w-150 h-50"
      >
        {linkText}
      </Link>
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
    <div className="text-center mb-2 md-mb-0">
      <div className="spiral-img d-flex align-center flex-column  circle">
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
        <div className="p-1 md-p-2 text-green">
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
          ? React.Children.toArray(
              data.map((d: TimelineDataProps) => {
                return (
                  <li>
                    <div className="right_content">
                      <h2>{d.title}</h2>
                      <p>{d.description}</p>
                    </div>
                  </li>
                );
              })
            )
          : null}
        <div style={{ clear: "both" }} />
      </ul>
    </div>
  );
};

type ProductListProp = {
  products: Array<ProductProp>;
  onClickProduct: (p: any) => void;
};

type ProductProp = {
  name: string;
};

export const ProductList = ({ products, onClickProduct }: ProductListProp) => {
  return (
    <ul className="py-2 unstyled-list p-0 md-w-300px bg-green br-2 text-center position-relative">
      {products?.length &&
        React.Children.toArray(
          products.map((p: ProductProp) => (
            <li
              onClick={(e) => onClickProduct(p)}
              className="p-2 white pointer text-white bt-white-1"
            >
              {p.name}
            </li>
          ))
        )}
    </ul>
  );
};

type ProductCardType = ImageCarouselType & {
  name: string;
  quantity: number;
  page: number;
  size: string | undefined;
  total: number;
  loading: boolean;
  buttonLoading: boolean;
  sizes: Array<any>;
  weights: Array<any>;
  onPlus: () => void;
  onMinus: () => void;
  onAddToCart: () => void;
  onSizeChange: (e: { [key: string]: string }) => void;
};

export const ProductCard = ({
  images,
  name = "WholeFish",
  quantity,
  onPlus,
  onMinus,
  onSizeChange,
  sizes,
  size,
  page,
  total,
  loading,
  buttonLoading,
  onAddToCart,
}: Partial<ProductCardType>) => {
  return (
    <div className="p-2 md-w-60 box-shadow-1 br-2">
      {loading ? (
        <Spinner className="d-flex align-center justify-center" />
      ) : (
        <>
          <h3 className="fs-0-8-rem md-fs-1">{name}</h3>
          <ImageCarousel images={images} />
          <div className="d-flex align-start">
            <div className="md-mr-3 w-100">
              <div className="d-flex flex-column md-flex-row align-start">
                <Form.Select
                  value={size}
                  onChange={onSizeChange}
                  className="flex-grow-1"
                  label="Size"
                  name={"size"}
                >
                  <option value="">Select Size</option>
                  {sizes?.length
                    ? sizes.map((s) => (
                        <option value={s.id}>
                          {s.name} {s.type} {naira}
                          {formatNumber(s.amount)}
                        </option>
                      ))
                    : null}
                  {/*<option value="">Whole (80g - 110g)</option>*/}
                </Form.Select>
                <div className="md-ml-1">
                  <div>
                    <div className="text-yellow fs-0-8-rem mb-0-3">Qty</div>
                  </div>
                  <div className="d-flex align-center">
                    <Button
                      onClick={onMinus}
                      type="button"
                      title="-"
                      className="text-yellow bg-white no-border border-yellow w-50px h-50-px"
                    />
                    <strong className="mx-2">{quantity}</strong>

                    <Button
                      onClick={onPlus}
                      type="button"
                      title="+"
                      className="text-yellow bg-white no-border border-yellow w-50px h-50-px"
                    />
                  </div>
                </div>
              </div>

              <div className="d-flex flex-column md-flex-row mb-2">
                {/*{weights?.length*/}
                {/*  ? weights.map((w) => (*/}
                {/*      <Form.Radio*/}
                {/*        name={w.name}*/}
                {/*        value={w.name}*/}
                {/*        onChange={() =>*/}
                {/*          onWeightChange ? onWeightChange(w) : null*/}
                {/*        }*/}
                {/*        label={w.name}*/}
                {/*      />*/}
                {/*    ))*/}
                {/*  : null}*/}
                {/*<Form.Radio*/}
                {/*  name="weight"*/}
                {/*  value="4506"*/}
                {/*  onChange={onWeightChange}*/}
                {/*  label="N 4560(Kilogram)"*/}
                {/*/>*/}
                {/*<Form.Radio*/}
                {/*  name="weight"*/}
                {/*  value="4506"*/}
                {/*  onChange={onWeightChange}*/}
                {/*  label="N 4560(Kilogram)"*/}
                {/*/>*/}
              </div>
            </div>
          </div>

          <Button
            loading={buttonLoading}
            onClick={onAddToCart}
            type="button"
            title="Add to Cart"
            className="w-100 btn-green md-px-5 py-1 br-0-5 no-border text-center"
          />
          <p className="text-gray text-center">
            Range per carton{" "}
            <strong>
              {page} - {total}
            </strong>
          </p>
        </>
      )}
    </div>
  );
};

type ImageCarouselType = {
  images?: Array<string>;
};
const owlConfig = {
  loop: true,
  margin: 10,
  navigation: true,
  singleItem: true,
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
export const ImageCarousel = ({ images }: ImageCarouselType) => {
  return (
    <OwlCarousel {...owlConfig}>
      {images?.length &&
        React.Children.toArray(
          images.map((i: string) => <img src={i} className=" item" alt="" />)
        )}
    </OwlCarousel>
  );
};
export const CartItem = ({
  title,
  type,
  image,
  quantity,
  price,
  onDelete,
}: CartItemProp) => {
  return (
    <div className="d-flex mb-1 justify-space-around align-center ">
      <i className="fa fa-trash red mr-1" onClick={onDelete} />
      <img className=" w-100-px md-w-100-px mr-1" src={image} alt="cart item" />
      <div className="flex-grow-1">
        <h3 className="font-bold text-green">{title}</h3>
        <p className="text-gray fs-1">
          <span className="mr-1">Qty:{quantity}</span> <span>Type:{type}</span>
        </p>
      </div>
      <span className="font-bold d-none md-d-block">
        {naira}
        {formatNumber(price)}
      </span>
    </div>
  );
};
export const CartButton = ({ onClick, cartItems }: CartButtonProps) => {
  return (
    <Button
      onClick={onClick}
      type="button"
      title={<i className="fas fa-shopping-cart fs-1" />}
      className="br-50 z-10 bg-green position-fixed no-border bottom-right-4 text-white w-70-px h-70-px"
    >
      <div className="w-30-px h-30 position-absolute br-50-p-cent box-shadow-1 top-right-4 bg-white text-green d-flex align-center justify-center">
        {cartItems}
      </div>
    </Button>
  );
};
