const CONTROL_HEADER_VIS = 'main/CONTROL_HEADER_VIS';

let initialState = {
    headerVis: true,
};

const headerR = (state = initialState, action) => {
    switch (action.type) {
        case CONTROL_HEADER_VIS:
            return {
                ...state,
                headerVis: action.headerVis,
            }
        default:
            return state;
    }
}

export const CONTROLHeaderVis = (headerVis) => ({ type: CONTROL_HEADER_VIS, headerVis });

export default headerR;