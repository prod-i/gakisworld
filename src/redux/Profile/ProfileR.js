// import { API } from '../../API/api'
import img from '../../assets/img/serials/3m.jpg'

const CONTROL_PROFILE_VIS      = 'profile/CONTROL_PROFILE_VIS';
const CONTROL_PROFILE_MENU_VIS = 'profile/CONTROL_PROFILE_MENU_VIS';
const SET_FAVORITES            = 'profile/SET_FAVORITES';
const SET_TRACKED              = 'profile/SET_TRACKED';
const REMOVE_FAVORITES         = 'profile/REMOVE_FAVORITES';
const REMOVE_TRACKED           = 'profile/REMOVE_TRACKED ';

let initialState = {
    profile: {
        profileId: 1,
        fullName: "Анна Когай",
        nickName: 'Kaneki Ken',
        type: 'Премиум',
        RegData: '09.07.2021',
        photos: {
            "avatar": null,
            "bacg": null,
        },
        continueView: [],
        favorites: [],
        tracked: [],
        archive: [],
    },
    profileMenu: {
        profileMenuVis: true,
    },
    profileVis: true,
};

const ProfileR = (state = initialState, action) => {
    switch (action.type) {
        case CONTROL_PROFILE_VIS:
            return {
                ...state,
                profileVis: action.profileVis,
            }
        case CONTROL_PROFILE_MENU_VIS:
            return {
                ...state,
                profileMenu: { ...state.profileMenu, profileMenuVis: action.profileMenuVis },
            }
        case SET_FAVORITES:
            return {
                ...state,
                profile: { ...state.profile, favorites: [...state.profile.favorites, action.favoritesSerials]},
            }
        case SET_TRACKED:
            console.log(state.profile.tracked);
            return {
                ...state,
                profile: { ...state.profile, tracked: [...state.profile.tracked, action.trackedSerials]},
            }
        case REMOVE_FAVORITES:
            return {
                ...state,
                profile: { ...state.profile, favorites: state.profile.favorites.filter(item => item.id !== action.favoriteId)},
            }
        case REMOVE_TRACKED:
            console.log(state.profile.tracked);
            return {
                ...state,
                profile: { ...state.profile, tracked: state.profile.tracked.filter(item => item.id !== action.trackedsId)},
            }
        default:
            return state;
    }
}


export const CONTROLProfileVis      = (profileVis)       => ({ type: CONTROL_PROFILE_VIS, profileVis });
export const CONTROLProfileMenuVis  = (profileMenuVis)   => ({ type: CONTROL_PROFILE_MENU_VIS, profileMenuVis });
export const setFavorites           = (favoritesSerials) => ({ type: SET_FAVORITES, favoritesSerials });
export const setTracked             = (trackedSerials)   => ({ type: SET_TRACKED, trackedSerials });
export const removeFavorites        = (favoriteId)       => ({ type: REMOVE_FAVORITES, favoriteId });
export const removeTracked          = (trackedsId)        => ({ type: REMOVE_TRACKED, trackedsId });




export default ProfileR;