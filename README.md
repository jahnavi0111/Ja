# Modern Portfolio Website

A professional, modern, and fully responsive portfolio website built with React. This is a **frontend-only** application with no backend, APIs, or databases.

![Portfolio Preview](https://via.placeholder.com/1200x600/FF6B35/FFFFFF?text=Modern+Portfolio+Website)

## 🌟 Features

- **Modern Design**: Clean, contemporary design with bold accents and smooth animations
- **Fully Responsive**: Perfect display on mobile, tablet, and desktop devices
- **Smooth Animations**: Eye-catching transitions and scroll animations
- **Interactive UI**: Engaging user experience with hover effects and micro-interactions
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Performance Focused**: Fast loading and optimized assets
- **Accessibility**: ARIA labels and keyboard navigation support

## 📋 Pages & Sections

### 1. **Home/Hero Section**
   - Eye-catching hero with animated background
   - Call-to-action buttons
   - Key statistics showcase
   - Parallax mouse movement effects

### 2. **About Section**
   - Professional introduction
   - Skills with animated progress bars
   - Experience timeline
   - Highlight features

### 3. **Services Section**
   - 6 service cards with hover effects
   - Feature lists for each service
   - Call-to-action for custom projects

### 4. **Portfolio Section**
   - Filterable project gallery
   - 9 showcase projects
   - Category filtering (All, Web, Mobile, Branding, UI/UX)
   - Hover overlays with project details

### 5. **Testimonials Section**
   - Carousel/slider with client testimonials
   - Auto-play functionality
   - Navigation controls
   - 5-star ratings

### 6. **Contact Section**
   - Contact form (frontend only)
   - Contact information cards
   - Social media links
   - Success message on submission

### 7. **Footer**
   - Quick links
   - Newsletter subscription
   - Social media icons
   - Copyright information

## 🎨 Design System

### Color Palette
- **Primary**: #0A0E27 (Dark Navy)
- **Secondary**: #FF6B35 (Vibrant Orange)
- **Accent**: #F7B801 (Golden Yellow)
- **Text**: #1A1A2E (Dark Gray)
- **Background**: #FAFAFA (Light Gray)

### Typography
- **Display Font**: DM Serif Display (Headings)
- **Body Font**: Outfit (Body Text)

### Spacing Scale
- XS: 0.5rem
- SM: 1rem
- MD: 2rem
- LG: 4rem
- XL: 6rem
- 2XL: 8rem

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v14 or higher)
- **npm** or **yarn**

### Installation

1. **Extract the ZIP file**
   ```bash
   unzip portfolio-website.zip
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```
   or
   ```bash
   yarn dev
   ```

4. **Open your browser**
   
   Navigate to `http://localhost:3000` (or the port shown in your terminal)

## 📁 Project Structure

```
portfolio-website/
├── public/                     # Static assets
├── src/
│   ├── components/            # React components
│   │   ├── Navbar.jsx        # Navigation bar
│   │   ├── Hero.jsx          # Hero section
│   │   ├── About.jsx         # About section
│   │   ├── Services.jsx      # Services section
│   │   ├── Portfolio.jsx     # Portfolio/work showcase
│   │   ├── Testimonials.jsx  # Client testimonials
│   │   ├── Contact.jsx       # Contact form
│   │   └── Footer.jsx        # Footer
│   ├── data/                  # Static data files
│   │   ├── servicesData.js   # Services information
│   │   ├── portfolioData.js  # Portfolio projects
│   │   └── testimonialsData.js # Client testimonials
│   ├── styles/                # CSS stylesheets
│   │   ├── index.css         # Global styles
│   │   ├── Navbar.css        # Navbar styles
│   │   ├── Hero.css          # Hero styles
│   │   ├── About.css         # About styles
│   │   ├── Services.css      # Services styles
│   │   ├── Portfolio.css     # Portfolio styles
│   │   ├── Testimonials.css  # Testimonials styles
│   │   ├── Contact.css       # Contact styles
│   │   └── Footer.css        # Footer styles
│   ├── App.jsx                # Main App component
│   └── main.jsx               # Entry point
├── index.html                 # HTML template
├── package.json               # Dependencies
├── vite.config.js            # Vite configuration
└── README.md                  # This file
```

## 🛠️ Customization

### Update Personal Information

1. **Hero Section** (`src/components/Hero.jsx`)
   - Update title, description, and statistics

2. **About Section** (`src/components/About.jsx`)
   - Modify bio text and experience

3. **Services** (`src/data/servicesData.js`)
   - Add/edit/remove services

4. **Portfolio** (`src/data/portfolioData.js`)
   - Add your own projects

5. **Testimonials** (`src/data/testimonialsData.js`)
   - Add client testimonials

6. **Contact Info** (`src/components/Contact.jsx`)
   - Update email, phone, location

7. **Social Links** (`src/components/Footer.jsx`)
   - Add your social media URLs

### Change Colors

Edit CSS variables in `src/styles/index.css`:

```css
:root {
  --color-primary: #0A0E27;
  --color-secondary: #FF6B35;
  --color-accent: #F7B801;
  /* ... more colors */
}
```

### Change Fonts

Update Google Fonts import in `index.html` and CSS variables in `src/styles/index.css`

## 📦 Build for Production

### Create Production Build

```bash
npm run build
```
or
```bash
yarn build
```

This creates an optimized build in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```
or
```bash
yarn preview
```

## 🌐 Deployment

### Deploy to Netlify

1. Install Netlify CLI:
   ```bash
   npm install -g netlify-cli
   ```

2. Build the project:
   ```bash
   npm run build
   ```

3. Deploy:
   ```bash
   netlify deploy --prod
   ```

### Deploy to Vercel

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

### Deploy to GitHub Pages

1. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Add to `package.json`:
   ```json
   "homepage": "https://yourusername.github.io/repository-name",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

3. Deploy:
   ```bash
   npm run deploy
   ```

### Other Hosting Options

- **Firebase Hosting**
- **AWS S3 + CloudFront**
- **Surge.sh**
- **Render**

## 🔧 Technologies Used

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **CSS3** - Styling with custom properties
- **JavaScript ES6+** - Modern JavaScript features
- **Google Fonts** - Typography

## ✨ Features Breakdown

### Animations
- Fade in/out effects
- Slide animations
- Scale transitions
- Rotate effects
- Smooth scroll behavior
- Hover state animations
- Loading animations

### Responsive Breakpoints
- Desktop: 1024px+
- Tablet: 768px - 1023px
- Mobile: 320px - 767px

### Accessibility
- Semantic HTML5 elements
- ARIA labels
- Keyboard navigation
- Focus states
- Alt text for images
- Proper heading hierarchy

## 📝 Code Quality

- **Clean Code**: Well-commented and organized
- **Modular**: Reusable components
- **Consistent**: Follows naming conventions
- **Maintainable**: Easy to update and extend

## 🐛 Troubleshooting

### Port Already in Use
If port 3000 is busy, Vite will automatically try the next available port. Check the terminal for the actual port number.

### Build Errors
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Styling Issues
Make sure all CSS files are properly imported in their respective component files.

## 📧 Contact Form Note

The contact form is **frontend-only** and does not send actual emails. To make it functional:

1. **Use Email Services**:
   - EmailJS
   - Formspree
   - SendGrid

2. **Use Serverless Functions**:
   - Netlify Functions
   - Vercel Functions
   - AWS Lambda

3. **Backend Integration**:
   - Add your own backend API
   - Connect to email service

## 🎯 Future Enhancements

- Add blog section
- Implement dark mode toggle
- Add multi-language support
- Integrate CMS for easy content management
- Add analytics tracking
- Implement more animations
- Add project detail pages

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## ⭐ Show Your Support

If you like this project, please give it a ⭐️!

## 👨‍💻 Author

**Your Name**
- Portfolio: [your-website.com](https://your-website.com)
- LinkedIn: [@yourhandle](https://linkedin.com/in/yourhandle)
- GitHub: [@yourusername](https://github.com/yourusername)

---

Made with ❤️ and React
