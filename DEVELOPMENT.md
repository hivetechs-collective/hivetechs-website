# HiveTechs Website - Development Guide

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/hivetechs-collective/hivetechs-website.git
cd hivetechs-website

# Install dependencies and setup development environment
npm install

# Start development server
npm run dev
```

The website will be available at `http://localhost:3000`.

## 🛠️ Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production  
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run check-build` - Validate build requirements
- `npm run setup-dev` - Setup development environment

### Development Safeguards

This project includes automated checks to prevent common issues:

1. **Pre-development setup** (`predev` script) - Ensures all required files exist
2. **Pre-build validation** (`prebuild` script) - Validates dependencies and compilation
3. **GitHub Actions** - Automated build checks on every push/PR

### Required Files

The following files are automatically created if missing:

- `src/lib/utils.ts` - Utility functions for className merging
- `src/components/ui/Button.tsx` - Base UI components

### Dependencies

Key dependencies that must be present:

- `clsx` - Conditional className construction
- `tailwind-merge` - Tailwind CSS class merging
- `next` - React framework
- `typescript` - Type checking

## 📁 Project Structure

```
src/
├── app/                 # Next.js 13+ app directory
│   ├── page.tsx        # Homepage
│   ├── layout.tsx      # Root layout
│   ├── globals.css     # Global styles
│   └── */              # Other pages
├── components/         # React components
│   ├── ui/            # Base UI components
│   └── *.tsx          # Page-specific components
└── lib/               # Utility functions
    └── utils.ts       # Common utilities
```

## 🔧 Build Validation

Before deploying, run:

```bash
npm run check-build
```

This validates:
- ✅ Dependencies are installed
- ✅ Required utility files exist  
- ✅ Package.json has required dependencies
- ✅ TypeScript compilation succeeds

## 🚀 Deployment

The website is deployed to Cloudflare Pages:

```bash
npm run deploy
```

## 🔐 License

See [LICENSE](LICENSE) file for details.

## 📞 Support

- Email: support@hivetechs.io
- Website: https://hivetechs.io