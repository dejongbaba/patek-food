import React from "react";
import {
  CardWithText,
  PageTop,
  Section,
} from "../../Components/PatekUI/PatekUi";
import Footer from "../../Components/Footer/Footer";
import Form from "../../Components/Form/Form";
import Button from "../../Components/Button/Button";
import contactFactory from "../../assets/png/contact-factory.png";
// import { useForm } from "react-hook-form";
// import emailjs from "emailjs-com";
// import { useToasts } from "react-toast-notifications";

function Contact() {
  // const [, setLoading] = useState(false);
  // const { addToast } = useToasts();
  //
  // const defaultValues = {
  //   from_email: "",
  //   from_name: "",
  //   message: "",
  // };
  // const { register, handleSubmit, reset } = useForm({
  //   defaultValues,
  // });
  // const onSubmit = (data: { [key: string]: string }) => {
  //   sendEmail(data);
  // };
  //
  // function sendEmail(data: { [key: string]: string }) {
  //   setLoading(true);
  //   console.log(
  //     process.env.REACT_APP_SERVICE_ID,
  //     process.env.REACT_APP_TEMPLATE_ID,
  //     data,
  //     process.env.REACT_APP_USER_ID
  //   );
  //
  //   emailjs
  //     .send(
  //       // @ts-ignore
  //       process.env.REACT_APP_SERVICE_ID,
  //       process.env.REACT_APP_TEMPLATE_ID,
  //       data,
  //       process.env.REACT_APP_USER_ID
  //     )
  //     .then(
  //       (result) => {
  //         console.log("success", result);
  //         setLoading(false);
  //         addToast("Email Sent! I will reach out to you personally!", {
  //           appearance: "success",
  //           autoDismiss: true,
  //         });
  //         reset({ from_email: "", from_name: "", message: "" });
  //       },
  //       (error) => {
  //         setLoading(false);
  //         addToast("An Error occurred trying to send the email!", {
  //           appearance: "error",
  //           autoDismiss: true,
  //         });
  //         console.log("error", error);
  //       }
  //     );
  // }
  // @ts-ignore
  return (
    <div>
      <PageTop image={contactFactory} title="Get in Touch with Us" />
      <div className="md--mt-50 w-70 mx-auto position-relative z-1 md-d-grid md-col-3 md-row-1 md-gap-2">
        <CardWithText className="bg-white mt-2 md-mt-0 d-flex flex-column justify-center align-center text-center box-shadow-1 p-2 font-bold">
          <i className="fa fas fa-phone text-green text-center" />
          <p className=" text-green">+234 802 9432 334</p>
        </CardWithText>{" "}
        <CardWithText className="bg-white align-center text-center box-shadow-1 p-2">
          <i className="fa fas fa-map text-green " />
          <p className="text-center text-green font-bold">
            No 1 Fawole Lane, Obanikoro, Off Ikorodu Road, Lagos
          </p>
          <hr />
          <p className=" text-green font-bold">
            Shao-Malete Road, Opp Bartolomew School of Nursing, Moro LGA, Kwara
            State
          </p>
        </CardWithText>
        <CardWithText className="bg-white d-flex flex-column justify-center align-center text-center box-shadow-1 p-2">
          <i className="fa fas fa-envelope text-green " />
          <p className=" text-green font-bold">info@patecfoods.com</p>
        </CardWithText>
      </div>

      <h2 className="text-green text-center">Get in Touch with Us</h2>
      <Section>
        <Form className="w-100">
          <div className="d-flex flex-column md-flex-row align-center">
            <Form.Input className="md-mr-1" label="Name" type="text" />
            <Form.Input
              // // @ts-ignore
              // ref={register({
              //   required: true,
              //   pattern: {
              //     message: "input correct email",
              //   },
              // })}
              label={"Phone"}
              name={"from_phone"}
              type={"text"}
              placeHolder={"Enter phone number"}
            />
          </div>
          <div className="d-flex flex-column md-flex-row align-center">
            <Form.Input
              // // @ts-ignore
              // ref={register({
              //   required: true,
              //   pattern: {
              //     message: "input correct email",
              //   },
              // })}
              label={"Email"}
              className="md-mr-1"
              name={"from_email"}
              type={"email"}
              placeHolder={"Enter email"}
            />
            <Form.Select label="Reason">
              <option value="">Order</option>
              <option value="">Order</option>
            </Form.Select>
          </div>
          <Form.TextArea
            name={"message"}
            // @ts-ignore
            // ref={register}
            placeHolder={"message"}
          />
          <Button
            type="submit"
            className="btn-green text-white br-1 no-border py-1 px-5"
            title={"Send Message"}
          />
        </Form>
      </Section>
      <Footer />
    </div>
  );
}

export default Contact;
