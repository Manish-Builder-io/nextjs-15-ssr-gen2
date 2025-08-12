# Landing Pages Integration

This directory contains the Builder.io integration for landing pages with the model name `landing-pages`.

## Structure

- `page.tsx` - Default landing page accessible at `/landing`
- `[...page]/page.tsx` - Dynamic landing pages accessible at `/landing/[slug]`

## Usage

### In Builder.io

1. Create a new model called `landing-pages`
2. Set the URL pattern to `/landing/:slug` or `/landing` for the default page
3. Use the same custom components available in the main builder registry

### URL Examples

- `/landing` - Default landing page
- `/landing/product-launch` - Product launch landing page
- `/landing/pricing` - Pricing landing page
- `/landing/contact` - Contact landing page

### Custom Components Available

All components from the main builder registry are available:
- Hero
- CTA (Call-to-Action)
- Card
- Counter

## Configuration

The integration uses the same environment variables as the main Builder.io setup:
- `NEXT_PUBLIC_BUILDER_API_KEY` - Your Builder.io public API key

## Features

- ✅ Dynamic routing with catch-all segments
- ✅ SEO-friendly URLs
- ✅ Same component library as main pages
- ✅ Preview mode support
- ✅ 404 handling for missing pages
