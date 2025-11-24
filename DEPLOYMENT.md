# Deployment Guide - TDCX Task Manager

## Quick Deploy to Vercel (Recommended)

### Option 1: Using Vercel CLI

1. **Install Vercel CLI globally**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy from project directory**
   ```bash
   cd "c:\Users\ACER\TDCX-Front End Assessment"
   vercel
   ```

4. **Follow the prompts:**
   - Set up and deploy? **Y**
   - Which scope? Select your account
   - Link to existing project? **N**
   - Project name? **tdcx-task-manager** (or your choice)
   - In which directory is your code? **./**
   - Want to override settings? **N**

5. **Production deployment**
   ```bash
   vercel --prod
   ```

### Option 2: Using Vercel Dashboard

1. **Build the project locally**
   ```bash
   npm run build
   ```

2. **Go to [vercel.com](https://vercel.com)**
   - Sign in with GitHub/GitLab/Bitbucket
   - Click "Add New Project"
   - Import your Git repository
   - Vercel auto-detects Vite configuration
   - Click "Deploy"

3. **Configuration (auto-detected)**
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

## Deploy to Netlify

### Option 1: Drag & Drop

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Go to [netlify.com](https://netlify.com)**
   - Sign in
   - Drag the `dist` folder to the deploy area
   - Your site is live!

### Option 2: Netlify CLI

1. **Install Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

2. **Login**
   ```bash
   netlify login
   ```

3. **Deploy**
   ```bash
   netlify deploy --prod
   ```

4. **Follow prompts:**
   - Create & configure a new site? **Y**
   - Team: Select your team
   - Site name: **tdcx-task-manager**
   - Publish directory: **dist**

## Deploy to GitHub Pages

1. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update package.json**
   Add to scripts:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```

3. **Update vite.config.ts**
   Add base path:
   ```typescript
   export default defineConfig({
     base: '/tdcx-task-manager/',
     // ... rest of config
   })
   ```

4. **Deploy**
   ```bash
   npm run deploy
   ```

5. **Enable GitHub Pages**
   - Go to repository Settings
   - Pages section
   - Source: gh-pages branch
   - Save

## Environment Variables (if needed)

If you add environment variables in the future:

### Vercel
Add in dashboard: Settings → Environment Variables

### Netlify
Add in dashboard: Site settings → Build & deploy → Environment

### Local .env file
```env
VITE_API_URL=https://api.example.com
```

Access in code:
```typescript
const apiUrl = import.meta.env.VITE_API_URL;
```

## Post-Deployment Checklist

After deployment, verify:
- ✅ Login page loads correctly
- ✅ Can log in and reach dashboard
- ✅ Can create tasks
- ✅ Can mark tasks as complete
- ✅ Can edit and delete tasks
- ✅ Search functionality works
- ✅ Data persists after page refresh
- ✅ Responsive design works on mobile
- ✅ All animations are smooth
- ✅ No console errors

## Custom Domain (Optional)

### Vercel
1. Go to project settings
2. Domains tab
3. Add your domain
4. Update DNS records as instructed

### Netlify
1. Domain settings
2. Add custom domain
3. Configure DNS

## Performance Optimization

The build is already optimized, but for further improvements:

1. **Enable compression** (automatic on Vercel/Netlify)
2. **Add caching headers** (automatic on Vercel/Netlify)
3. **Consider code splitting** for larger apps
4. **Add service worker** for PWA capabilities

## Monitoring

### Vercel Analytics
```bash
npm install @vercel/analytics
```

Add to `main.tsx`:
```typescript
import { Analytics } from '@vercel/analytics/react';

// In render
<Analytics />
```

### Netlify Analytics
Enable in dashboard: Analytics tab

## Troubleshooting

### Build fails
- Check Node.js version (16+)
- Clear node_modules and reinstall
- Check for TypeScript errors

### Routing issues (404 on refresh)
- Vercel/Netlify handle this automatically
- For other hosts, add `_redirects` file:
  ```
  /*    /index.html   200
  ```

### Environment variables not working
- Ensure they start with `VITE_`
- Rebuild after adding variables
- Check deployment logs

## Success!

Once deployed, share your live URL:
- **Vercel**: `https://tdcx-task-manager.vercel.app`
- **Netlify**: `https://tdcx-task-manager.netlify.app`
- **Custom**: `https://yourdomain.com`

---

**Recommended**: Use Vercel for the best developer experience and automatic deployments from Git.
