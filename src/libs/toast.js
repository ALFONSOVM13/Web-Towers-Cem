/**
* Solo funcionan en client components 
**/
import { toast } from 'react-toastify';

export const toastSuccess = ( msg, position='top-right' ) => {
    return toast.success(msg, {
        position,
        autoClose: 1000
    })
}
export const toastError = ( msg, position='top-right' ) => {
    return toast.error(msg, {
        position,
        autoClose: 3000
    })
}
export const toastDark = ( msg, position='top-right' ) => {
    return toast.dark(msg, {
        theme: "dark",
        position,
        hideProgressBar: true,
        autoClose: 1000
    })
}

