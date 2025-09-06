import React from "react";

const RefundPolicy = () => {
  return (
    <div className="bg-[#e5e8ea] px-10  shadow-lg py-10 rounded-lg mt-20">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Refund Policy</h1>

      <h2 className="text-xl font-semibold mt-4">1. No Refunds for Completed Services</h2>
      <p className="text-gray-600">
        RBSH Studio Private Limited does not provide refunds once the payment gateway integration service has been successfully completed and delivered to the client.
      </p>

      <h2 className="text-xl font-semibold mt-4">2. Eligibility for Refunds</h2>
      <p className="text-gray-600">
        Refunds may be considered only in the following cases:
      </p>
      <ul className="list-disc list-inside text-gray-600">
        <li>If the service has not yet been initiated after payment.</li>
        <li>If RBSH Studio is unable to complete the integration due to internal technical limitations.</li>
        <li>If a refund request is made within 3 days of payment and the work has not begun.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-4">3. Requesting a Refund</h2>
      <p className="text-gray-600">
        To request a refund, the client must send an email to info@rbshstudio.com with proof of payment and a detailed reason for the refund request. RBSH Studio will review the request within 7 business days.
      </p>

      <h2 className="text-xl font-semibold mt-4">4. Refund Processing</h2>
      <p className="text-gray-600">
        Approved refunds will be processed within 10 business days via the original payment method.
      </p>

      <h2 className="text-xl font-semibold mt-4">5. Contact Information</h2>
      <p className="text-gray-600">📧 Email: info@rbshstudio.com</p>
      <p className="text-gray-600">🌍 Website: rbshstudio.com</p>
    </div>
  );
};

export default RefundPolicy;