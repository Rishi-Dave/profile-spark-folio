# Vercel Deployment Guide

This document provides instructions for deploying the Rishi Dave portfolio website to Vercel.

## Prerequisites

- [Vercel account](https://vercel.com/signup) (free tier is sufficient)
- [Git](https://git-scm.com/) installed
- GitHub, GitLab, or Bitbucket account with this repository

## Deployment Steps

### Option 1: Deploy Using Vercel Dashboard (Recommended)

1. **Push your code to GitHub** (or GitLab/Bitbucket)
   ```bash
   git add .
   git commit -m "Prepare for Vercel deployment"
   git push origin main
   ```

2. **Visit Vercel Dashboard**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with your GitHub/GitLab/Bitbucket account
   - Click "Add New Project"

3. **Import the Repository**
   - Search for `profile-spark-folio` in your repositories
   - Click "Import"

4. **Configure Project Settings**
   - **Framework Preset**: Select "Vite" (auto-detected)
   - **Build Command**: `npm run build` (auto-filled)
   - **Output Directory**: `dist` (auto-filled)
   - **Install Command**: `npm install` (auto-filled)
   - **Development Command**: `npm run dev` (auto-filled)

   All settings should be pre-filled correctly!

5. **Environment Variables** (Optional)
   - Currently, no environment variables are required
   - If you add features requiring API keys later, add them here

6. **Click "Deploy"**
   - Vercel will build and deploy your site
   - Your site will be live at: `https://<project-name>.vercel.app`

7. **Add Custom Domain** (Optional)
   - Go to your project settings → Domains
   - Add your custom domain (e.g., rishidave.com)
   - Follow DNS configuration instructions

### Option 2: Deploy Using Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Authenticate**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```

4. **Follow the prompts**
   - Confirm project name
   - Choose production environment
   - Settings will be detected automatically

### Option 3: Deploy Using Git Push (Vercel GitHub App)

1. **Install Vercel GitHub App**
   - Connected via dashboard during initial import
   - Every push to `main` automatically deploys

2. **Push to trigger deployment**
   ```bash
   git push origin main
   ```

## Configuration Files

### vercel.json
This file is already configured with:
- **buildCommand**: `npm run build`
- **outputDirectory**: `dist`
- **framework**: `vite`
- **rewrites**: Handles client-side routing (all URLs → /index.html)

The rewrites ensure that React Router can handle all routes correctly.

### .vercelignore
This file excludes unnecessary files from deployment:
- Node modules and lock files
- Git and IDE files
- Development dependencies
- Cache files

This reduces deployment size and improves build speed.

## Build Output

The production build creates optimized files:
- **dist/index.html** (1.63 KB) - Entry point
- **dist/assets/vendor-*.js** (156.88 KB / 51.15 KB gzip) - React & dependencies
- **dist/assets/index-*.js** (183.44 KB / 56.91 KB gzip) - App code
- **dist/assets/index-*.css** (61.22 KB / 10.80 KB gzip) - Styles

Total gzip size: ~118 KB

## Post-Deployment Checklist

After deployment:

- [ ] Verify site loads at `https://<your-domain>`
- [ ] Test all navigation routes
- [ ] Check responsive design on mobile
- [ ] Verify social links work (GitHub, LinkedIn, Email)
- [ ] Test project filtering functionality
- [ ] Check smooth animations and transitions
- [ ] Validate in browser DevTools (no console errors)

## Rollback

To rollback to a previous deployment:
1. Go to Vercel Dashboard → Deployments
2. Find the desired previous deployment
3. Click the three dots menu → Promote to Production

## Troubleshooting

### Build Fails
- Check `npm run build` runs locally without errors
- Verify all dependencies are in `package.json`
- Check TypeScript errors: `npx tsc --noEmit`

### Routes Not Working
- The `vercel.json` rewrites are configured
- Client-side routing should work automatically
- Clear browser cache if issues persist

### Performance
- Current build size is optimal (~118 KB gzip)
- All assets are minified and code-split
- Use Vercel Analytics to monitor performance

### Custom Domain Issues
- DNS propagation can take up to 48 hours
- Verify DNS records in your domain registrar
- Use Vercel's DNS for fastest setup

## Environment Variables

When adding features that require environment variables:

1. Create a `.env.local` file locally (not committed)
2. Add variables to Vercel dashboard:
   - Project Settings → Environment Variables
   - Add for Development, Preview, and Production as needed
3. Access in code via `import.meta.env.VITE_*`

Example:
```typescript
const apiUrl = import.meta.env.VITE_API_URL;
```

## Monitoring

After deployment, monitor:
- **Vercel Analytics**: Track page views and performance
- **Browser DevTools**: Check console for errors
- **Lighthouse**: Run audits regularly
- **Deployment logs**: Check Vercel dashboard for build issues

## Support

- [Vercel Documentation](https://vercel.com/docs)
- [Vite Documentation](https://vitejs.dev/)
- [React Router Documentation](https://reactrouter.com/)

## Additional Resources

- Original Lovable project: https://lovable.dev
- GitHub repository: [Your GitHub URL]
- Portfolio live at: [Your Vercel deployment URL]
