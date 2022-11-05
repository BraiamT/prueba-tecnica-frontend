import { useRef, useEffect } from 'react';

/**
 * Este custom hook se encarga de realizar el cambio de título
 * de la página cada que el componente es montado
 */

export const useDocumentTitle = ( title, prevailOnUnmount = false ) => {
  const defaultTitle = useRef(document.title);

  useEffect(() => {
    document.title = title;
  }, [title]);

  useEffect(() => () => {
    if (!prevailOnUnmount) {
      document.title = defaultTitle.current;
    }
  }, [])
}
