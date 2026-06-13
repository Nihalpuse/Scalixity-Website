import type { Metadata } from "next";
import { LegalLayout, type LegalSection } from "@/src/app/_components/LegalLayout";

export const metadata: Metadata = {
  title: "Privacy Policy — Scalixity",
  description:
    "How Scalixity collects, uses, stores, and protects your personal data, and your rights under the DPDP Act, 2023 and applicable Indian law.",
};

const SECTIONS: LegalSection[] = [
  {
    heading: "Introduction",
    blocks: [
      {
        p: 'Scalixity Technologies Pvt. Ltd. ("Scalixity", "we", "our", "us") is committed to protecting the privacy and confidentiality of information provided to us by users of our website, software solutions, products, and services.',
      },
      {
        p: "This Privacy Policy outlines the types of data we collect, how we use it, and your rights under applicable Indian laws, including:",
      },
      {
        list: [
          "The Information Technology Act, 2000, and its associated rules",
          'The Digital Personal Data Protection Act, 2023 ("DPDP Act")',
        ],
      },
      {
        p: "This policy applies to all interactions with Scalixity, including via websites, mobile applications, APIs, hardware products (such as GPS devices), and custom software platforms.",
      },
    ],
  },
  {
    heading: "1. Definitions",
    blocks: [
      {
        list: [
          {
            term: "Personal Data",
            text: "Any data about an individual who is identifiable through such data, either directly or indirectly.",
          },
          {
            term: "Sensitive Personal Data",
            text: "Includes passwords, financial data, health information, biometric data, and any other data classified as sensitive under Indian law.",
          },
          {
            term: "Processing",
            text: "Collection, storage, use, alteration, or disclosure of personal data.",
          },
        ],
      },
    ],
  },
  {
    heading: "2. Information We Collect",
    blocks: [
      { p: "We collect data in the following categories:" },
      { subhead: "a. Personal Information" },
      {
        list: [
          "Name, address, contact number, email address",
          "Company name, designation",
          "Identity verification documents (where applicable)",
        ],
      },
      { subhead: "b. Sensitive Personal Data" },
      {
        list: [
          "Payment details (only processed through secure third-party gateways)",
          "Location information (for GPS-based solutions)",
          "Government ID (if required for KYC, compliance, or contracts)",
        ],
      },
      { subhead: "c. Usage and Device Data" },
      {
        list: [
          "IP address, browser type, access time, pages viewed",
          "Device identifiers, operating system, and network information",
          "Usage behavior on our platforms or software tools",
        ],
      },
      { subhead: "d. Client and Business Data" },
      {
        list: [
          "Information shared voluntarily for CRM, AI models, product integrations, GPS tracking, or e-commerce platforms",
          "Project files, user logs, preferences, and system configurations",
        ],
      },
    ],
  },
  {
    heading: "3. Purpose of Data Collection",
    blocks: [
      { p: "We process your data for lawful and specific purposes including:" },
      {
        list: [
          "Delivering and customizing our products and services",
          "Managing client relationships and technical support",
          "Contract fulfilment and billing",
          "Complying with legal and regulatory obligations",
          "Communicating updates, service changes, or promotional material (where consent is obtained)",
        ],
      },
    ],
  },
  {
    heading: "4. Legal Basis for Processing",
    blocks: [
      {
        p: "Under the DPDP Act, 2023, personal data is processed on one or more of the following bases:",
      },
      {
        list: [
          {
            term: "Consent",
            text: "Freely given, specific, informed, and unambiguous.",
          },
          {
            term: "Performance of a Contract",
            text: "When necessary to fulfill an agreement.",
          },
          {
            term: "Legal Obligation",
            text: "When required to comply with applicable laws.",
          },
          {
            term: "Legitimate Interests",
            text: "Where such processing does not override your fundamental rights.",
          },
        ],
      },
    ],
  },
  {
    heading: "5. Data Storage and Retention",
    blocks: [
      {
        list: [
          "Your data is stored on secure servers maintained by Scalixity or its authorized service providers.",
          "We retain personal data for as long as required to fulfill the purposes stated in this policy or as required by applicable law.",
          "Upon withdrawal of consent or account deactivation, we retain data only where necessary for audits, legal claims, or compliance.",
        ],
      },
    ],
  },
  {
    heading: "6. Data Sharing and Disclosure",
    blocks: [
      { note: "We do not sell your personal information." },
      { p: "However, data may be shared under the following conditions:" },
      {
        list: [
          "With service providers, subcontractors, and partners under binding data protection obligations",
          "With government authorities or law enforcement upon lawful request or regulatory requirement",
          "With auditors, legal counsel, or financial institutions under confidentiality obligations",
          "With affiliated entities for internal business operations, if legally permitted",
        ],
      },
    ],
  },
  {
    heading: "7. Cross-Border Data Transfers",
    blocks: [
      {
        p: "Where applicable, your data may be processed and stored on servers outside India. In such cases:",
      },
      {
        list: [
          "We ensure adequate levels of data protection as per Indian law",
          "Cross-border transfers comply with government notifications issued under the DPDP Act, 2023",
        ],
      },
    ],
  },
  {
    heading: "8. Data Security Measures",
    blocks: [
      {
        p: "We implement robust physical, technical, and organizational safeguards to ensure your data is protected against:",
      },
      {
        list: [
          "Unauthorized access",
          "Accidental loss or destruction",
          "Misuse or alteration",
        ],
      },
      { subhead: "Security practices include:" },
      {
        list: [
          "Encryption (in transit and at rest)",
          "Role-based access controls",
          "Secure APIs and firewalls",
          "Employee confidentiality agreements",
          "Regular security audits and compliance checks",
        ],
      },
      {
        note: "Our practices adhere to Reasonable Security Practices as prescribed under Rule 8 of the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011.",
      },
    ],
  },
  {
    heading: "9. Your Rights",
    blocks: [
      {
        p: "As a data principal under the DPDP Act, 2023, you are entitled to:",
      },
      {
        list: [
          "Access your personal data",
          "Request correction or erasure of inaccurate or outdated data",
          "Withdraw your consent at any time (subject to certain consequences)",
          "Nominate a representative for exercising your rights in case of incapacity",
          "File a grievance or complaint with the Data Protection Board of India",
        ],
      },
    ],
  },
  {
    heading: "10. Use of Cookies and Tracking Technologies",
    blocks: [
      {
        p: "We use cookies and similar technologies for session management, analytics, and enhancing user experience. You may control cookie settings through your browser preferences. Disabling cookies may limit functionality on certain parts of our services. For more detail, see our Cookies Policy.",
      },
    ],
  },
  {
    heading: "11. Grievance Redressal Mechanism",
    blocks: [
      {
        p: "We are committed to addressing your concerns in a timely and respectful manner.",
      },
      {
        card: {
          title: "Grievance Officer",
          rows: [
            { label: "Name", value: "ASHENDRA SHARMA" },
            {
              label: "Email",
              value: "info@scalixity.com",
              href: "mailto:info@scalixity.com",
            },
            { label: "Response Time", value: "Within 15 working days" },
          ],
        },
      },
    ],
  },
  {
    heading: "12. Changes to this Privacy Policy",
    blocks: [
      {
        p: "We reserve the right to modify this Privacy Policy at any time. Changes will be communicated through our website or by direct notification. Continued use of services after such changes constitutes your acceptance.",
      },
    ],
  },
  {
    heading: "13. Contact Us",
    blocks: [
      {
        p: "For questions or concerns regarding this Privacy Policy, please contact:",
      },
      {
        card: {
          rows: [
            {
              label: "Email",
              value: "Info@scalixity.com",
              href: "mailto:Info@scalixity.com",
            },
            { label: "Phone", value: "+91 9424710030", href: "tel:+919424710030" },
            {
              label: "Website",
              value: "www.scalixity.com",
              href: "https://www.scalixity.com",
            },
          ],
        },
      },
    ],
  },
];

export default function PrivacyPage() {
  return (
    <LegalLayout
      title="Privacy Policy"
      effectiveDate="25 July 2025"
      lastUpdated="25 July 2025"
      sections={SECTIONS}
    />
  );
}
