# Nearby Pet Care

A modern Next.js application for nearbypetcare.com - Professional pet care services platform connecting pet owners with trusted pet care providers.

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

First, install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

### Environment Setup

1. Copy the example environment file:
```bash
cp .env.example .env.local
```

2. Fill in your environment variables in `.env.local`:
   - Get Google verification code from [Google Search Console](https://search.google.com/search-console)
   - Get Bing verification code from [Bing Webmaster Tools](https://www.bing.com/webmasters)
   - Add your contact email
   - Add social media URLs (optional)

### Development

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Production Build

Build for production:

```bash
npm run build
npm start
```

The production build will be optimized and ready for deployment.

## Project Structure

```
petcare/
├── app/                # App Router directory
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles
├── components/         # Reusable components
├── lib/               # Utility functions
├── public/            # Static assets
└── styles/            # Additional styles
```

## Tech Stack

- **Next.js 16.0.0** - React framework with App Router, Turbopack as default bundler
- **React 19.2.0** - Latest React with Server Components support
- **TypeScript 5.9.2** - Enhanced type safety and developer experience
- **Tailwind CSS 3.4.17** - Utility-first CSS framework with improved dark mode
- **ESLint 9.39.0** - Code linting and quality assurance

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Production Deployment

### Pre-Deployment Checklist

- [ ] Create `.env.local` with all required environment variables
- [ ] Create `/public/og-image.jpg` (1200x630px) for social sharing
- [ ] Verify all verification codes are set
- [ ] Test production build: `npm run build`
- [ ] Submit sitemap to Google Search Console and Bing Webmaster Tools

### Deploy to Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

1. Push your code to GitHub
2. Import project in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

### Environment Variables for Production

Make sure to set these in your hosting platform:
- `NEXT_PUBLIC_GOOGLE_VERIFICATION`
- `NEXT_PUBLIC_BING_VERIFICATION`
- `NEXT_PUBLIC_CONTACT_EMAIL`
- `NEXT_PUBLIC_SITE_URL`
- Social media URLs (optional)

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## SEO

This project is optimized for SEO with:
- Structured data (Schema.org)
- Sitemap.xml and robots.txt
- Open Graph and Twitter Card meta tags
- Optimized images
- Fast loading times

See `SEO_FIXES_SUMMARY.md` for detailed SEO information.

