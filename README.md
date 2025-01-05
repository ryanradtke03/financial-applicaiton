# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react';

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
});
```

# Project Folder Structure for Financial Application (React + TypeScript + Tailwind)

```
financial-application/
├── node_modules/
├── public/
│   ├── favicon.ico
│   ├── robots.txt
│   └── index.html
├── src/
│   ├── assets/                # Static assets like images, logos, etc.
│   │   ├── images/
│   │   ├── fonts/
│   │   └── styles/            # Global styles
│   │       ├── index.css
│   │       └── tailwind.css
│   ├── components/            # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── Navbar.tsx
│   ├── layouts/               # Layout components
│   │   ├── MainLayout.tsx
│   │   └── DashboardLayout.tsx
│   ├── pages/                 # Page components (mapped to routes)
│   │   ├── Home.tsx
│   │   ├── Dashboard.tsx
│   │   ├── Reports.tsx
│   │   └── NotFound.tsx
│   ├── features/              # Modules or business logic (feature-based)
│   │   ├── auth/
│   │   │   ├── Login.tsx
│   │   │   ├── Register.tsx
│   │   │   └── hooks/
│   │   └── charts/
│   │       ├── BarChart.tsx
│   │       └── LineChart.tsx
│   ├── hooks/                 # Reusable custom hooks
│   │   └── useAuth.ts
│   ├── utils/                 # Utility/helper functions
│   │   ├── api.ts
│   │   └── formatters.ts
│   ├── services/              # API or data-fetching services
│   │   ├── authService.ts
│   │   └── chartService.ts
│   ├── contexts/              # React Context API or Providers
│   │   ├── AuthContext.tsx
│   │   └── ThemeContext.tsx
│   ├── types/                 # TypeScript type definitions
│   │   ├── auth.ts
│   │   └── chart.ts
│   ├── routes/                # Routing configuration
│   │   ├── AppRoutes.tsx
│   │   └── ProtectedRoute.tsx
│   ├── App.tsx                # Main app component
│   ├── main.tsx               # Entry point
│   └── vite-env.d.ts          # TypeScript environment declarations
├── .gitignore
├── .prettierrc                # Prettier configuration
├── .prettierignore            # Prettier ignore rules
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

---

## **Key Folder and File Explanations**

### 1. **`components/`** - Reusable UI components

```typescript
export default function Button({ label }: { label: string }) {
  return <button className="px-4 py-2 bg-blue-500 text-white">{label}</button>;
}
```

### 2. **`layouts/`** - Predefined layouts for pages

```typescript
const MainLayout = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen flex flex-col">
    <header className="bg-blue-500 p-4">Header</header>
    <main className="flex-1">{children}</main>
    <footer className="bg-gray-800 p-4 text-white">Footer</footer>
  </div>
);
export default MainLayout;
```

### 3. **`pages/`** - Page-specific components mapped to routes

```typescript
const Home = () => {
  return <h1 className="text-2xl font-bold">Welcome to Home Page</h1>;
};
export default Home;
```

### 4. **`hooks/`** - Custom reusable hooks

```typescript
import { useState, useEffect } from 'react';

export function useAuth() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) setUser(JSON.parse(savedUser));
  }, []);
  return user;
}
```

### 5. **`services/`** - Handles API calls

```typescript
export async function fetchChartData() {
  const response = await fetch('/api/chart-data');
  return response.json();
}
```

### 6. **`types/`** - TypeScript type definitions

```typescript
export interface ChartData {
  labels: string[];
  values: number[];
}
```

### 7. **`routes/`** - Routing configuration

```typescript
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Dashboard from '../pages/Dashboard';

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  </BrowserRouter>
);
export default AppRoutes;
```

---

## **Key Benefits of This Structure**

1. **Scalability:** Easy to add features and new modules.
2. **Reusability:** Promotes reusable components and hooks.
3. **Readability:** Clear folder naming conventions make it easy to understand.
4. **Separation of Concerns:** Keeps logic and UI separated for easier debugging.

Let me know if you'd like further enhancements or additions to this structure!
