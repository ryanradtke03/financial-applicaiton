import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

// Dynamic import for pages
const pages = import.meta.glob('../pages/*.tsx', { eager: true });

// Map routes automatically based on filenames
const routeComponents = Object.entries(pages).map(([path, module]) => {
  // Extract the page name from the path (e.g., Login.tsx -> /login)
  const name = path.match(/\/pages\/(.*)\.tsx$/)![1].toLowerCase();

  // Explicitly cast module.default to React.ComponentType
  const Component = module as { default: React.ComponentType };

  // Return a route with a dynamic path
  return (
    <Route
      key={name}
      path={name === 'login' ? '/' : `/${name}`}
      element={<Component.default />}
    />
  );
});

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        {routeComponents}
        {/* Add a 404 page fallback */}
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
