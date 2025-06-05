
# Mohammed Ateeq - Portfolio Website

A modern, interactive portfolio website showcasing my skills, projects, and achievements as a Computer Science student and developer. Built with cutting-edge web technologies to demonstrate my expertise in full-stack development, data science, and modern UI/UX design.

## 🚀 About This Project

This portfolio website features a cyberpunk-inspired design with 3D animations, interactive elements, and a responsive layout. It includes sections for education, skills, projects, leadership experience, certifications, and achievements, all presented with smooth animations and modern web technologies.

### ✨ Key Features

- **Interactive 3D Elements**: Three.js powered animations and 3D skill visualizations
- **Responsive Design**: Optimized for all device sizes and screen resolutions
- **Cyberpunk Aesthetic**: Dark theme with neon accents and futuristic animations
- **Performance Optimized**: Fast loading times with lazy loading and optimized assets
- **Easter Eggs**: Hidden terminal interface with interactive commands
- **Smooth Animations**: GSAP and Framer Motion powered transitions

## 🛠️ Tech Stack

### Frontend
- **React 18** - Component-based UI library
- **TypeScript** - Type-safe JavaScript development
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Shadcn/ui** - High-quality UI components

### Animations & Interactions
- **Three.js** - 3D graphics and animations
- **Framer Motion** - Smooth UI animations
- **Custom CSS Animations** - Cyberpunk-themed effects

### Additional Libraries
- **React Router** - Client-side routing
- **Lucide React** - Modern icon library
- **React Query** - Data fetching and state management
- **React Hook Form** - Form handling and validation

## 📁 Project Structure

```
src/
├── components/
│   ├── sections/           # Main portfolio sections
│   │   ├── Hero.tsx       # Landing section with intro
│   │   ├── Education.tsx  # Educational background
│   │   ├── Skills.tsx     # Technical skills showcase
│   │   ├── Projects.tsx   # Featured projects
│   │   ├── Leadership.tsx # Leadership experience
│   │   ├── Certifications.tsx # Professional certifications
│   │   ├── Achievements.tsx   # Awards and recognitions
│   │   └── Contact.tsx    # Contact information
│   ├── ui/                # Reusable UI components
│   │   ├── Navigation.tsx # Main navigation bar
│   │   ├── Terminal.tsx   # Interactive terminal easter egg
│   │   ├── CustomCursor.tsx # Custom cursor effects
│   │   ├── MatrixRain.tsx # Background matrix animation
│   │   ├── ThemeToggle.tsx # Dark/light mode toggle
│   │   └── ...           # Shadcn/ui components
│   └── Portfolio.tsx      # Main portfolio component
├── pages/
│   ├── Index.tsx         # Home page
│   └── NotFound.tsx      # 404 error page
├── hooks/               # Custom React hooks
├── lib/                # Utility functions
└── styles/             # Global styles and theme

public/
├── favicon.ico         # Site favicon
├── placeholder.svg     # Placeholder images
└── robots.txt         # SEO robots file
```

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed on your machine:
- **Node.js** (version 18 or higher)
- **npm** or **yarn** package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:8080` to view the portfolio

### Build for Production

To create a production build:

```bash
npm run build
# or
yarn build
```

The built files will be in the `dist` directory, ready for deployment.

### Preview Production Build

To preview the production build locally:

```bash
npm run preview
# or
yarn preview
```

## 🎮 Easter Eggs

- **Terminal Access**: Press `~` key or use the Konami code (↑↑↓↓←→←→BA) to access the hidden terminal
- **Interactive Commands**: Type `help` in the terminal to see available commands
- **3D Interactions**: Hover over skill badges and project cards for 3D effects

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- **Desktop**: Full-featured experience with all animations
- **Tablet**: Adapted layouts with touch-friendly interactions
- **Mobile**: Streamlined interface with essential information

## 🎨 Design Philosophy

The design combines modern web development practices with a futuristic aesthetic:
- **Cyberpunk Theme**: Inspired by sci-fi aesthetics with neon colors
- **Performance First**: Optimized animations that don't compromise performance
- **Accessibility**: Proper contrast ratios and keyboard navigation
- **User Experience**: Intuitive navigation with engaging micro-interactions

## 🔧 Configuration

### Environment Variables

Create a `.env` file for any environment-specific configurations:
```env
VITE_API_URL=your-api-url
VITE_ANALYTICS_ID=your-analytics-id
```

### Customization

- **Colors**: Modify the color palette in `tailwind.config.ts`
- **Animations**: Adjust animation durations and effects in component files
- **Content**: Update personal information in the respective section components

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contact

Mohammed Ateeq - [Your Email] - [Your LinkedIn]

Project Link: [Repository URL]

---

Built with modern web technologies and attention to detail. Feel free to explore the code and reach out if you have any questions!
