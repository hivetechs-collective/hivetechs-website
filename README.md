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

## License & Legal Notice

**⚠️ PROPRIETARY SOFTWARE - ALL RIGHTS RESERVED**

This repository contains proprietary software and intellectual property owned exclusively by **HiveTechs Collective LLC**. 

### 🚫 Unauthorized Use Prohibited

The following activities are **STRICTLY PROHIBITED** without explicit written permission:
- Copying, reproducing, or distributing any part of this codebase
- Creating derivative works or competing products
- Using any business logic, UI designs, or proprietary methodologies
- Reverse engineering or extracting intellectual property

### 📜 License Requirements

- **Commercial Use**: Requires explicit licensing agreement
- **Educational Use**: Limited to non-commercial academic research only
- **Attribution**: Required for any permitted use
- **Distribution**: Prohibited without written authorization

### 📞 Contact for Licensing

- **Legal Inquiries**: legal@hivetechs.io
- **Licensing**: licensing@hivetechs.io
- **Website**: https://hivetechs.io

### ⚖️ Legal Protection

This software is protected by:
- U.S. and international copyright law
- Trade secret protections
- Proprietary business methodologies
- Contractual licensing agreements

**Violation of this license may result in legal action for damages and injunctive relief.**

For complete license terms, see the [LICENSE](LICENSE) file.

---

Copyright © 2025 HiveTechs Collective LLC. All rights reserved.
