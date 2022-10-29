import { useContext } from 'react';
import { RouterContext } from '../contexts/routerContext';

function Routes({ children: routes }) {
  const { currentPath, setCurrentPath } = useContext(RouterContext);

  window.onpopstate = () => {
    setCurrentPath(window.location.pathname);
  };

  return routes.find(route => route.props.path === currentPath).props.element;
}

export default Routes;
