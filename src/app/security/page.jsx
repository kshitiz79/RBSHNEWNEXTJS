"use client";
import React from "react";

const SecurityPolicy = () => {
  return (
    <section className="bg-[#e5e8ea] py-12  mt-20">
      <div className="px-10">
        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 ">
          Security Policy
        </h1>
        <p className="text-gray-600  mb-12">
          At <span className="font-semibold">RBSH Studio Private Limited</span>, 
          we prioritize the protection of our clients&apos; information and data. 
          Our security policy is designed to ensure that all sensitive data, 
          both personal and professional, is handled with the utmost care and diligence. 
          This policy outlines the security measures we have in place to protect client 
          data and ensure safe handling of all projects.
        </p>

        {/* Policy Sections */}
        <div className="space-y-10">
          {/* Section 1 */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              1. Data Protection and Privacy
            </h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>We adhere to strict data protection protocols to securely store and process personal, financial, or sensitive information.</li>
              <li>All client data is stored in secure, encrypted servers with controlled access.</li>
              <li>We commit to using data solely for providing agreed services and never share it with third parties without explicit consent, unless required by law.</li>
            </ul>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              2. Confidentiality Agreement
            </h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>All employees, contractors, and service providers are bound by confidentiality agreements.</li>
              <li>Project details, designs, and strategies shared with us remain confidential and protected from unauthorized disclosure.</li>
            </ul>
          </div>

          {/* Section 3 */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              3. Secure Communication Channels
            </h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>We use encrypted email services and secure file-sharing platforms for communication.</li>
              <li>Clients are encouraged to use secure, password-protected platforms when sharing sensitive information.</li>
            </ul>
          </div>

          {/* Section 4 */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              4. Cybersecurity Measures
            </h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>We use firewalls, anti-malware tools, and secure networks to safeguard systems and client data.</li>
              <li>Our team is trained in the latest security practices to ensure safe data handling.</li>
            </ul>
          </div>

          {/* Section 5 */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              5. Regular Security Audits
            </h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>We conduct regular audits and vulnerability assessments.</li>
              <li>Any identified risks are promptly addressed to maintain high security standards.</li>
            </ul>
          </div>

          {/* Section 6 */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              6. Access Control
            </h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Access to client data is limited to authorized personnel only.</li>
              <li>Role-based access controls (RBAC) ensure access only where necessary.</li>
              <li>Background checks are performed before employees or contractors gain access to sensitive data.</li>
            </ul>
          </div>

          {/* Section 7 */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              7. Incident Response Plan
            </h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>In case of a breach or incident, we follow a structured response plan.</li>
              <li>Affected clients are notified promptly, and corrective measures are taken immediately.</li>
            </ul>
          </div>

          {/* Section 8 */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              8. Client Responsibilities
            </h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Clients should adopt strong security practices, including using strong passwords and securing their devices.</li>
              <li>Avoid sharing sensitive data over unsecured communication channels.</li>
            </ul>
          </div>

          {/* Section 9 */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              9. Compliance with Laws
            </h2>
            <p className="text-gray-600">
              RBSH Studio complies with all applicable local, national, and 
              international data protection laws and regulations, including 
              GDPR and the Information Technology Act, 2000 (India).
            </p>
          </div>
        </div>

        {/* Agreement */}
        <p className="mt-12 text-gray-700  italic">
          By engaging with RBSH Studio, clients acknowledge and agree to our 
          security practices as outlined in this policy. We are committed to 
          ensuring the highest level of security for all client data and protecting 
          the integrity of our work.
        </p>
      </div>
    </section>
  );
};

export default SecurityPolicy;
