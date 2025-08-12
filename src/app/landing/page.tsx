import { fetchOneEntry } from "@builder.io/sdk-react";
import { RenderBuilderContent } from "../../components/builder";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

// Builder Public API Key set in .env file
const PUBLIC_API_KEY = process.env.NEXT_PUBLIC_BUILDER_API_KEY!;

export default async function DefaultLandingPage() {
  const builderModelName = "homepage";
  const promobarModelName = "promobar";

  // Use the root landing path to fetch the content
  const urlPath = "/landing";

  // Fetch main landing page content
  const content = await fetchOneEntry({
    // Get the page content from Builder with the specified options
    apiKey: PUBLIC_API_KEY,
    model: builderModelName,
    userAttributes: { urlPath },
  });

  // Fetch promobar content
  const promobarContent = await fetchOneEntry({
    apiKey: PUBLIC_API_KEY,
    model: promobarModelName,
  });

  return (
    <>
      {/* Render the Promobar content */}
      {promobarContent && (
        <RenderBuilderContent content={promobarContent} model={promobarModelName} />
      )}
      
      {/* Render the Header component */}
      <Header 
        logoText="Your Brand"
        logoUrl="/"
        navigationItems={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
          { label: "Services", href: "/services" },
          { label: "Contact", href: "/contact" }
        ]}
        ctaText="Get Started"
        ctaUrl="/signup"
      />
      
      {/* Render the main Builder landing page */}
      <RenderBuilderContent content={content} model={builderModelName} />
      
      {/* Render the Footer component */}
      <Footer 
        companyName="Your Company"
        companyDescription="Building amazing digital experiences for modern businesses."
        footerLinks={[
          {
            title: "Product",
            links: [
              { label: "Features", href: "/features" },
              { label: "Pricing", href: "/pricing" },
              { label: "Documentation", href: "/docs" },
              { label: "API", href: "/api" }
            ]
          },
          {
            title: "Company",
            links: [
              { label: "About", href: "/about" },
              { label: "Blog", href: "/blog" },
              { label: "Careers", href: "/careers" },
              { label: "Contact", href: "/contact" }
            ]
          },
          {
            title: "Support",
            links: [
              { label: "Help Center", href: "/help" },
              { label: "Community", href: "/community" },
              { label: "Status", href: "/status" },
              { label: "Security", href: "/security" }
            ]
          }
        ]}
        socialLinks={[
          { name: "Twitter", href: "#", icon: "twitter" },
          { name: "LinkedIn", href: "#", icon: "linkedin" },
          { name: "GitHub", href: "#", icon: "github" },
          { name: "Facebook", href: "#", icon: "facebook" }
        ]}
        copyrightText="© 2024 Your Company. All rights reserved."
      />
    </>
  );
}
