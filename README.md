This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Writing Bot

Writing Bot is an AI-powered assignment assistant built with [Next.js](https://nextjs.org) and modern React. It provides a streamlined workflow for uploading assignment files, entering assignment details, and downloading generated results.

## Features

- **Modern UI**: Responsive, accessible interface using Tailwind CSS and custom components.
- **Authentication**: Secure login form with validation.
- **Assignment Workflow**: Multi-step process for uploading files, entering assignment details, and downloading results.
- **Form Validation**: Robust validation using [React Hook Form](https://react-hook-form.com/) and [Yup](https://github.com/jquense/yup).
- **File Uploads**: Supports file and ZIP uploads with size/type validation.
- **Reusable Components**: Button, Input, FileUpload, and layout components.
- **Font Optimization**: Uses [next/font](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) for optimal font loading (Geist, Montserrat).
- **ESLint & Prettier**: Code quality enforced via ESLint and Prettier.

## Getting Started

First, install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Directory Structure

Here's an overview of the project structure:

```
├── app/                # Next.js app directory (routing, pages, layouts)
│   ├── (pages)/        # App routes (assignment details, create, success)
│   ├── globals.css     # Global styles (Tailwind, custom CSS variables)
│   ├── layout.js       # Root layout (fonts, global providers)
│   └── page.js         # Login Page
├── components/
│   ├── common/         # Common components (Button, Input, FileUpload)
│   ├── forms/          # Form components (LoginForm, AssignmentForm)
│   ├── layouts/        # Layout components (TwoSideLayout, SimpleLayout)
│   └── tables/         # Table components (History Data Table)
├── public/             # Static assets (images, favicon)
├── package.json        # Project metadata and scripts
├── postcss.config.mjs  # PostCSS config (Tailwind)
├── jsconfig.json       # JS config (path aliases)
├── eslint.config.mjs   # ESLint config
└── README.md           # Project documentation
```
