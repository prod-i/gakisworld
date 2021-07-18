const CONTROL_SEARCH_VIS = 'search/CONTROL_SEARCH_VIS';
const CHANGE_SEARCH_VALUE = 'search/CHANGE_SEARCH_VALUE';
const CHANGE_FILTRES = 'search/CHANGE_FILTRES';
const ADD_FILTRES = 'search/ADD_FILTRES';
const DELETE_FILTRES = 'search/DELETE_FILTRES';

let initialState = {
    filters: {
        type: [
            'Сериал',
            'Фильм',
            'OVA',
            'Спешл',
            'Анонсы',
        ],
        genre: [
            'Безумие',
            'Боевые искусства',
            'Вампиры',
            'Военное',
            'Гарем',
            'Демоны',
            'Детектив',
            'Детское',
            'Дзёсэй',
            'Драма',
            'Игры',
            'Исторический',
            'Комедия',
            'Космос',
            'Магия',
            'Машины',
            'Меха',
            'Музыка',
            'Пародия',
            'Повседневность',
            'Полиция',
            'Приключения',
            'Психологическое',
            'Романтика',
            'Самураи',
            'Сверхъестественное',
            'Сёдзё',
            'Сёдзё Ай',
            'Сёнэн',
            'Сёнэн-Aй',
            'Спорт',
            'Супер сила',
            'Сэйнэн',
            'Триллер',
            'Ужасы',
            'Фантастика',
            'Фэнтези',
            'Школа',
            'Экшен',
            'Этти',
        ],
        author: [
            'Осаму Тэдзука',
            'Румико Такахаси',
            'Есихиро Тонами',
            'Киехико Адзума',
            'Кото Хирано',
            'Кен Акамацу',
            'Хаяо Миядзаки',
            'Масаши Кишимото',
            'Цутому Нихэй',
            'Тайто Кубо',
            'Хирому Аракава',
            'Эйитиро Ода',
            'Цугуми Оба',
        ],
        studio: [
            'Toei Animation',
            'Sunrise',
            'Madhouse',
            'J.C.Staff',
            'Production I.G',
            'Studio Deen',
            'TMS Entertainment',
            'Studio Pierrot',
            'OLM',
            'Nippon Animation',
            'AIC',
            'NHK',
            'Shin-Ei Animation',
        ],
        AgeRating: [
            'G',
            'PG',
            'PG-13',
            'PG-16',
            'R',
            'NC-17',
        ],
    },
    searchInput: {
        searchValue: '',
        searchType: '',
        genre: '',
        years: [1970, 2021],
        author: '',
        studio: '',
        AgeRating: '',
        rating: [0, 10],
    },
    noRequiredSubscribe: false,
    searchVis: true,
};


const searchR = (state = initialState, action) => {
    switch (action.type) {
        case CONTROL_SEARCH_VIS:
            return {
                ...state,
                searchVis: action.searchVis,
            }
        case ADD_FILTRES:
            const Addtype = action.filtreType;
            return {
                ...state,
                filters: {...state.filters, [Addtype]: [...state.filters[Addtype], action.filtreValue]}
            }
        case DELETE_FILTRES:
            const Deltype = action.filtreType;
            return {
                ...state,
                // { ...state.profile, favorites: state.profile.favorites.filter(item => item.id !== action.favoriteId)}
                filters: {...state.filters, [Deltype]: [...state.filters[Deltype].filter(item => item !== action.filtreValue)]}
            }
            case CHANGE_SEARCH_VALUE:
                return {
                    ...state,
                    searchInput: {...state.searchInput, searchValue: action.searchValue},
                }
            case CHANGE_FILTRES:
                const filtreName = action.filtreName
                return {
                    ...state,
                    name: action.filtreName,
                    searchInput: {...state.searchInput, [filtreName]: action.searchType},
                }
            default:
                return state;
    }
}

export const CONTROLSearchVis = (searchVis) => ({ type: CONTROL_SEARCH_VIS, searchVis });
export const AddFiltres = (filtreType, filtreValue) => ({ type: ADD_FILTRES, filtreType, filtreValue});
export const DeleteFiltres = (filtreType, filtreValue) => ({ type: DELETE_FILTRES, filtreType, filtreValue});
export const ChangeSearchValue = (searchValue) => ({ type: CHANGE_SEARCH_VALUE, searchValue });
export const Changefiltre = (filtreName, searchType) => ({ type: CHANGE_FILTRES, filtreName, searchType});

export default searchR;