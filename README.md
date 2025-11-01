# SyncUp Frontend Intern Skill Test

A Next.js dashboard application with Tailwind CSS featuring a pixel-perfect design implementation and job listings page.

## Features

### Part 1: Figma to Frontend
- ✅ Dashboard UI matching the Figma design
- ✅ Responsive sidebar navigation
- ✅ Statistical cards with metrics
- ✅ Line graph visualization
- ✅ Data tables for posts and job posts
- ✅ Fully responsive design (mobile and desktop)

### Part 2: Frontend Logic
- ✅ `/jobs` page with API integration
- ✅ Real-time search functionality
- ✅ Job cards display
- ✅ Modal with full job details
- ✅ Loading and empty states

## Tech Stack

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **React Hooks**

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Dashboard page
│   └── jobs/
│       └── page.tsx         # Jobs listing page
├── components/
│   ├── Sidebar.tsx          # Navigation sidebar
│   └── StatCard.tsx         # Statistics card component
└── package.json
```

## Time Spent

- **Part 1 (Figma to Frontend)**: ~30 minutes
  - Layout and structure setup
  - Sidebar navigation
  - Dashboard components
  - Responsive design implementation

- **Part 2 (Frontend Logic)**: ~30 minutes
  - API integration
  - Search functionality
  - Modal implementation
  - Loading states

## Notes

- The design matches the Figma specifications with exact spacing and typography
- Fully responsive across all device sizes
- Clean, modular code structure
- Uses semantic HTML throughout
- Smooth transitions and hover effects implemented

## API

The jobs page fetches data from:
```
https://mocki.io/v1/5e1f3c46-3f63-44ab-8a8e-f60e6d4b7d5c
```

## Build

To create a production build:

```bash
npm run build
npm start
```

## Assumptions

- Mock API returns job data in the expected format
- Sidebar is hidden on mobile devices for better UX
- Dashboard data is static (as per design)
- All icons use emoji for simplicity (can be replaced with proper icon libraries if needed)

