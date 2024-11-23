import { hideSideMenu, toggleSideMenu } from './uiSlice';

export const startToggleSideMenu = () => {
    return (dispatch) => {
        dispatch(toggleSideMenu());
    };
};

export const startHideSideMenu = () => {
    return (dispatch) => {
        dispatch(hideSideMenu());
    };
};

