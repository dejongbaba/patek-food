import React from "react";
import "./footer.scss";
import footerLogo from "../../assets/png/logo.png";
import phoneCalling from "../../assets/svg/Calling.svg";
import { Link } from "react-router-dom";
import { CartButton, CartItem } from "../PatekUI/PatekUi";
import { CartContextType, FooterProps } from "../../type";
import Modal from "../Modal/Modal";
import imageItem from "../../assets/png/fish-item.png";
import Button from "../Button/Button";
import { useCartContext } from "../../context/CartContext";
import Form from "../Form/Form";
import { PaystackConsumer } from "react-paystack";
import { formatNumber, naira } from "../../utils/fx/fx";

function Footer(props: Partial<FooterProps>) {
  const {
    cartItems,
    itemCount,
    onRemoveItem,
    email,
    onChangeEmail,
    total,
    onCloseModal,
    show,
    loading,
    onCheckout,
    payStackProps,
  }: CartContextType = useCartContext();

  return (
    <footer className="w-80 md-w-70 pb-2 md-pb-0 d-flex position-relative flex-column md-flex-row mx-auto bg-pattern">
      <CartButton cartItems={itemCount || 0} onClick={onCloseModal} />
      <div className="md-p-2 flex-grow-1">
        <img className="w-100-px" src={footerLogo} alt="" />
        <div className="d-flex align-space-between">
          <img className="mr-1 " src={phoneCalling} alt="" />
          <div>
            <p className="text-green text-medium">
              <a
                className="text-green no-decoration"
                href="tel:+234 8084 232 2342"
                target="_blank"
                rel="noopener noreferrer"
              >
                +234 8084 232 2342
              </a>
            </p>
            <p>Available 24/7 everyday</p>
            <p className="text-green text-medium">
              <a
                className="text-green no-decoration"
                href="mailto:info@patecfoods.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                info@patecfoods.com
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="md-p-2 flex-grow-1">
        <p className="text-green font-bold">Links</p>
        <ul className="d-flex flex-wrap unstyled-list pl-0 text-gray">
          <li className="w-50">
            <Link className="text-undecorated text-gray" to="/">
              Home
            </Link>
          </li>
          <li className="w-50">
            <Link className="text-undecorated text-gray" to="/about">
              About us
            </Link>
          </li>
          <li className="w-50">
            <Link className="text-undecorated text-gray" to="/products">
              Products
            </Link>
          </li>
          <li className="w-50">
            <Link className="text-undecorated text-gray" to="/contact">
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
      <div className="md-p-2 flex-grow-1">
        <p className="text-green font-bold">Subscribe to our Newsletter</p>
        <div className="d-flex">
          <input
            type="text"
            className="bg-gray-light px-1 no-shadow no-outline no-border br-1 no-border mr-1"
          />
          <button
            type="button"
            className="square-btn  br-0-5 no-border bg-color"
          >
            <i className="fa fas fa-paper-plane text-white" />
          </button>
        </div>
      </div>
      {show && (
        <Modal
          innerClassName="br-1 md-br-2"
          onClick={onCloseModal}
          onNullClick={(e) => e.stopPropagation()}
        >
          <div className="p-1 md-p-4">
            <div className="d-flex align-center md-align-center justify-space-between mb-1">
              {" "}
              <h2>Cart</h2>{" "}
              <span className="pointer" onClick={onCloseModal}>
                Back
              </span>
            </div>
            <div className="h-300 overflow-auto">
              {cartItems?.length
                ? cartItems.map((item: any) => (
                    <CartItem
                      onDelete={() => onRemoveItem(item)}
                      price={item.amount}
                      quantity={item.quantity}
                      image={imageItem}
                      type={item.type}
                      title={item.name}
                    />
                  ))
                : null}
            </div>
            <hr />
            <div className="d-flex justify-space-between align-center">
              <h3>Total</h3>
              <h3 className="font-bold">
                {naira}
                {formatNumber(total)}
              </h3>
            </div>
            <Form.Input
              type="email"
              value={email}
              onChange={onChangeEmail}
              name="email"
              label="Email"
            />

            <PaystackConsumer {...payStackProps}>
              {({ initializePayment }: any) => (
                <Button
                  loading={loading}
                  type={"button"}
                  onClick={() => onCheckout(initializePayment)}
                  title="Checkout"
                  className="w-100 no-border br-1 p-2 bg-green text-center text-white"
                />
              )}
            </PaystackConsumer>
          </div>
        </Modal>
      )}
    </footer>
  );
}

export default Footer;
