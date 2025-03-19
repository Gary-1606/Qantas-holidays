# Brief Intro

- This is a [Next.js](https://nextjs.org/docs/getting-started) project
- Styling is provided through [vanilla-extract](https://vanilla-extract.style/)
- Testing is implemented using [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) and [Jest](https://jestjs.io/)

## Live Preview URL

The application is hosted on Vercel and is available for viewing [qantas-holiday](https://qantas-holidays.vercel.app/)

## Git

The project codebase can be found in the [github repository](https://github.com/Gary-1606/Qantas-holidays)

## Environment

You'll want to ensure you have a node version manager installed (a common one is [NVM](https://github.com/nvm-sh/nvm))
The project is using Node 16.x

## Basic setup

1. Install dependencies: `npm install`
2. Follow the below steps to run the project

### Scripts

| **script** | **description**                                    |
| :--------- | :------------------------------------------------- |
| dev        | Runs next in dev mode on port 3000                 |
| build      | Runs a production build                            |
| lint       | Runs [ESLint](https://eslint.org/) across our code |
| test       | [Jest](https://jestjs.io/) (unit tests)            |

## Structure

This is the web app structure

```
├── src/                                <- Source directory containing all app code
│   ├── pages/                          <- Next.js routes and pages
│   │   ├── _app.tsx                    <- Next.js App component for global setup
│   │   ├── _document.tsx               <- Custom Document component for HTML structure
│   │   └── index.tsx                   <- Homepage component
│   │
│   ├── components/                     <- Reusable React components
│   │   ├── Header/                     <- Header component containing
│   │   └── Listings/                   <- Components for listing views
│   │
│   ├── api/                            <- API routes and services
│   │   ├── operations/                 <- API operations and handlers
│   │   ├── data/                       <- Data models and mock data
│   │   ├── types.ts                    <- API type definitions
│   │   └── index.ts                    <- API exports
│   │
│   ├── design-system/                  <- Design system components and styles
│   │   ├── components/                 <- Reusable design system components
│   │   ├── styles/                     <- Global styles and theme definitions
│   │   ├── tokens/                     <- Design tokens (colors, spacing, etc.)
│   │   └── utils/                      <- Design system utilities
│   │
│   ├── types/                          <- TypeScript type definitions
│   ├── hooks/                          <- Custom React hooks
│   └── constants.ts                    <- Application constants
│
├── public/                             <- Next.js static assets (images, fonts, etc.)
│
├── test/                               <- Test files and configurations
│
├── Configuration Files
│   ├── package.json                    <- Project configuration and dependencies
│   ├── tsconfig.json                   <- TypeScript configuration
│   ├── next.config.js                  <- Next.js configuration
│   ├── jest.config.js                  <- Jest testing configuration
│   └── .eslintrc.json                  <- ESLint configuration
```

## Overview

This project implements a hotels listing page for Qantas Hotels, featuring sorting options and a custom-built star rating component. The goal was to create a scalable, accessible, and well-tested application while keeping development efficient within the given timeframe.

## Approach & Trade-offs

### Why Next.js?

I chose Next.js for its flexibility and developer experience. Since there were no SEO requirements, I opted for Client-Side Rendering (CSR) to keep things simple and performant without the overhead of Server-Side Rendering (SSR). Hence, chose next.js 13 with pages router

### Styling with Vanilla Extract CSS

For styling, I had considered CSS Modules and CSS-in-JS libraries, but I wanted a type-safe, scalable approach with obstructed class names in production. Vanilla Extract CSS allowed me to:

- Create a design system with reusable UI components (e.g., Text, Label, Select, Stack).
- Maintain performance while keeping styles modular and maintainable.

Note: I leveraged this from my other personal project

### Star Rating Component (No Third-Party Library!)

The requirement encouraged avoiding third-party libraries, so I built a custom SVG-based Star Rating component. This allows for:

- Customization for different rating types (star and self-rated using distinct icons).
- Lightweight and accessible rendering.

### Sorting Functionality

Implemented sorting logic in React state for seamless user interactions, allowing sorting by:

- Price (low-high)
- Price (high-low)

### Testing Strategy

Since well-tested code is highly valued at Qantas, I used Jest & React Testing Library to verify UI behavior with mock test data

### Bonus: Deployment for Easy Review

To enhance the reviewer’s experience, I deployed the app to Vercel. This eliminates the need for local setup and allows instant access to the running application.

## Future Enhancements

Given more time or expanded requirements, I would:

**Improve SEO:** Implement SSR for better indexing if SEO becomes a requirement.

**Pagination:** Support larger datasets efficiently.

**Storybook:** Develop a component library for easier maintenance and reusability.

**Error Handling:** Custom 404/500 pages for a better user experience.

**CI/CD Improvements:** Implement Husky pre-commit hooks to enforce linting, formatting, and test execution before every commit.
