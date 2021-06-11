import * as React from "react";
import { ReactNode } from "react";
import "./Form.scss";
import Spinner from "../Spinner/Spinner";

export interface IProps {
  className?: string;
  titleClassName?: string;
  title?: string | ReactNode;
  onCancel?: () => void;
  onSubmit?: (e: any) => void;
  children?: ReactNode;
  footer?: ReactNode;
}

function Form({
  title,
  className,
  titleClassName,
  footer,
  onCancel,
  onSubmit,
  children,
}: IProps) {
  return (
    <div className={`form ${className ? className : ""}`}>
      <div className="form-container">
        <form
          className="form-container__content"
          onSubmit={(e) => onSubmit && onSubmit(e)}
        >
          {children}
        </form>
      </div>
      {footer}
    </div>
  );
}

type FormFooterNavProps = {
  children: ReactNode;
  className?: string;
};

function Footer({ children, className }: FormFooterNavProps) {
  return (
    <div
      className={`form-container__footer d-flex ${className ? className : ""}`}
    >
      {children}
    </div>
  );
}

type InputProps = {
  name?: string;
  value?: string;
  className?: string;
  label?: string;
  dropdown?: true;
  inputClassName?: string;
  defaultValue?: string;
  children?: ReactNode;
  aside?: ReactNode;
  onChange?: (e: any) => void;
  placeHolder?: string;
  error?: string;
  type?: string;
  required?: boolean;
  disabled?: boolean;
};

function Input({
  placeHolder,
  onChange,
  error,
  className,
  inputClassName,
  dropdown,
  disabled,
  children,
  label,
  type,
  defaultValue,
  required,
  aside,
  value,
  name,
}: InputProps) {
  return (
    <div
      className={`form-container__contentInput ${className ? className : ""}`}
    >
      <small>{label}</small>
      {children ? (
        children
      ) : (
        <>
          <input
            name={name}
            disabled={disabled}
            type={type}
            defaultValue={defaultValue}
            value={value}
            required={required}
            className={`input ${inputClassName ? inputClassName : ""}`}
            onChange={(e) => onChange && onChange(e)}
            placeholder={placeHolder}
          />
        </>
      )}

      {error ? <p>{error}</p> : ""}
    </div>
  );
}

type SelectProps = {
  value?: string;
  className?: string;
  name?: string;
  inputClassName?: string;
  onChange?: (e: any) => void;
  placeHolder?: string;
  children: ReactNode;
  required?: boolean;
  disabled?: boolean;
  error?: string;
  label: string;
};

function Select({
  placeHolder,
  children,
  onChange,
  name,
  error,
  className,
  disabled,
  required,
  inputClassName,
  value,
  label,
}: SelectProps) {
  const selectChange = (e: React.ChangeEvent<HTMLSelectElement>) =>
    onChange && onChange(e);
  return (
    <div
      className={`form-container__contentInput ${className ? className : ""}`}
    >
      <small>{label}</small>
      <select
        name={name}
        disabled={disabled}
        required={required}
        value={`${value ? value : ""}`}
        className={`${inputClassName ? inputClassName : ""}`}
        placeholder={placeHolder}
        onChange={selectChange}
      >
        {children}
      </select>
      {error ? <small className="error">{error}</small> : ""}
    </div>
  );
}

type CheckBoxProps = {
  checked?: boolean;
  className?: string;
  inputClassName?: string;
  name?: string;
  required?: boolean;
  value?: string;
  onChange?: (e: any) => void;
  placeHolder?: string;
  error?: string;
  label: string;
};

function CheckBox({
  placeHolder,
  onChange,
  error,
  className,
  inputClassName,
  checked,
  required,
  name,
  value,
  label,
}: CheckBoxProps) {
  return (
    <div className={` ${className ? className : ""}`}>
      <span
        className={`checkBoxContainer ${inputClassName ? inputClassName : ""}`}
      >
        <input
          type="checkbox"
          placeholder={placeHolder}
          name={name}
          value={value}
          required={required}
          onChange={(e) => onChange && onChange(e)}
          checked={checked}
          className={`${inputClassName ? inputClassName : ""}`}
        />
        <span className="checkmark" />
        <small>{label}</small>
      </span>
      {error ? <p>{error}</p> : ""}
    </div>
  );
}

function Radio({
  placeHolder,
  onChange,
  error,
  className,
  inputClassName,
  checked,
  required,
  name,
  value,
  label,
}: CheckBoxProps) {
  return (
    <div className={`radio d-flex align-center ${className ? className : ""}`}>
      <span
        className={`d-flex align-center justify-center ${
          inputClassName ? inputClassName : ""
        }`}
      >
        <input
          type="radio"
          placeholder={placeHolder}
          name={name}
          value={value}
          required={required}
          onChange={(e) => onChange && onChange(e)}
          checked={checked}
          className={`${inputClassName ? inputClassName : ""}`}
        />
        <small className="pb-0">{label}</small>
      </span>
      {error ? <p>{error}</p> : ""}
    </div>
  );
}

type ButtonProps = {
  className?: string;
  spinnerClass?: string;
  text?: string;
  disabled?: boolean;
  loading?: boolean;
  type: "button" | "submit" | "reset";
  onClick?: () => void;
};
const Button = ({
  text,
  type,
  className,
  onClick,
  spinnerClass,
  loading,
  disabled,
}: ButtonProps) => {
  return (
    <section>
      {loading ? (
        <section className={spinnerClass}>
          <Spinner />
        </section>
      ) : (
        <button
          disabled={disabled}
          onClick={onClick}
          className={`button--blue ${
            disabled ? "button__disabled" : ""
          } ${className}`}
          type={type}
        >
          <span className="btn__text">{text}</span>
        </button>
      )}
    </section>
  );
};

export interface TextAreaProps {
  className?: string;
  label?: string;
  name?: string;
  value?: string;
  onChange?: () => void;
}

const TextArea = ({
  name,
  value,
  onChange,
  label,
  className,
}: TextAreaProps) => {
  return (
    <div
      className={`form-container__contentInput ${className ? className : ""}`}
    >
      <small>{label}</small>
      <textarea
        rows={5}
        onChange={onChange}
        name={name}
        className={`textarea ${className ? className : ""}`}
        contentEditable={"false"}
      >
        {value}
      </textarea>
    </div>
  );
};

Form.Footer = Footer;
Form.Input = Input;
Form.Select = Select;
Form.CheckBox = CheckBox;
Form.TextArea = TextArea;
Form.Radio = Radio;
Form.Button = Button;

export default Form;
