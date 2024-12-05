'use client';
import { Provider } from 'react-redux';
import { store } from './store';

import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const ReduxProvider = ({ children }) => {
    return(
        <>
            <ToastContainer /> 
            <Provider store={store}>
                {children}
            </Provider>
        </>
    ) 
};

export default ReduxProvider;
