"use client";
import React from "react";

const GrievancePolicy = () => {
  return (
    <section className="bg-[#e5e8ea] py-12 mt-20">
      <div className="px-10">
        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 ">
          Grievance Redressal Policy
        </h1>
        <p className="text-gray-600  mb-12">
          At <span className="font-semibold">RBSH Studio Private Limited</span>, 
          we are committed to ensuring client satisfaction and addressing concerns 
          promptly and effectively. This policy provides a clear process for raising 
          issues and ensures fair, transparent, and timely resolution.
        </p>

        {/* Sections */}
        <div className="space-y-10">
          {/* Section 1 */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">1. Objective</h2>
            <p className="text-gray-600">
              The primary objective of our Grievance Redressal Policy is to ensure 
              that any issues or complaints raised by clients are addressed promptly 
              and effectively. We aim to provide a transparent, efficient, and fair 
              process for resolving grievances.
            </p>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              2. How to File a Grievance
            </h2>
            <ol className="list-decimal list-inside text-gray-600 space-y-4">
              <li>
                <span className="font-medium">Step 1: Contact the Assigned Account Manager/Project Lead</span>  
                <p className="ml-6">
                  Reach out to your assigned account manager or project lead first, as 
                  they have direct knowledge of your project and can work with you to 
                  resolve the issue.
                </p>
              </li>
              <li>
                <span className="font-medium">Step 2: Submit the Grievance via Email</span>  
                <p className="ml-6">
                  If unresolved, submit your grievance to{" "}
                  <a href="mailto:grievance@rbshstudio.com" className="text-blue-600 underline">
                    grievance@rbshstudio.com
                  </a>{" "}
                  with the following details:
                </p>
                <ul className="list-disc list-inside ml-12 space-y-1">
                  <li>Your name and contact details</li>
                  <li>A detailed description of the grievance</li>
                  <li>Supporting documentation or evidence (if applicable)</li>
                  <li>Your preferred resolution or expectation</li>
                </ul>
              </li>
              <li>
                <span className="font-medium">Step 3: Acknowledgement</span>  
                <p className="ml-6">
                  We will acknowledge receipt of your grievance within{" "}
                  <b>2 business days</b> and provide you with a unique reference number.
                </p>
              </li>
            </ol>
          </div>

          {/* Section 3 */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              3. Grievance Resolution Process
            </h2>
            <ol className="list-decimal list-inside text-gray-600 space-y-4">
              <li>
                <span className="font-medium">Step 1: Investigation</span> – Our team will review project 
                files, communication logs, and consult relevant members to assess the grievance.
              </li>
              <li>
                <span className="font-medium">Step 2: Resolution Proposal</span> – A response will be 
                provided within <b>7 business days</b>. If more time is needed, we will notify you.
              </li>
              <li>
                <span className="font-medium">Step 3: Resolution Implementation</span> – Agreed resolutions 
                will be implemented immediately (e.g., project adjustments, compensation).
              </li>
              <li>
                <span className="font-medium">Step 4: Follow-Up</span> – We will follow up within{" "}
                <b>14 days</b> to confirm satisfaction.
              </li>
            </ol>
          </div>

          {/* Section 4 */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">4. Escalation Process</h2>
            <p className="text-gray-600">
              If not satisfied with the resolution, clients may escalate the grievance 
              to senior management at{" "}
              <a href="mailto:escalation@rbshstudio.com" className="text-blue-600 underline">
                escalation@rbshstudio.com
              </a>. A senior team member will review and expedite the resolution.
            </p>
          </div>

          {/* Section 5 */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">5. Timeframe for Resolution</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li><b>Acknowledgment:</b> Within 2 business days</li>
              <li><b>Investigation & Proposal:</b> Within 7 business days</li>
              <li><b>Resolution Implementation:</b> Based on grievance nature</li>
              <li><b>Follow-Up:</b> Within 14 business days</li>
            </ul>
          </div>

          {/* Section 6 */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">6. Confidentiality</h2>
            <p className="text-gray-600">
              All grievances are handled with strict confidentiality. Information is shared 
              only with individuals necessary to address and resolve the matter.
            </p>
          </div>

          {/* Section 7 */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">7. Continuous Improvement</h2>
            <p className="text-gray-600">
              We treat grievances as opportunities to improve our services. Each case is 
              reviewed for systemic issues, and feedback is used to enhance operations 
              and customer service.
            </p>
          </div>
        </div>

        {/* Agreement */}
        <p className="mt-12 text-gray-700 italic">
          By working with RBSH Studio, clients agree to the terms outlined in this 
          Grievance Redressal Policy and acknowledge our commitment to fair, timely, 
          and effective resolutions.
        </p>
      </div>
    </section>
  );
};

export default GrievancePolicy;
