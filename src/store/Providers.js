'use client';
import { Provider } from 'react-redux';
import { store } from './store';

import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from 'react';

export const Providers = ({ children }) => {

    const [hasMounted, setHasMounted] = useState(false)

    useEffect(() => {
      setHasMounted(true)
    }, [])
  
    if (!hasMounted) {
      return null
    }

    return(
        <>
            <ToastContainer /> 
            <Provider store={store}>
                {children}
            </Provider>
        </>
    ) 
};

