// import { API } from '../../API/api'
import img from '../../assets/img/serials/3m.jpg'
import img1b from '../../assets/img/serials/1b.jpg'
import img1l from '../../assets/img/serials/1l.jpg'
import img1m from '../../assets/img/serials/1m.jpg'
import img2b from '../../assets/img/serials/2b.jpg'
import img2l from '../../assets/img/serials/2l.jpg'
import img2m from '../../assets/img/serials/2m.jpg'
import img3b from '../../assets/img/serials/3b.jpg'
import img3l from '../../assets/img/serials/3l.jpg'
import img3m from '../../assets/img/serials/3m.jpg'
import img4b from '../../assets/img/serials/4b.jpg'
import img4l from '../../assets/img/serials/4l.jpg'
import img4m from '../../assets/img/serials/4m.jpg'
import img5b from '../../assets/img/serials/5b.jpg'
import img5l from '../../assets/img/serials/5l.jpg'
import img5m from '../../assets/img/serials/5m.jpg'
import img6b from '../../assets/img/serials/6b.jpg'
import img6l from '../../assets/img/serials/6l.jpg'
import img6m from '../../assets/img/serials/6m.jpg'
import img7b from '../../assets/img/serials/7b.jpg'
import img7l from '../../assets/img/serials/7l.jpg'
import img7m from '../../assets/img/serials/7m.jpg'
import img8b from '../../assets/img/serials/8b.jpg'
import img8l from '../../assets/img/serials/8l.jpg'
import img8m from '../../assets/img/serials/8m.jpg'
import img9b from '../../assets/img/serials/9b.jpg'
import img9l from '../../assets/img/serials/9l.jpg'
import img9m from '../../assets/img/serials/9m.jpg'
import img10b from '../../assets/img/serials/10b.jpg'
import img10l from '../../assets/img/serials/10l.jpg'
import img10m from '../../assets/img/serials/10m.jpg'
import img11b from '../../assets/img/serials/11b.jpg'
import img11l from '../../assets/img/serials/11l.jpg'
import img11m from '../../assets/img/serials/11m.jpg'
import img12b from '../../assets/img/serials/12b.jpg'
import img12l from '../../assets/img/serials/12l.jpg'
import img12m from '../../assets/img/serials/12m.jpg'
import img13b from '../../assets/img/serials/13b.jpg'
import img13l from '../../assets/img/serials/13l.jpg'
import img13m from '../../assets/img/serials/13m.jpg'
import img14b from '../../assets/img/serials/14b.jpg'
import img14l from '../../assets/img/serials/14l.jpg'
import img14m from '../../assets/img/serials/14m.jpg'
import img15b from '../../assets/img/serials/15b.jpg'
import img15l from '../../assets/img/serials/15l.jpg'
import img15m from '../../assets/img/serials/15m.jpg'
import img16b from '../../assets/img/serials/16b.jpg'
import img16l from '../../assets/img/serials/16l.jpg'
import img16m from '../../assets/img/serials/16m.jpg'
import img17b from '../../assets/img/serials/17b.jpg'
import img17l from '../../assets/img/serials/17l.jpg'
import img17m from '../../assets/img/serials/17m.jpg'
import img18b from '../../assets/img/serials/18b.jpg'
import img18l from '../../assets/img/serials/18l.jpg'
import img18m from '../../assets/img/serials/18m.jpg'
import img19b from '../../assets/img/serials/19b.jpg'
import img19l from '../../assets/img/serials/19l.jpg'
import img19m from '../../assets/img/serials/19m.jpg'
import img20b from '../../assets/img/serials/20b.jpg'
import img20l from '../../assets/img/serials/20l.jpg'
import img20m from '../../assets/img/serials/20m.jpg'

import img1p from '../../assets/img/serials/1p.jpg'
import vi1v from '../../assets/img/serials/1v.mp4'

const CONTROL_PROFILE_VIS      = 'profile/CONTROL_PROFILE_VIS';
const CONTROL_PROFILE_MENU_VIS = 'profile/CONTROL_PROFILE_MENU_VIS';
const SET_PROFILE_FAVORITES    = 'profile/SET_PROFILE_FAVORITES';
const REMOVE_PROFILE_FAVORITES = 'profile/REMOVE_PROFILE_FAVORITES';

let initialState = {
    profile: {
        profileId: 1,
        fullName: "Анна Когай",
        nickName: 'Kaneki Ken',
        type: 'standart',
        photos: {
            "avatar": null,
            "bacg": null,
        },
        continueView: [
            { serialsId: 1, seriesId: 1, nameSerials: "Клинок рассекающий демонов", imgM: img, progress: '50%', },
            { serialsId: 2, seriesId: 1, nameSerials: "Атака титанов", imgM: img, progress: '50%' },
        ],
        favorites: [
            {
                id: 1,
                title: 'Клинок рассекающий демонов',
                imageBcg: img1b,
                imageLarge: img1l,
                imageMin: img1m,
                videoBcg: vi1v,
                rating: 8.1,
                years: '2019',
                genre: 'Демоны, Сверхъестественное',
                director: 'Сотодзаки Харуо',
                studio: 'ufotable',
                type: 'сериал',
                seasons: '2',
                episodes: '',
                AgeRating: 'PG-16',
                hover: true,
                popular: true,
                descr: `Эпоха Тайсё. Ещё с древних времён ходят слухи, что в лесу обитают человекоподобные демоны, 
                              которые питаются людьми и выискивают по ночам новых жертв. 
                              Тандзиро Камадо — старший сын в семье, потерявший отца и взявший на себя заботу о родных. 
                              Однажды он уходит в соседний город, чтобы продать древесный уголь. 
                              Вернувшись утром, парень обнаруживает перед собой страшную картину: 
                              вся родня зверски убита`,
                series: [{
                    id: 1,
                    title: 'cерия 1',
                    imgPrev: img1p,
                    video: '',
                },
                {
                    id: 2,
                    title: 'cерия 2',
                    imgPrev: img1p,
                },
                {
                    id: 3,
                    title: 'cерия 3',
                    imgPrev: img1p,
                },
                {
                    id: 4,
                    title: 'cерия 4',
                    imgPrev: img1p,
                },
                {
                    id: 5,
                    title: 'cерия 5',
                    imgPrev: img1p,
                },
                {
                    id: 6,
                    title: 'cерия 6',
                    imgPrev: img1p,
                },
                ],
            },
            {
            id: 2,
            title: 'Атака титанов',
            imageBcg: img4b,
            imageLarge: img4l,
            imageMin: img4m,
            videoBcg: '',
            rating: 9.6,
            years: '2013',
            genre: 'Военное, Драма',
            director: 'Араки Тэцуро, Ябута Сюхэй',
            studio: 'Wit Studio',
            type: 'сериал',
            seasons: '4',
            episodes: '',
            AgeRating: 'NC-17',
            popular: true,
            descr: `В прошлом столетии человечество страдало из-за нашествия гигантов. 
                              Они были очень похожи внешностью на простых людей, 
                              но также имели несколько отличий. Разница состояла в слишком больших размерах 
                              созданий и в их абсолютной глупости. Действовали великаны, как зомби из фильмов ужасов. 
                              Они не могли похвастаться разумом и полностью соответствовали своему первобытному инстинкту, 
                              связанному с выживанием. Поэтому эти существа неустанно пожирали беззащитное население.`,
            series: [{
                id: 1,
                title: 'Серия 1',
                imgPrev: img4m,
            },
            {
                id: 2,
                title: 'Серия 2',
                imgPrev: img4m,
            },
            {
                id: 3,
                title: 'Серия 3',
                imgPrev: img4m,
            },
            {
                id: 4,
                title: 'Серия 4',
                imgPrev: img4m,
            },
            {
                id: 5,
                title: 'Серия 5',
                imgPrev: img4m,
            },
            {
                id: 6,
                title: 'Серия 6',
                imgPrev: img4m,
            },
            ],
            },
        ],
        tracked: [
            { serialsId: 1, nameSerials: "Клинок рассекающий демонов", imgM: img },
            { serialsId: 2, nameSerials: "Атака титанов", imgM: img },
        ],
        archive: [
            { serialsId: 1, nameSerials: "Клинок рассекающий демонов", imgM: img },
            { serialsId: 2, nameSerials: "Атака титанов", imgM: img },
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
                profileMenu: { ...state.profileMenu, profileMenuVis: action.profileMenuVis },
            }
        case SET_PROFILE_FAVORITES:
            console.log(state.profile.favorites);
            return {
                ...state,
                profile: { ...state.profile, favorites: [...state.profile.favorites, action.favoritesSerials]},
            }
        case REMOVE_PROFILE_FAVORITES:
            console.log(state.profile.favorites);
            return {
                ...state,
                profile: { ...state.profile, favorites: state.profile.favorites.filter(item => item.id !== action.favoriteId)},
            }
        default:
            return state;
    }
}


export const CONTROLProfileVis      = (profileVis)       => ({ type: CONTROL_PROFILE_VIS, profileVis });
export const CONTROLProfileMenuVis  = (profileMenuVis)   => ({ type: CONTROL_PROFILE_MENU_VIS, profileMenuVis });
export const SetProfileFavorites    = (favoritesSerials) => ({ type: SET_PROFILE_FAVORITES, favoritesSerials });
export const RemoveProfileFavorites = (favoriteId)       => ({ type: REMOVE_PROFILE_FAVORITES, favoriteId });


// console.log(profileAPI.getFilms('starwars', '187e3a62'));








export default ProfileR;