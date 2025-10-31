"use client";
import React from "react";

const CancellationPolicy = () => {
  return (
    <section className="bg-[#e5e8ea] py-12 px-10 mt-20">
      <div className="">
        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 ">
          Cancellation Policy
        </h1>
        <p className="text-gray-600  mb-12">
          At <span className="font-semibold">RBSH Studio Private Limited</span>, 
          we are committed to delivering exceptional creative services. However, 
          we understand that circumstances may require changes to project timelines. 
          The following cancellation policy outlines the terms and conditions for cancelling services:
        </p>

        {/* Policy Sections */}
        <div className="space-y-10">
          {/* Section 1 */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              1. Cancellation by the Client
            </h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>
                <span className="font-medium">Design Services:</span> If the client decides 
                to cancel the project after the work has been initiated but before its completion, 
                a <span className="font-semibold">50% cancellation fee</span> will be applied.
              </li>
              <li>
                <span className="font-medium">Consultation Services:</span>
                <ul className="list-disc list-inside ml-6 space-y-1">
                  <li>Cancellations made at least <b>48 hours</b> prior to the scheduled consultation will incur <b>no charge</b>.</li>
                  <li>Cancellations made <b>within 48 hours</b> of the scheduled consultation will incur a <b>30% cancellation fee</b>.</li>
                </ul>
              </li>
            </ul>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              2. Cancellation by RBSH Studio
            </h2>
            <p className="text-gray-600">
              RBSH Studio reserves the right to cancel a project or consultation 
              in the event of unforeseen circumstances or force majeure. In such 
              cases, clients will be notified promptly, and any advance payments 
              made will be <b>fully refunded</b>.
            </p>
          </div>

          {/* Section 3 */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">3. Refunds</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Any refundable amount will be processed within <b>7 business days</b>.</li>
              <li>Refunds will be issued via the original payment method.</li>
            </ul>
          </div>

          {/* Section 4 */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              4. Changes in Scope of Work
            </h2>
            <p className="text-gray-600">
              If the client requests changes to the scope of the project after 
              work has commenced, this may result in adjustments to the timeline 
              and pricing. Such changes will be addressed separately.
            </p>
          </div>

          {/* Section 5 */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              5. Non-Refundable Charges
            </h2>
            <p className="text-gray-600">
              Certain third-party costs, such as stock images, domain registration, 
              and licensing fees, are non-refundable, even in the event of a cancellation.
            </p>
          </div>

          {/* Section 6 */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              6. Force Majeure
            </h2>
            <p className="text-gray-600">
              RBSH Studio will not be held responsible for delays or cancellations 
              resulting from events beyond our control, including but not limited 
              to natural disasters, government regulations, strikes, or other 
              unforeseen circumstances.
            </p>
          </div>
        </div>

        {/* Agreement */}
        <p className="mt-12 text-gray-700 italic">
          By engaging with RBSH Studio, the client acknowledges and agrees to 
          the terms set forth in this cancellation policy.
        </p>
      </div>
    </section>
  );
};

export default CancellationPolicy;
