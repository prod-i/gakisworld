
const CONTROL_LOGIN_VIS        = 'profile/CONTROL_LOGIN_VIS';

let initialState = {
    loginVis: true,
};

const loginR = (state = initialState, action) => {
    switch (action.type) {
        case CONTROL_LOGIN_VIS:
            return {
                ...state,
                loginVis: action.loginVis,
            }
        default:
            return state;
    }
}

export const CONTROLLoginVis = (loginVis) => ({type: CONTROL_LOGIN_VIS, loginVis});

export default loginR;