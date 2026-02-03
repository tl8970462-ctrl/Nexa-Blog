# NexaBlog Platform Dependencies

## Project Overview
Modern, scalable informational blog website built with Next.js and Tailwind CSS.

## Installation

To install all dependencies, run:

```bash
npm install
```

## Required Dependencies

### Core Framework
- **next** (^16.1.6) - React framework for production
- **react** (^19.2.4) - JavaScript library for building user interfaces
- **react-dom** (^19.2.4) - React package for working with the DOM

### Styling & UI
- **tailwindcss** (^4.1.18) - Utility-first CSS framework
- **@headlessui/react** (^2.2.9) - Unstyled, accessible UI components
- **@heroicons/react** (^2.2.0) - SVG icon library
- **lucide-react** (^0.563.0) - Beautiful hand-crafted SVG icons

### State Management & Animation
- **framer-motion** (^12.29.3) - Production-ready motion library

### Theme & Styling Tools
- **next-themes** (^0.4.6) - Client and server-side theme switching

### Development Dependencies

#### TypeScript Support
- **typescript** (^5.9.3) - TypeScript compiler
- **@types/node** (^25.2.0) - Node.js type definitions
- **@types/react** (^19.2.10) - React type definitions
- **@types/react-dom** (^19.2.3) - React DOM type definitions

#### Build Tools
- **postcss** (^8.5.6) - CSS post-processor
- **@tailwindcss/postcss** (^4.1.18) - Tailwind CSS PostCSS plugin
- **autoprefixer** (^10.4.24) - CSS vendor prefixer

## Scripts Available

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript type checking
npm run format       # Format code with Prettier
npm run test         # Run tests
npm run test:watch   # Run tests in watch mode
npm run test:coverage # Run tests with coverage
```

## Environment Setup

1. Install Node.js (version 18 or higher recommended)
2. Clone this repository
3. Run `npm install` to install all dependencies
4. Run `npm run dev` to start the development server

## Notes

- This project uses Next.js App Router (app directory)
- TypeScript is configured for strict type checking
- Tailwind CSS is configured with custom theme
- The project supports both light and dark themes
- All dependencies are production-ready and actively maintained