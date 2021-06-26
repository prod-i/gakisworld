const CONTROL_MAIN_VIS = 'main/CONTROL_MAIN_VIS';

let initialState = {
    mainVis: true,
};

const mainR = (state = initialState, action) => {
    switch (action.type) {
        case CONTROL_MAIN_VIS:
            return {
                ...state,
                mainVis: action.mainVis,
            }
        default:
            return state;
    }
}

export const CONTROLMainVis = (mainVis) => ({ type: CONTROL_MAIN_VIS, mainVis });

export default mainR;