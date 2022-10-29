import { useContext } from 'react';
import { RouterContext } from '../contexts/routerContext';

const base = new URL(window.location).origin;

function useRouter() {
  const { setCurrentPath } = useContext(RouterContext);

  return {
    push: path => {
      window.history.pushState(path, '', base + path);
      setCurrentPath(path);
    },
  };
}

export default useRouter;
