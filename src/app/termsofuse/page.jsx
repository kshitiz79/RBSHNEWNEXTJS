import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="px-10 py-10 bg-[#e5e8ea] shadow-lg rounded-lg mt-20">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Privacy Policy</h1>

      <h2 className="text-xl font-semibold mt-4">1. Introduction</h2>
      <p className="text-gray-600">
        RBSH Studio Private Limited is committed to protecting your privacy. This Privacy Policy outlines how we collect, use, and safeguard your information when you use our payment gateway integration services.
      </p>

      <h2 className="text-xl font-semibold mt-4">2. Information We Collect</h2>
      <p className="text-gray-600">We may collect the following information from clients:</p>
      <ul className="list-disc list-inside text-gray-600">
        <li><strong>Personal Information:</strong> Name, email, phone number, and company details.</li>
        <li><strong>Billing Information:</strong> Payment details required for service transactions.</li>
        <li><strong>Technical Information:</strong> API keys, merchant credentials, and integration preferences.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-4">3. How We Use Your Information</h2>
      <p className="text-gray-600">We use the collected information to:</p>
      <ul className="list-disc list-inside text-gray-600">
        <li>Provide and customize payment gateway integration services.</li>
        <li>Communicate service updates and support.</li>
        <li>Ensure security and compliance with legal requirements.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-4">4. Data Security</h2>
      <p className="text-gray-600">
        We implement industry-standard security measures to protect your information. However, we are not liable for breaches occurring due to third-party payment providers or external threats.
      </p>

      <h2 className="text-xl font-semibold mt-4">5. Sharing of Information</h2>
      <p className="text-gray-600">
        We do not sell or rent client data. However, we may share relevant details with:
      </p>
      <ul className="list-disc list-inside text-gray-600">
        <li>Payment gateway providers for integration purposes.</li>
        <li>Regulatory authorities if required by law.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-4">6. Retention of Data</h2>
      <p className="text-gray-600">
        We retain data only as long as necessary for service fulfillment and legal compliance. Upon request, we will delete or anonymize client data after the service period.
      </p>

      <h2 className="text-xl font-semibold mt-4">7. Cookies and Tracking Technologies</h2>
      <p className="text-gray-600">
        Our website may use cookies for analytics and improved user experience. Users can manage cookie preferences via browser settings.
      </p>

      <h2 className="text-xl font-semibold mt-4">8. Third-Party Links</h2>
      <p className="text-gray-600">
        Our services may contain links to third-party payment providers. We are not responsible for their privacy practices and encourage users to review their policies.
      </p>

      <h2 className="text-xl font-semibold mt-4">9. Your Rights</h2>
      <p className="text-gray-600">Clients have the right to:</p>
      <ul className="list-disc list-inside text-gray-600">
        <li>Request access, updates, or deletion of their data.</li>
        <li>Withdraw consent for data usage at any time.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-4">10. Changes to This Policy</h2>
      <p className="text-gray-600">
        RBSH Studio reserves the right to modify this Privacy Policy. Updates will be reflected on our website, and clients will be notified as necessary.
      </p>

      <h2 className="text-xl font-semibold mt-4">11. Contact Us</h2>
      <p className="text-gray-600">For privacy-related inquiries, contact us at:</p>
      <p className="text-gray-600">📧 <strong>Email:</strong> info@rbshstudio.com</p>
      <p className="text-gray-600">🌍 <strong>Website:</strong> <a href="https://rbshstudio.com" className="text-blue-600 hover:underline">rbshstudio.com</a></p>
    </div>
  );
};

export default PrivacyPolicy;