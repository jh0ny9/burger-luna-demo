# Burger Luna Landing Demo

Prototipo de landing page moderna para Burger Luna construido con **React + Vite + TypeScript + Tailwind + Framer Motion + Lucide**.

## Estructura base del proyecto

```text
burger-luna-demo/
├─ public/
│  ├─ favicon.svg
│  └─ logo-burger-luna.svg
├─ src/
│  ├─ components/
│  │  ├─ layout/
│  │  └─ sections/
│  ├─ assets/
│  ├─ data/
│  ├─ types/
│  ├─ App.tsx
│  ├─ index.css
│  └─ main.tsx
├─ index.html
├─ package.json
├─ postcss.config.js
├─ tailwind.config.js
├─ tsconfig.json
└─ vite.config.ts
```

## Desarrollo local

```bash
npm install
npm run dev
```

## Build producción

```bash
npm run build
npm run preview
```

## Deploy en Vercel

1. Sube el repositorio a GitHub.
2. Entra en [Vercel](https://vercel.com/) y pulsa **Add New Project**.
3. Importa el repositorio.
4. Vercel detectará automáticamente Vite.
5. Confirma:
   - Build Command: `npm run build`
   - Output Directory: `dist`
6. Pulsa **Deploy**.
