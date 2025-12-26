# GitRankHub Frontend

Modern web interface for GitRankHub, built with Next.js 16 and React 19. This application provides an intuitive dashboard for viewing and analyzing GitHub repository rankings and user profiles.

## Tech Stack

- **Framework**: Next.js 16.1 with App Router
- **UI**: React 19.2 with TypeScript
- **Styling**: Tailwind CSS 4
- **Component Library**: Radix UI primitives
- **State Management**: TanStack React Query (v5)
- **HTTP Client**: Axios
- **Theme**: next-themes (dark/light mode support)
- **Icons**: Lucide React

## Project Structure

```
gitrankhub_frontend/
├── app/                    # Next.js App Router pages
│   ├── actions/           # Server actions
│   ├── authenticate/      # Authentication pages
│   └── components/        # Page-specific components
├── components/            # Shared components
│   └── ui/               # Reusable UI components
├── lib/                   # Utilities and configuration
└── public/               # Static assets
```

## Prerequisites

- Node.js 18+ installed
- npm, yarn, pnpm, or bun package manager
- GitRankHub backend API running (see backend README)

## Environment Setup

Create a `.env.local` file in the project root:

```env
NEXT_PUBLIC_API_URL=http://localhost:8080
```

Adjust the API URL to match your backend server configuration.

## Installation

Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

## Development

Start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

The application features:
- Hot reload on file changes
- Server-side rendering (SSR)
- Authentication flow
- Dark/light theme toggle
- Type-safe API integration

## Build

Create an optimized production build:

```bash
npm run build
npm run start
```

## Linting

Run ESLint to check code quality:

```bash
npm run lint
```

## Features

- 🔐 User authentication and session management
- 🌓 Dark/light mode theme switching
- 📊 GitHub repository rankings
- 👤 User profile management
- 🎨 Modern, responsive UI with Tailwind CSS
- ⚡ Optimized performance with React Query caching

## Backend Integration

This frontend connects to the GitRankHub Go backend API. Ensure the backend server is running before starting the frontend application. See the backend README for setup instructions.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [TanStack Query](https://tanstack.com/query/latest)

## License

Private project
