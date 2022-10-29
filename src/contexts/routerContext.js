import { createContext, useMemo, useState } from 'react';

const RouterContext = createContext();

function Router({ children }) {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  const value = useMemo(() => ({ currentPath, setCurrentPath }), [currentPath]);

  return <RouterContext.Provider value={value}>{children}</RouterContext.Provider>;
}

export { Router, RouterContext };
