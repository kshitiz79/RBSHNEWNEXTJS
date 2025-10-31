import React from "react";

const TermsConditions = () => {
  return (
    <div className=" px-10 bg-[#e5e8ea] py-10 shadow-lg rounded-lg mt-20">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Terms & Conditions</h1>

      <h2 className="text-xl font-semibold mt-4">1. Introduction</h2>
      <p className="text-gray-600">
        These Terms and Conditions govern the use of payment gateway integration services provided by RBSH Studio Private Limited. By using our services, you agree to comply with these terms.
      </p>

      <h2 className="text-xl font-semibold mt-4">2. Service Description</h2>
      <p className="text-gray-600">
        RBSH Studio integrates third-party payment gateways to facilitate secure online transactions. We act solely as a technology service provider and do not process payments directly.
      </p>

      <h2 className="text-xl font-semibold mt-4">3. Client Responsibilities</h2>
      <ul className="list-disc list-inside text-gray-600">
        <li>Provide necessary API keys and credentials from the chosen payment gateway provider.</li>
        <li>Ensure compliance with legal and regulatory requirements for payment processing.</li>
        <li>Maintain an active merchant account with the payment gateway provider.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-4">4. Payment and Fees</h2>
      <ul className="list-disc list-inside text-gray-600">
        <li>Clients must pay the agreed service fee before integration begins.</li>
        <li>Additional charges may apply for modifications, maintenance, or troubleshooting beyond the initial integration.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-4">5. Security and Compliance</h2>
      <p className="text-gray-600">
        RBSH Studio follows industry standards for secure payment integrations. We are not liable for security breaches, transaction failures, or disputes arising from third-party payment gateways.
      </p>

      <h2 className="text-xl font-semibold mt-4">6. Limitation of Liability</h2>
      <p className="text-gray-600">
        RBSH Studio is not responsible for failed transactions, chargebacks, or losses due to payment gateway issues. We do not guarantee approval by payment gateway providers.
      </p>

      <h2 className="text-xl font-semibold mt-4">7. Termination</h2>
      <p className="text-gray-600">
        Either party may terminate the service with written notice. No refunds will be provided for completed services.
      </p>

      <h2 className="text-xl font-semibold mt-4">8. Governing Law</h2>
      <p className="text-gray-600">
        These terms shall be governed by the laws of India. Any disputes shall be resolved through arbitration in Noida, Uttar Pradesh.
      </p>

      <h2 className="text-xl font-semibold mt-4">9. Amendments</h2>
      <p className="text-gray-600">
        RBSH Studio reserves the right to update these Terms and Conditions at any time. Clients will be notified of changes as necessary.
      </p>

      <h2 className="text-xl font-semibold mt-4">Contact Information</h2>
      <p className="text-gray-600">📧 Email: info@rbshstudio.com</p>
      <p className="text-gray-600">🌍 Website: rbshstudio.com</p>
    </div>
  );
};

export default TermsConditions;