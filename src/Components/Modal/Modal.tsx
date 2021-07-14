import * as React from "react";
import { ReactNode } from "react";
import "./Modal.scss";

export interface Props {
  children?: ReactNode;
  className?: string;
  innerClassName?: string;
  onNullClick: (e: any) => void;
  onClick?: (e: any) => void;
}

function Modal({
  children,
  onClick,
  onNullClick,
  className,
  innerClassName,
}: Props) {
  return (
    <div
      className={`modal ${className ? className : ""}`}
      onClick={(e) => onClick && onClick(e)}
    >
      <div className={`modalBlock`}>
        <ModelContentBlock
          className={` ${innerClassName || ""}`}
          onClick={(e) => onClick && onClick(e)}
          onNullClick={onNullClick}
        >
          {children}
        </ModelContentBlock>
      </div>
    </div>
  );
}

type ContentBlockProps = {
  children: ReactNode;
  className: string;
  onNullClick: (e: any) => void;
  onClick: (e: any) => void;
};

const ModelContentBlock = ({
  children,
  onNullClick,
  onClick,
  className,
}: Partial<ContentBlockProps>) => {
  return (
    <div className={`modalWrapper position-relative `}>
      {/*<div className="closeModal position-absolute">*/}
      {/*  <img src={image} alt="" onClick={onClick} />*/}
      {/*</div>*/}
      <div
        className={`modalBlock-content ${className || ""}`}
        onClick={(e) => onNullClick && onNullClick(e)}
      >
        {children}
      </div>
    </div>
  );
};

Modal.ContentBlock = ModelContentBlock;

export default Modal;
