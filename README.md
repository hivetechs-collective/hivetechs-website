# HiveTechs Website

This is the official website for HiveTechs Collective LLC, showcasing our multi-model AI consensus pipeline products and services.

## Project Structure

The website is built using Next.js with TypeScript and Tailwind CSS, providing a modern, responsive design with fast page loads.

### Key Directories

- `src/app`: Contains the page components for each route
- `src/components`: Reusable UI components
- `public`: Static assets like images and fonts

### Pages

- Home (`/`): Main landing page
- Features (`/features`): Detailed feature descriptions
- Pricing (`/pricing`): Subscription plans and pricing details
- About (`/about`): Company information and team
- Contact (`/contact`): Contact form and information

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/hivetechs/hivetechs-website.git
cd hivetechs-website
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Run the development server
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the website

## Deployment

This website is designed to be deployed on Cloudflare Pages for optimal performance and security.

### Deploying to Cloudflare Pages

1. Push your code to a GitHub repository
2. In the Cloudflare dashboard, go to Pages and create a new project
3. Connect your GitHub repository
4. Configure the build settings:
   - Framework preset: Next.js
   - Build command: `npx @cloudflare/next-on-pages@1`
   - Build output directory: `.vercel/output/static`
   - Compatibility flags: Add `nodejs_compat` flag
   - Environment variables: Add any required environment variables

## Gumroad Integration

The website integrates with Gumroad for subscription management and payment processing. All product links point to the Gumroad store at `store.hivetechs.io`.

## Future Development

- User dashboard for subscription management
- Documentation section
- Blog for company updates and technical articles

## License

Copyright © 2025 HiveTechs Collective LLC. All rights reserved.
