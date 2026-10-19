# Sathu Dinesh — Personal Portfolio

A responsive portfolio website for presenting Sathu Dinesh's frontend development background, skills, selected projects, and contact details.

## Features

- Home, About, Projects, Contact, and not-found pages
- Responsive navigation with an accessible mobile menu
- Cohesive deep-navy visual system with responsive layouts
- Project cards with category filters and optional repository/demo links
- Validated contact form with React Hook Form and Zod
- Honest unconfigured-contact-service message; the form does not claim to send email
- Page metadata, Open Graph preview artwork, keyboard focus styles, and reduced-motion support
- Vercel SPA route fallback

## Technology

React, TypeScript, Vite, Tailwind CSS v4, React Router, Lucide React, React Hook Form, and Zod.

## Project structure

```text
src/
  components/   Shared layout and project components
  data/         Personal details, skills, and project records
  pages/        Route-level page components
  services/     Contact-service integration boundary
  App.tsx       Lazy route configuration
  App.css       Portfolio component and responsive styles
  index.css     Tailwind v4 import and global styles
public/
  images/       Social preview artwork
  resume/       Downloadable resume PDF
```

## Install and run

Node.js and npm are required.

```sh
npm install
npm run dev
```

The local Vite URL is printed in the terminal.

## Quality checks

```sh
npm run lint
npm run build
npm run preview
```

## Update personal details

Edit `src/data/personal.ts` to update the name, professional summary, contact email, social links, education, experience, and resume path.

Add or edit skill groups in `src/data/skills.ts`. The resume is served from `public/resume/resume.pdf`.

## Add projects

Add project records to `src/data/projects.ts`. Each record contains a title, description, technologies, and category (`Frontend` or `Full Stack`). Add `repository` and/or `demo` only for real working URLs; missing links display as unavailable.

To add a live demo quickly:

1. Deploy the project first. For a static or Vite/React frontend, import its repository into Vercel and deploy with the detected build settings. For a Flask application, deploy the frontend and API to hosts that support each runtime, then configure the frontend to use the deployed API URL.
2. Copy the deployed public URL.
3. Add it to the matching record in `src/data/projects.ts`:

   ```ts
   {
     slug: 'my-project',
     title: 'My Project',
     description: 'A short description of the project.',
     technologies: ['React', 'TypeScript'],
     category: 'Frontend',
     repository: 'https://github.com/your-user/my-project',
     demo: 'https://your-project.vercel.app',
   }
   ```

4. Run `npm run lint` and `npm run build`, then publish the changes. The Projects page will show the live-demo link automatically.

Use the real deployed URL rather than a local `localhost` address. Keep bundle size low, compress and correctly size images, and avoid adding animation packages for simple visual effects; this portfolio's button glow is CSS-only and runs without JavaScript.

## Configure a real contact service

The contact form validates fields but deliberately does not send or simulate delivery. To connect it:

1. Implement a backend or trusted email-provider request inside `src/services/contactService.ts`.
2. Keep private credentials on the server; do not put secret keys in frontend variables or source files.
3. Update the form's status handling to display a success message only after the service confirms delivery, and an error message if it fails.
4. Add any required server-side environment variables to the hosting provider. Do not commit `.env` files containing secrets.

## Publish to GitHub

Create an empty repository on GitHub, then from this project folder run:

```sh
git init
git add .
git commit -m "Build personal portfolio website"
git branch -M main
git remote add origin https://github.com/<your-user>/<your-repository>.git
git push -u origin main
```

Replace the remote URL with your actual repository URL. If this folder is already a Git repository, skip `git init` and configure the remote as appropriate.

## Deploy to Vercel

1. Push the project to GitHub.
2. Import the repository in Vercel.
3. Keep the detected Vite defaults: build command `npm run build`, output directory `dist`, and install command `npm install`.
4. Deploy. `vercel.json` routes direct SPA visits such as `/about` and `/projects` to the Vite app.
5. Confirm your contact details and resume are up to date before publishing.
