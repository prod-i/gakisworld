const TOGGLE_IS_MAIN_VIS = 'main/TOGGLE_IS_MAIN_VIS';

let initialState = {
    mainVis: true,
};

const mainR = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_IS_MAIN_VIS:
            return {
                ...state,
                mainVis: action.mainVis,
            }
        default:
            return state;
    }
}

export const toggleIsMainVis = (mainVis) => ({ type: TOGGLE_IS_MAIN_VIS, mainVis });

export default mainR;