# UkBoyDesign

A modern web application built with React, TypeScript, and Vite, featuring Tailwind CSS for styling.

## 🚀 Tech Stack

- **React** 19.2.5 - UI library
- **TypeScript** 6.0.2 - Type safety
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** 4.2.4 - Utility-first CSS framework
- **React Icons** 5.6.0 - Icon library
- **ESLint** - Code quality and linting

## 📦 Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build locally

## 📁 Project Structure

```
src/
├── assets/          # Static assets
├── App.tsx          # Main App component
├── index.css        # Global styles
└── main.tsx         # Entry point
```

## 🎨 Features

- React 19 with TypeScript support
- Hot Module Replacement (HMR) for fast development
- Tailwind CSS for rapid UI development
- ESLint configuration for code quality
- Vite for optimized builds

## 📝 License

Specify your license here
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
