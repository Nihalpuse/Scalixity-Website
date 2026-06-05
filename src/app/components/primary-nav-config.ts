// Shared route-based nav config for the global PrimaryNav. Used by
// ClientLayout (site-wide chrome) and by any page that supplies its own
// chrome (e.g. /company). The landing page uses its own anchor-based config
// from landing-content.json instead.

export const PRIMARY_NAV_LINKS = [
  { label: "Services", href: "/services", hasDropdown: true },
  { label: "Industries", href: "/industries", hasDropdown: true },
  { label: "Cases", href: "/work", hasDropdown: false },
  { label: "Company", href: "/company", hasDropdown: false },
  { label: "Insights", href: "/blog", hasDropdown: false },
  { label: "Contact us", href: "/contact", hasDropdown: false },
];

export const PRIMARY_NAV_CTA = { label: "Get in touch", href: "/contact" };

export const PRIMARY_NAV_LOGO = "scalixity";
