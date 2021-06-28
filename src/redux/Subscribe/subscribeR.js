import img1 from '../../assets/s1.jpg'

const CONTROL_SUBSCRIBE_VIS        = 'sub/CONTROL_SUBSCRIBE_VIS';
const CONTROL_SUBSCRIBE_CARDS_VIS  = 'sub/CONTROL_SUBSCRIBE_CARDS_VIS';
const CONTROL_SUBSCRIBE_BANNER_VIS = 'sub/CONTROL_SUBSCRIBE_BANNER_VIS';
const CONTROL_SUBSCRIBE_FORM_VIS   = 'sub/CONTROL_SUBSCRIBE_FORM_VIS';

let initialState = {
    subList: {
        list: [
            {
                id:1,
                price: 1200,
                previevImg:img1,
                bonuses:[
                    'Никакой рекламы',
                    'Новые серии через час после Японпии',
                    'Доступ к цифровой манге',
                ]
            },
            {
                id:2,
                price: 700,
                previevImg:img1,
                bonuses:[
                    'Никакой рекламы',
                    'Новые серии через час после Японпии',
                    'Доступ к цифровой манге',
                    'Стрим на 4 устройства одновременно',
                    'Неограниченный доступ к библиотеке Gaki`s World',
                ]
            },
            {
                id:3,
                price: 1000,
                previevImg:img1,
                bonuses:[
                    'Никакой рекламы',
                    'Новые серии через час после Японпии',
                    'Доступ к цифровой манге',
                    'Стрим на 4 устройства одновременно',
                    'Неограниченный доступ к библиотеке Gaki`s World',
                    'Офлайн просмотр',
                ]
            },
            {
                id:4,
                price: 1500,
                previevImg:img1,
                bonuses:[
                    'Никакой рекламы',
                    'Новые серии через час после Японпии',
                    'Доступ к цифровой манге',
                    'Стрим на 4 устройства одновременно',
                    'Неограниченный доступ к библиотеке Gaki`s World',
                    'Офлайн просмотр',
                    'Доступ в приватный канал дискорд',
                    'Скидка 20% на ежемесячный план',
                ]
            },
        ],
        subCardsVis: true,
    },
    subBanner: {
        subBannerVis: true,
    },
    subForm: {
        subFormVis: true,
    },
    subVis: true,
};

const SubscribeR = (state = initialState, action) => {
    switch (action.type) {
        case CONTROL_SUBSCRIBE_VIS:
            return {
                ...state,
                subVis: action.subVis,
            }
        case CONTROL_SUBSCRIBE_CARDS_VIS:
            return {
                ...state,
                subList: {...state.subList, subCardsVis: action.subCardsVis},
            }
        case CONTROL_SUBSCRIBE_BANNER_VIS:
            return {
                ...state,
                subBanner: {...state.subBanner, subBannerVis: action.subBannerVis},
            }
        case CONTROL_SUBSCRIBE_FORM_VIS:
            return {
                ...state,
                subForm: {...state.subForm, subFormVis: action.subFormVis},
            }
        default:
            return state;
    }
}

export const CONTROLSubVis       = (subVis)       => ({type: CONTROL_SUBSCRIBE_VIS, subVis});
export const CONTROLSubCardsVis  = (subCardsVis)  => ({type: CONTROL_SUBSCRIBE_CARDS_VIS, subCardsVis});
export const CONTROLSubBannerVis = (subBannerVis) => ({type: CONTROL_SUBSCRIBE_BANNER_VIS, subBannerVis});
export const CONTROLSubFormVis   = (subFormVis)   => ({type: CONTROL_SUBSCRIBE_FORM_VIS, subFormVis});

export default SubscribeR;