import React, { useState } from "react";
import useShop from "../ShopContext";

const Payments = () => {
  const { total } = useShop();
  const [paymentMethod, setPaymentMethod] = useState("");
  const [message, setMessage] = useState("");

  const handleCheckout = () => {
    if (!paymentMethod) {
      setMessage("Please choose a payment method.");
      return;
    }

    if (paymentMethod === "card") {
      setMessage("Redirecting to card payment...");
    } else {
      setMessage("Order placed successfully with Cash on Delivery!");
    }
  };

  return (
    <div className="lg:w-1/3">
      <div className="border p-4 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">
          Choose Payment Method
        </h2>

        <div className="space-y-4">
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              name="payment"
              type="radio"
              value="card"
              checked={paymentMethod === "card"}
              onChange={(e) => {
                setPaymentMethod(e.target.value);
                setMessage("");
              }}
              className="text-pink-600"
            />
            <span>Card Payment</span>
          </label>

          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              name="payment"
              type="radio"
              value="cash"
              checked={paymentMethod === "cash"}
              onChange={(e) => {
                setPaymentMethod(e.target.value);
                setMessage("");
              }}
              className="text-pink-600"
            />
            <span>Cash On Delivery</span>
          </label>
        </div>

        <div className="mt-6 border-t pt-6">
          <div className="flex justify-between items-center mb-4">
            <span className="text-lg font-semibold text-gray-600">
              Subtotal
            </span>

            <span className="text-lg font-semibold text-gray-600">
              ${total}
            </span>
          </div>

          <div className="flex justify-between items-center mb-4">
            <span className="text-2xl font-semibold text-pink-600">
              Total
            </span>

            <span className="text-2xl font-semibold text-pink-600">
              ${total}
            </span>
          </div>

          {message && (
            <p className="mb-4 text-sm text-center font-medium text-pink-600">
              {message}
            </p>
          )}

          <div className="mt-6">
            <button
              onClick={handleCheckout}
              className="w-full bg-pink-600 text-white px-5 py-2 rounded-lg shadow hover:bg-pink-700 transition-colors duration-200"
            >
              Proceed To Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payments;