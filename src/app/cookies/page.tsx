import type { Metadata } from "next";
import { LegalLayout, type LegalSection } from "@/src/app/_components/LegalLayout";

export const metadata: Metadata = {
  title: "Cookies Policy — Scalixity",
  description:
    "How Scalixity uses cookies and similar technologies on our website, and how you can control them.",
};

const SECTIONS: LegalSection[] = [
  {
    heading: "Introduction",
    blocks: [
      {
        p: 'This Cookies Policy explains how Scalixity Technologies Pvt. Ltd. ("Scalixity", "we", "our", "us") uses cookies and similar technologies when you visit www.scalixity.com.',
      },
      {
        p: "It should be read alongside our Privacy Policy, which explains how we handle personal data more broadly. By continuing to use our website, you consent to our use of cookies as described here, except where your prior consent is required by law.",
      },
    ],
  },
  {
    heading: "1. What Are Cookies?",
    blocks: [
      {
        p: "Cookies are small text files placed on your device when you visit a website. They are widely used to make websites work, to remember your preferences, and to provide information to the site's owners. Similar technologies — such as local storage, pixels, and software development kits — can perform comparable functions, and we refer to all of them as 'cookies' in this policy.",
      },
      {
        p: "Cookies may be 'session' cookies, which are deleted when you close your browser, or 'persistent' cookies, which remain until they expire or you delete them. They may be set by us ('first-party') or by a third-party service we use ('third-party').",
      },
    ],
  },
  {
    heading: "2. How We Use Cookies",
    blocks: [
      { p: "We use cookies for the following purposes:" },
      {
        list: [
          {
            term: "Essential",
            text: "Required for the website to function — for example, page navigation, security, and remembering choices needed to deliver the pages you request. The site cannot work properly without these.",
          },
          {
            term: "Analytics & Performance",
            text: "Help us understand how visitors use our website — which pages are viewed and how people move through the site — so we can improve it. This information is collected in aggregate where possible.",
          },
          {
            term: "Functional",
            text: "Remember preferences you set, such as language or display choices, to give you a more consistent experience.",
          },
        ],
      },
    ],
  },
  {
    heading: "3. Third-Party Cookies",
    blocks: [
      {
        p: "Some cookies may be set by third-party services that appear on our pages — for example, analytics providers or embedded content such as videos. These providers may set their own cookies, which are governed by their respective privacy and cookie policies. We do not control these cookies, and we encourage you to review the policies of any third-party services you interact with.",
      },
    ],
  },
  {
    heading: "4. Managing Your Cookies",
    blocks: [
      {
        p: "You can control and manage cookies in several ways. Most browsers let you view, delete, and block cookies through their settings. The steps differ by browser, but the relevant options are usually found under 'Settings', 'Privacy', or 'Security'.",
      },
      {
        list: [
          "Delete existing cookies stored on your device",
          "Block cookies from being set, entirely or for specific sites",
          "Set your browser to notify you before a cookie is stored",
        ],
      },
      {
        note: "Please note: blocking or deleting essential cookies may affect how parts of our website work, and some features may not function as intended.",
      },
    ],
  },
  {
    heading: "5. Changes to This Policy",
    blocks: [
      {
        p: "We may update this Cookies Policy from time to time to reflect changes in the technologies we use or in legal requirements. Any updates will be posted on this page with a revised 'Last updated' date. We encourage you to review this policy periodically.",
      },
    ],
  },
  {
    heading: "6. Contact Us",
    blocks: [
      {
        p: "If you have any questions about our use of cookies, please contact:",
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

export default function CookiesPage() {
  return (
    <LegalLayout
      title="Cookies Policy"
      effectiveDate="13 June 2026"
      lastUpdated="13 June 2026"
      sections={SECTIONS}
    />
  );
}
