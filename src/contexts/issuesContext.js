import { createContext, useCallback, useMemo, useState } from 'react';

const IssuesContext = createContext();

function IssuesProvider({ children }) {
  const [issues, setIssues] = useState([]);

  const add = useCallback(nextIssues => {
    setIssues(cur => [...cur, ...nextIssues]);
  }, []);

  const value = useMemo(() => ({ list: issues, add }), [issues]);

  return <IssuesContext.Provider value={value}>{children}</IssuesContext.Provider>;
}

export { IssuesProvider, IssuesContext };
