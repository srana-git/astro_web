# Jumshaid Zee - Photography & Videography Portfolio

A minimalist, high-performance portfolio website built with Astro and deployed on Vercel.

## 🚀 Features

- **Ultra-minimalist design** inspired by professional photographer portfolios
- **Lightning-fast performance** with Astro's static site generation
- **Responsive design** that works beautifully on all devices
- **Optimized images** with automatic WebP conversion
- **Vercel Analytics** and Speed Insights integrated
- **SEO optimized** for better search visibility

## 📄 Pages

- **Home** - Striking hero section with name and profession
- **Films** - Videography portfolio showcase
- **Images** - Photography gallery with collections
- **About** - Personal story and services
- **Contact** - Professional contact form

## 🛠️ Tech Stack

- **Framework:** Astro
- **Styling:** Tailwind CSS
- **Deployment:** Vercel
- **Font:** Inter & Montserrat
- **Image Gallery:** GLightbox

## 📦 Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🚀 Deployment to Vercel

### Option 1: Deploy via Vercel CLI

1. Install Vercel CLI (if not already installed):
```bash
npm install -g vercel
```

2. Deploy to Vercel:
```bash
npx vercel
```

3. Follow the prompts:
   - Set up and deploy: `Y`
   - Which scope: Select your account
   - Link to existing project: `N` (for first deployment)
   - Project name: `jumshizzle` (or your preferred name)
   - Directory: `./` (current directory)
   - Override settings: `N`

4. For production deployment:
```bash
npx vercel --prod
```

### Option 2: Deploy via GitHub Integration

1. Push your code to a GitHub repository
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will automatically detect Astro and configure the build settings
6. Click "Deploy"

### Option 3: Manual Deployment

1. Build the project:
```bash
npm run build
```

2. The build output will be in the `.vercel/output` directory
3. Go to [vercel.com](https://vercel.com) and manually upload the output

## 🔧 Configuration

### Update Site Information

Edit `site.config.mts` to update:
- Site title
- Owner name
- Social links
- Profile image

### Update Content

- **About:** Edit `src/content/about.md`
- **Gallery:** Update `src/gallery/gallery.yaml`
- **Images:** Add photos to `src/gallery/` subdirectories

### Customize Styling

- **Global styles:** `src/styles/global.css`
- **Tailwind config:** `tailwind.config.js`
- **Colors and fonts:** Update in global.css

## 📝 Environment Variables

No environment variables are required for basic functionality. However, you can add:

- `VERCEL_ANALYTICS_ID` - For Vercel Analytics (automatically set when deploying to Vercel)

## 🎨 Customization Tips

1. **Change color scheme:** Update the CSS variables in `src/styles/global.css`
2. **Add new pages:** Create new `.astro` files in `src/pages/`
3. **Modify navigation:** Edit `src/components/NavBar.astro`
4. **Update hero section:** Edit `src/components/LandingHero-1.astro`

## 📄 License

This project is open source and available for personal and commercial use.

## 🤝 Credits

Built with [Astro](https://astro.build) and deployed on [Vercel](https://vercel.com).

---

**Live Site:** [https://jumshizzle.vercel.app](https://jumshizzle.vercel.app) (once deployed)