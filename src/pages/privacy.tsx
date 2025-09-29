import React from "react";

/**
 * Simple PrivacyPageHealthcare.jsx
 * A clean, minimal privacy policy page for a healthcare company.
 *
 * Usage:
 * import PrivacyPage from "./PrivacyPageHealthcare";
 * <PrivacyPage companyName="Acme Health" effectiveDate="2025-09-29" contactEmail="privacy@acmehealth.com" />
 */

export default function PrivacyPage({
  companyName = "Gloport Photonix",
  effectiveDate = "2025-01-01",
  contactEmail = "privacy@gloportphotonix.com",
}) {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800 px-6 py-12">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow">
        <h1 className="text-2xl font-bold text-blue-600 mb-4">
          Privacy Policy
        </h1>
        <p className="text-sm text-gray-600 mb-6">
          Effective Date: {effectiveDate}
        </p>

        <p className="mb-4">
          At {companyName}, we value your privacy. This policy explains how we
          collect, use, and protect your personal and health information.
        </p>

        <h2 className="text-lg font-semibold mt-6 mb-2">
          Information We Collect
        </h2>
        <ul className="list-disc list-inside mb-4 text-sm text-gray-700">
          <li>Personal details (name, contact information)</li>
          <li>Medical information necessary for care</li>
          <li>Insurance and billing details</li>
        </ul>

        <h2 className="text-lg font-semibold mt-6 mb-2">
          How We Use Information
        </h2>
        <p className="mb-4 text-sm text-gray-700">
          We use your information to provide healthcare services, manage
          appointments, process payments, and comply with legal requirements.
        </p>

        <h2 className="text-lg font-semibold mt-6 mb-2">Data Protection</h2>
        <p className="mb-4 text-sm text-gray-700">
          We take appropriate measures to protect your information, including
          secure storage and limited access. However, no system is completely
          secure.
        </p>

        <h2 className="text-lg font-semibold mt-6 mb-2">Your Rights</h2>
        <p className="mb-4 text-sm text-gray-700">
          You have the right to access, update, or request deletion of your
          records. To exercise these rights, please contact us.
        </p>

        <h2 className="text-lg font-semibold mt-6 mb-2">Contact Us</h2>
        <p className="text-sm text-gray-700">
          For any privacy concerns, email us at
          <a
            href={`mailto:${contactEmail}`}
            className="text-red-600 underline ml-1"
          >
            {contactEmail}
          </a>
        </p>
      </div>
    </main>
  );
}
