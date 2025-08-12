import { fetchOneEntry } from "@builder.io/sdk-react";
import { RenderBuilderContent } from "../../../components/builder";

// Builder Public API Key set in .env file
const PUBLIC_API_KEY = process.env.NEXT_PUBLIC_BUILDER_API_KEY!;

interface PageProps {
  params: Promise<{
    page: string[];
  }>;
}

export default async function LandingPage(props: PageProps) {
  const builderModelName = "homepage";
  const promobarModelName = "promobar";

  // Use the page path specified in the URL to fetch the content
  const urlPath = "/landing/" + ((await props?.params)?.page?.join("/") || "");

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
      
      {/* Render the Builder landing page */}
      <RenderBuilderContent content={content} model={builderModelName} />
    </>
  );
}
