const CONTROL_FOOTER_VIS = 'main/CONTROL_FOOTER_VIS';

let initialState = {
    footerVis: true,
};

const footerR = (state = initialState, action) => {
    switch (action.type) {
        case CONTROL_FOOTER_VIS:
            return {
                ...state,
                footerVis: action.footerVis,
            }
        default:
            return state;
    }
}

export const CONTROLFooterVis = (footerVis) => ({ type: CONTROL_FOOTER_VIS, footerVis });

export default footerR;