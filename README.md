# Poovarasan 3D Portfolio

A modern 3D interactive developer portfolio built with React, Vite, Tailwind CSS, Three.js, React Three Fiber, Drei, Framer Motion and Lucide React.

## Features


- 3D animated hero laptop scene
- Animated stars and floating 3D objects
- 3D globe/contact visual
- Smooth scroll and Framer Motion page animations
- Responsive navbar with mobile menu
- Recruiter-friendly About, Skills, Projects, Experience and Contact sections
- Lightweight 3D geometry instead of heavy external models
- Clean folder structure and reusable components

## Tech Stack

- React.js with Vite
- Tailwind CSS
- Three.js
- @react-three/fiber
- @react-three/drei
- Framer Motion
- Lucide React icons

## Folder Structure

```txt
poovarasan-3d-portfolio/
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
├── README.md
└── src/
    ├── App.jsx
    ├── index.css
    ├── main.jsx
    ├── canvas/
    │   ├── GlobeCanvas.jsx
    │   └── HeroCanvas.jsx
    ├── components/
    │   ├── About.jsx
    │   ├── Contact.jsx
    │   ├── Experience.jsx
    │   ├── Footer.jsx
    │   ├── Hero.jsx
    │   ├── Navbar.jsx
    │   ├── Projects.jsx
    │   ├── SectionTitle.jsx
    │   └── Skills.jsx
    └── data/
        └── portfolio.js
```

## Run Locally

```bash
npm install
npm run dev
```

Open the local URL shown in the terminal, usually:

```bash
http://localhost:5173
```

## Build for Production

```bash
npm run build
npm run preview
```

## Customize Your Details

Edit this file:

```txt
src/data/portfolio.js
```

Change:

- Email
- Phone
- GitHub URL
- LinkedIn URL
- Resume URL
- Project live links
- Project GitHub links

## Resume Download

The resume button points to:

```txt
/Poovarasan_Resume.pdf
```

Put your resume PDF inside the `public` folder with this exact name:

```txt
public/Poovarasan_Resume.pdf
```

## Deployment

You can deploy this project on Vercel:

1. Push the code to GitHub.
2. Import the repository in Vercel.
3. Keep the framework as Vite.
4. Build command: `npm run build`
5. Output directory: `dist`
