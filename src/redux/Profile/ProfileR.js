// import { profileAPI } from '../../API/api'

const CONTROL_PROFILE_VIS        = 'profile/CONTROL_PROFILE_VIS';
const CONTROL_PROFILE_MENU_VIS   = 'profile/CONTROL_PROFILE_MENU_VIS';

let initialState = {
    profile: {
        userId: 1,
        fullName: "Анна Когай",
        nickName: 'Kaneki Ken',
        type: 'standart',
        photos: {
            "avatar": null,
            "bacg": null,
        },
        continueView:[
            {serialsId:1, seriesId:1, nameSerials:"Клинок рассекающий демонов", imgM:null, progress:'50%',},
            {serialsId:2, seriesId:1, nameSerials:"Атака титанов", imgM:null, progress:'50%'},
        ], 
        favorites:[
            {serialsId:1, nameSerials:"Клинок рассекающий демонов", imgM:null},
            {serialsId:2, nameSerials:"Атака титанов", imgM:null},
        ], 
        tracked:[
            {serialsId:1, nameSerials:"Клинок рассекающий демонов", imgM:null},
            {serialsId:2, nameSerials:"Атака титанов", imgM:null},
        ], 
        archive:[
            {serialsId:1, nameSerials:"Клинок рассекающий демонов", imgM:null},
            {serialsId:2, nameSerials:"Атака титанов", imgM:null},
        ], 
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
                profileMenu: {...state.profileMenu, profileMenuVis: action.profileMenuVis},
            }
        default:
            return state;
    }
}

export const CONTROLProfileVis      = (profileVis)      => ({type: CONTROL_PROFILE_VIS, profileVis});
export const CONTROLProfileMenuVis  = (profileMenuVis)  => ({type: CONTROL_PROFILE_MENU_VIS, profileMenuVis});

export default ProfileR;