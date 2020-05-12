import React, { useContext } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { CreditCard } from "react-kawaii";

import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import "./Checkout.scss";
import { ItemContext } from "../components/Cards/ItemContext";
import { useState } from "react";

const CheckoutForm = () => {
  const { cart } = useContext(ItemContext);
  const stripe = useStripe();
  const elements = useElements();

  const [face, setFace] = useState("happy");
  const [customer, setCustomer] = useState({
    name: "",
    address: "",
    zipcode: "",
    phone: "",
    email: "",
  });

  function handleChange(e) {
    setCustomer({ ...customer, [e.target.name]: e.target.value });
  }

  function handleFace() {
    let face;
    for (let i = 0; i < Object.keys(customer); i++) {
      console.log(Object.values(customer)[i]);
      if (Object.values(customer)[i] === "") {
        face = "sad";
        return;
      }

      face = "blissful";
    }
    return face;
  }

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const cardElement = elements.getElement(CardElement);

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      console.log("[error]", error);
      setFace("shocked");
    } else {
      console.log("[PaymentMethod]", paymentMethod);
      setFace("blissful");
    }
  };

  return (
    <>
      <form className="checkout" onSubmit={handleSubmit}>
        <row>
          <input
            name="name"
            placeholder="Full name"
            value={customer.name}
            onChange={handleChange}
          />
          <input
            name="address"
            placeholder="Address"
            value={customer.address}
            onChange={handleChange}
          />{" "}
          <input
            name="zipcode"
            placeholder="Zipcode"
            value={customer.zipcode}
            onChange={handleChange}
          />
          <input
            name="email"
            placeholder="Email"
            value={customer.email}
            onChange={handleChange}
          />
          <input
            name="phone"
            placeholder="Phone number"
            value={customer.phone}
            onChange={handleChange}
          />
        </row>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
            hidePostalCode: true,
          }}
        />
        <button
          type="submit"
          disabled={
            !stripe ||
            (!customer.name ||
              !customer.address ||
              !customer.zipcode ||
              !customer.email ||
              !customer.phone)
          }
          onClick={handleFace}
        >
          Pay ${cart.total}
        </button>
        <CreditCard
          className="cardSVG"
          size={200}
          mood={face}
          color="#83D1FB"
        />
      </form>
    </>
  );
};

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe("pk_test_6pRNASCoBOKtIshFeQd4XMUh");

const App = () => {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
};

export default App;
