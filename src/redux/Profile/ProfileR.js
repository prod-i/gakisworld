import { profileAPI } from '../../API/api'


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
        tracked:[
            {serialsId:1, nameSerials:"Клинок рассекающий демонов", imgM:null},
            {serialsId:2, nameSerials:"Атака титанов", imgM:null},
        ], 
        favorites:[
            {serialsId:1, nameSerials:"Клинок рассекающий демонов", imgM:null},
            {serialsId:2, nameSerials:"Атака титанов", imgM:null},
        ], 
        inPlans:[
            {serialsId:1, nameSerials:"Клинок рассекающий демонов", imgM:null},
            {serialsId:2, nameSerials:"Атака титанов", imgM:null},
        ], 
        viewed:[
            {serialsId:1, seriesId:1, nameSerials:"Клинок рассекающий демонов", imgM:null, progress:'50%',},
            {serialsId:2, seriesId:1, nameSerials:"Атака титанов", imgM:null, progress:'50%'},
        ], 
    },
    ProfileVis: true,
};

const ProfileR = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default ProfileR;