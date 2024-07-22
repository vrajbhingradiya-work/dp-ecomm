import Checkout from "@/components/createdComponents/checkout-page/CheckoutPage";
import React from "react";

function page() {
  return (
    <div className="p-16 flex flex-col gap-8 md:gap-16 justify-center items-center">
      <Checkout />
    </div>
  );
}

export default page;
