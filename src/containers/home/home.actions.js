export const HomeActions = {
    CLICK_BUTTON: 'CLICK_BUTTON',
};

export const clickButtonAction = () => {
    console.log('button clicked');
    return ({
        type: HomeActions.CLICK_BUTTON,
    });
};

