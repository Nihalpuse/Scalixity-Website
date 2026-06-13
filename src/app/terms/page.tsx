import type { Metadata } from "next";
import { LegalLayout, type LegalSection } from "@/src/app/_components/LegalLayout";

export const metadata: Metadata = {
  title: "Terms & Conditions — Scalixity",
  description:
    "The terms and conditions that govern your use of Scalixity's website, software solutions, products, and services.",
};

const SECTIONS: LegalSection[] = [
  {
    heading: "Introduction",
    blocks: [
      {
        p: 'Scalixity Technologies Pvt. Ltd. ("Scalixity", "we", "our", "us") provides these Terms and Conditions ("Terms") that govern your use of our website, software solutions, products, and services.',
      },
      {
        p: "By accessing or using our services, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use our services.",
      },
      {
        p: "These Terms apply to all interactions with Scalixity, including via websites, mobile applications, APIs, hardware products (such as GPS devices), and custom software platforms.",
      },
    ],
  },
  {
    heading: "1. Definitions",
    blocks: [
      {
        list: [
          {
            term: "Services",
            text: "All products, software, applications, and services provided by Scalixity.",
          },
          {
            term: "User / You",
            text: "Any individual or entity using our services.",
          },
          {
            term: "Content",
            text: "Any data, information, or materials uploaded, transmitted, or processed through our services.",
          },
          {
            term: "Intellectual Property",
            text: "All patents, copyrights, trademarks, trade secrets, and other proprietary rights.",
          },
        ],
      },
    ],
  },
  {
    heading: "2. Acceptance of Terms",
    blocks: [
      { p: "By using our services, you acknowledge that:" },
      {
        list: [
          "You have read, understood, and agree to be bound by these Terms",
          "You are at least 18 years old or have parental/guardian consent",
          "You have the legal capacity to enter into these Terms",
          "Your use of services complies with all applicable laws and regulations",
        ],
      },
    ],
  },
  {
    heading: "3. Services Description",
    blocks: [
      { p: "Scalixity provides the following services:" },
      {
        list: [
          "AI and Machine Learning Solutions",
          "Software Development and Custom Applications",
          "GPS Tracking and IoT Solutions",
          "E-commerce Platform Development",
          "CRM and Business Process Automation",
          "Technical Consulting and Support",
          "Cloud Infrastructure and Hosting Services",
        ],
      },
      {
        note: "Note: Service availability may vary based on your location and specific requirements. We reserve the right to modify, suspend, or discontinue any service at any time.",
      },
    ],
  },
  {
    heading: "4. User Responsibilities",
    blocks: [
      { p: "As a user of our services, you agree to:" },
      {
        list: [
          "Provide accurate and complete information when required",
          "Maintain the security of your account credentials",
          "Use services only for lawful purposes",
          "Not attempt to gain unauthorized access to our systems",
          "Not interfere with or disrupt service operations",
          "Comply with all applicable laws and regulations",
          "Respect intellectual property rights",
          "Not use services for any harmful or malicious activities",
        ],
      },
    ],
  },
  {
    heading: "5. Payment Terms",
    blocks: [
      { p: "For paid services, the following terms apply:" },
      {
        list: [
          "All fees are payable in advance unless otherwise agreed",
          "Prices are subject to change with 30 days prior notice",
          "Payment methods accepted: credit/debit cards, bank transfers, digital wallets",
          "Late payments may result in service suspension or termination",
          "All fees are non-refundable unless otherwise specified",
          "Taxes and additional charges may apply as per applicable laws",
        ],
      },
    ],
  },
  {
    heading: "6. Intellectual Property Rights",
    blocks: [
      { subhead: "Scalixity's Rights" },
      {
        list: [
          "All services, software, and content remain our exclusive property",
          "We retain all intellectual property rights in our services",
          "You may not copy, modify, or distribute our proprietary materials",
        ],
      },
      { subhead: "Your Rights" },
      {
        list: [
          "You retain ownership of content you create or upload",
          "You grant us license to use your content for service provision",
          "You may use our services as permitted under these Terms",
        ],
      },
    ],
  },
  {
    heading: "7. Privacy and Data Protection",
    blocks: [
      {
        p: "Your privacy is important to us. Our data collection and processing practices are governed by our Privacy Policy, which is incorporated into these Terms by reference.",
      },
      { p: "By using our services, you consent to:" },
      {
        list: [
          "Collection and processing of your personal data as described in our Privacy Policy",
          "Use of cookies and tracking technologies",
          "Data transfer and storage as necessary for service provision",
        ],
      },
    ],
  },
  {
    heading: "8. Service Availability and Maintenance",
    blocks: [
      { p: "We strive to provide reliable services but cannot guarantee:" },
      {
        list: [
          "Uninterrupted or error-free service",
          "Compatibility with all devices or browsers",
          "Specific performance levels or response times",
        ],
      },
      {
        note: "Maintenance: We may perform scheduled maintenance with reasonable notice. Emergency maintenance may be performed without prior notice.",
      },
    ],
  },
  {
    heading: "9. Limitation of Liability",
    blocks: [
      {
        note: 'Disclaimer: Our services are provided "as is" without warranties of any kind, either express or implied.',
      },
      {
        p: "To the maximum extent permitted by law, Scalixity shall not be liable for:",
      },
      {
        list: [
          "Indirect, incidental, or consequential damages",
          "Loss of profits, data, or business opportunities",
          "Service interruptions or data loss",
          "Third-party actions or content",
        ],
      },
      {
        p: "Our total liability shall not exceed the amount paid by you for the specific service in the 12 months preceding the claim.",
      },
    ],
  },
  {
    heading: "10. Termination",
    blocks: [
      {
        p: "You may terminate your account or service subscription at any time by providing written notice.",
      },
      { p: "We may terminate your access to services immediately if you:" },
      {
        list: [
          "Violate these Terms",
          "Engage in fraudulent or illegal activities",
          "Fail to pay fees when due",
          "Cause harm to our systems or other users",
        ],
      },
      {
        p: "Upon termination, your access to services will cease, and we may delete your data in accordance with our data retention policies.",
      },
    ],
  },
  {
    heading: "11. Governing Law and Dispute Resolution",
    blocks: [
      {
        p: "These Terms are governed by the laws of India. Any disputes shall be resolved through:",
      },
      {
        ordered: true,
        list: [
          "Good faith negotiations between parties",
          "Mediation if negotiations fail",
          "Arbitration in accordance with Indian law",
          "Court proceedings in courts of competent jurisdiction in India",
        ],
      },
    ],
  },
  {
    heading: "12. Changes to Terms",
    blocks: [
      {
        p: "We reserve the right to modify these Terms at any time. Changes will be communicated through:",
      },
      {
        list: [
          "Email notification to registered users",
          "Website announcements",
          "In-app notifications",
        ],
      },
      {
        p: "Continued use of services after changes constitutes acceptance of the new Terms.",
      },
    ],
  },
  {
    heading: "13. Severability",
    blocks: [
      {
        p: "If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall continue in full force and effect. The invalid provision shall be modified to the minimum extent necessary to make it valid and enforceable.",
      },
    ],
  },
  {
    heading: "14. Contact Us",
    blocks: [
      {
        p: "For questions or concerns regarding these Terms and Conditions, please contact:",
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

export default function TermsPage() {
  return (
    <LegalLayout
      title="Terms & Conditions"
      effectiveDate="25 July 2025"
      lastUpdated="25 July 2025"
      sections={SECTIONS}
    />
  );
}
