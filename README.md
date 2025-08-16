# 📦 React UI Component Library: InputField & DataTable

This repository contains a **reusable UI component library** built with **React, TypeScript, and TailwindCSS**.  
It features two core components:

- **InputField** – a flexible, accessible, and styled text input.
- **DataTable** – a type-safe, interactive table with sorting and row selection.

The components are documented and visualized using **Storybook**.

👉 **[Storybook Preview (Replace with your deployed link)](https://your-deployment-link.com)**

---

## 🚀 Project Overview

This project demonstrates building **scalable, reusable, and well-documented UI components** in a modern frontend stack.

### Core Technologies

- ⚛️ **React 18+**
- 🟦 **TypeScript**
- 🎨 **TailwindCSS** for styling
- ⚡ **Vite** for fast development and bundling
- 📖 **Storybook** for interactive component documentation
- 🧩 **clsx** + **tailwind-merge** for className management

---

## 📂 Project Structure

/

├── .storybook/ # Storybook configuration

├── public/ # Static assets

├── src/

│ ├── components/ # Reusable UI components

│ │ ├── DataTable/

│ │ │ ├── DataTable.tsx

│ │ │ └── index.ts

│ │ └── InputField/

│ │ ├── InputField.tsx

│ │ └── index.ts

│ ├── stories/ # Storybook stories

│ │ ├── DataTable.stories.tsx

│ │ └── InputField.stories.tsx

│ ├── types/ # Shared TypeScript types

│ │ └── index.ts

│ ├── utils/ # Utility functions

│ │ └── cn.ts # Tailwind class name merger

│ ├── index.css # Global styles & Tailwind directives

│ └── main.tsx # App entry point

├── .eslintrc.cjs # ESLint configuration

├── package.json # Dependencies & scripts

├── postcss.config.js # PostCSS config (Tailwind)

├── tailwind.config.js # TailwindCSS configuration

├── tsconfig.json # TypeScript config

└── README.md # Project documentation




---

## ⚙️ Setup & Local Development

1. **Clone the Repository**

```bash
git clone https://github.com/DineshBunny-1/UICOMPONENTS.git
cd UICOMPONENTS
Install Dependencies



npm install
Run the Development Server (if you have a sample app)



npm run dev
Run Storybook



npm run storybook
Storybook will open at 👉 http://localhost:6006

🧠 Approach & Thought Process
Component Design Philosophy
♻️ Reusability & Scalability – Props-driven, self-contained components.

👨‍💻 Developer Experience – TypeScript for safety + Storybook for docs.

🧬 Atomic Design – InputField as an atom, DataTable as a molecule/organism.

🔡 InputField Component
Styling: Variants (filled, outlined, ghost) & sizes (sm, md, lg) via TailwindCSS.

State Management: Controlled input (value managed by parent).

Accessibility: htmlFor, id, and aria-invalid for screen readers.

📊 DataTable Component
Type Safety: Generics <T> allow flexible schemas.

State Management: useState + useMemo for sorting & selection.

Performance: Memoization prevents expensive recalculations.

UX Features: Loading states, empty states, hover effects, and sort icons.

☁️ Deploying Storybook
Deploying with Vercel
Push to GitHub
Ensure your repo is on GitHub.

Create a Vercel Project

Sign in to Vercel

Click “Add New…” → “Project”

Import your GitHub repo

Configure Build

Framework Preset: Vite

Build Command: npm run build-storybook

Output Directory: storybook-static

Deploy
Click Deploy → get a unique Storybook URL 🎉




📜 License
MIT © DineshBunny-1
