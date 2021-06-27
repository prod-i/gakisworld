const CONTROL_MAIN_VIS = 'main/CONTROL_MAIN_VIS';
const CONTROL_SLIDER_VIS = 'main/CONTROL_SLIDER_VIS';
const CONTROL_BANNER_VIS = 'main/CONTROL_BANNER_VIS';
const CONTROL_CONTINUE_VIS = 'main/CONTROL_CONTINUE_VIS';
const CONTROL_PREVNEWS_VIS = 'main/CONTROL_PREVNEWS_VIS';
const CONTROL_POPULAR_VIS = 'main/CONTROL_POPULAR_VIS';

let initialState = {
    slider: {
        sliderVis: true,
    },
    banner: {
        bannerVis: true,
    },
    continueView: {
        list:[
            {id:1,},
            {id:2,},
            {id:3,},
            {id:4,},
        ],
        continueViewVis: true,
    },
    prevNews: {
        prevNewsVis: true,
    },
    popular: {
        popularVis: true,
    },
    mainVis: true,
};

const mainR = (state = initialState, action) => {
    switch (action.type) {
        case CONTROL_MAIN_VIS:
            return {
                ...state,
                mainVis: action.mainVis,
            }
        case CONTROL_SLIDER_VIS:
            return {
                ...state,
                slider: {...state.slider, sliderVis: action.sliderVis},
            }
        case CONTROL_BANNER_VIS:
            return {
                ...state,
                banner: {...state.banner, bannerVis: action.bannerVis},
            }
        case CONTROL_CONTINUE_VIS:
            return {
                ...state,
                continueView: {...state.continueView, continueViewVis: action.continueViewVis},
            }
        case CONTROL_PREVNEWS_VIS:
            return {
                ...state,
                prevNews: {...state.prevNews, prevNewsVis: action.prevNewsVis},
            }
        case CONTROL_POPULAR_VIS:
            return {
                ...state,
                popular: {...state.popular, popularVis: action.popularVis},
            }
        default:
            return state;
    }
}

export const CONTROLMainVis     = (mainVis)         => ({ type: CONTROL_MAIN_VIS, mainVis });
export const CONTROLSliderVis   = (sliderVis)       => ({ type: CONTROL_SLIDER_VIS, sliderVis });
export const CONTROLBannerVis   = (bannerVis)       => ({ type: CONTROL_BANNER_VIS, bannerVis });
export const CONTROLContinueVis = (continueViewVis) => ({ type: CONTROL_CONTINUE_VIS, continueViewVis });
export const CONTROLPrevNewsVis = (prevNewsVis)     => ({ type: CONTROL_PREVNEWS_VIS, prevNewsVis });
export const CONTROLPopularVis  = (popularVis)      => ({ type: CONTROL_POPULAR_VIS, popularVis });

export default mainR;