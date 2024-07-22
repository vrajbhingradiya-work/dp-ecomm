import CustomerInfoForm from "@/components/createdComponents/customerForm/CustomerInfoForm";
import React from "react";

function page() {
  return (
    <div className="p-16 flex flex-col gap-8 md:gap-16 justify-center items-center">
      <CustomerInfoForm />
    </div>
  );
}

export default page;
