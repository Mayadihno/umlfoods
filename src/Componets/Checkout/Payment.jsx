import React from "react";
import Review from "./Review";
import { Divider, Typography } from "@mui/material";
import FormCom from "./FormCom";
import ScrollTop from "../ScrolTop/ScrollTop";
import "../Checkout/Payment.css";

const PaymentForm = ({
  checkOutToken,
  backStep,
  shippingData,
  nextStep,
  refreshCart,
}) => {
  return (
    <React.Fragment>
      <ScrollTop>
        <Review checkOutToken={checkOutToken} />
        <Divider />
        <Typography variant="h6" gutterBottom style={{ margin: "20px 0px" }}>
          Payment Method
        </Typography>
        <Typography variant="body1" gutterBottom style={{ margin: "20px 0px" }}>
          Choose any Method Of Payment
        </Typography>
        <div className="payment">
          <a
            href="https://www.paypal.com/paypalme/3MLogisticSolutionDK?country.x=DK&locale.x=en_US"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://campbellssweets.com/wp-content/uploads/2020/11/paypal-logo.png"
              alt=""
              className="img-fluid"
            />
          </a>
          <a href="/#" className="mobile-pay">
            <img
              src="https://iconape.com/wp-content/files/ft/76288/svg/mobilepay.svg"
              alt=""
              className="img-fluid mobilePay"
            />
            <span className="span">4542226658</span>
          </a>
          <p>Payment On Delivery</p>
        </div>
        <FormCom
          checkOutToken={checkOutToken}
          backStep={backStep}
          shippingData={shippingData}
          nextStep={nextStep}
          refreshCart={refreshCart}
        />
      </ScrollTop>
    </React.Fragment>
  );
};

export default PaymentForm;
