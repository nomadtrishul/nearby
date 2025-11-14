# Production Deployment Checklist

## ✅ Pre-Deployment

### Environment Variables
- [ ] Copy `.env.example` to `.env.local`
- [ ] Add Google Search Console verification code
- [ ] Add Bing Webmaster Tools verification code
- [ ] Set contact email address
- [ ] Add social media URLs (if applicable)
- [ ] Verify `NEXT_PUBLIC_SITE_URL` is correct

### Assets
- [ ] Create `/public/og-image.jpg` (1200x630px) for Open Graph
- [ ] Verify logo files exist (`/public/logo.png`, `/public/logo-2.png`)
- [ ] Check all images are optimized

### Code Quality
- [ ] Run `npm run lint` - fix any errors
- [ ] Run `npm run build` - ensure build succeeds
- [ ] Test all pages load correctly
- [ ] Verify forms work (or have proper error handling)
- [ ] Check mobile responsiveness
- [ ] Test dark mode functionality

### SEO
- [ ] Verify sitemap.xml is accessible at `/sitemap.xml`
- [ ] Verify robots.txt is accessible at `/robots.txt`
- [ ] Check structured data with [Google Rich Results Test](https://search.google.com/test/rich-results)
- [ ] Verify meta tags on all pages
- [ ] Check canonical URLs are correct

## 🚀 Deployment

### Vercel/Netlify
- [ ] Connect repository
- [ ] Set all environment variables in hosting platform
- [ ] Configure build command: `npm run build`
- [ ] Set output directory: `.next` (auto-detected)
- [ ] Deploy and verify

### Post-Deployment
- [ ] Submit sitemap to Google Search Console
- [ ] Submit sitemap to Bing Webmaster Tools
- [ ] Request indexing for main pages
- [ ] Verify site loads on production URL
- [ ] Test all forms and interactive elements
- [ ] Check analytics tracking (Google Analytics/Tag Manager)
- [ ] Verify SSL certificate is active

## 📊 Monitoring

### Setup
- [ ] Google Search Console - monitor indexing
- [ ] Google Analytics - verify tracking works
- [ ] Bing Webmaster Tools - monitor indexing
- [ ] Set up error monitoring (optional: Sentry)

### Ongoing
- [ ] Monitor Core Web Vitals
- [ ] Check for 404 errors
- [ ] Review search performance
- [ ] Monitor page load times
- [ ] Check for broken links

## 🔒 Security

- [ ] Verify HTTPS is enabled
- [ ] Check security headers are set (in next.config.ts)
- [ ] Review environment variables are not exposed
- [ ] Ensure `.env.local` is in `.gitignore`
- [ ] Verify no sensitive data in code

## 📝 Documentation

- [ ] Update README.md if needed
- [ ] Document any custom configurations
- [ ] Note any environment-specific settings

---

**Last Updated:** January 2025

