const CONTROL_SEARCH_VIS = 'catalog/CONTROL_SEARCH_VIS';

let initialState = {
    filters: {
        type: {
            serials: 'Сериал',
            films: 'Фильм',
            ova: 'OVA',
            special: 'Спешл',
            announcement: 'Анонсы',
        },
        genre: {
            madness: 'Безумие',
            martialArts: 'Боевые искусства',
            vampires: 'Вампиры',
            military: 'Военное',
            harem: 'Гарем',
            demons: 'Демоны',
            detective: 'Детектив',
            baby: 'Детское',
            josei: 'Дзёсэй',
            Drama:'Драма',
            Games:'Игры',
            Historical:'Исторический',
            Comedy:'Комедия',
            Space:'Космос',
            Magic:'Магия',
            Cars:'Машины',
            Furs:'Меха',
            Music:'Музыка',
            Parody:'Пародия',
            Everydaylife:'Повседневность',
            Police:'Полиция',
            Adventures:'Приключения',
            Psychological:'Психологическое',
            Romance:'Романтика',
            Samurai:'Самураи',
            TheSupernatural:'Сверхъестественное',
            Shojo:'Сёдзё',
            ShojoAi:'Сёдзё Ай',
            Senen:'Сёнэн',
            SenenAi:'Сёнэн-Aй',
            Sport:'Спорт',
            Superpower:'Супер сила',
            Seinen:'Сэйнэн',
            Thriller:'Триллер',
            Horrors:'Ужасы',
            Fantastic:'Фантастика',
            Fantasy:'Фэнтези',
            School:'Школа',
            Action:'Экшен',
            Etty:'Этти',
        },
        author: {
            1: 'Осаму Тэдзука',
            2: 'Румико Такахаси',
            3: 'Есихиро Тонами',
            4: 'Киехико Адзума',
            5: 'Кото Хирано',
            6: 'Кен Акамацу',
            7: 'Хаяо Миядзаки',
            8: 'Масаши Кишимото',
            9: 'Цутому Нихэй',
            10: 'Тайто Кубо',
            11: 'Хирому Аракава',
            12: 'Эйитиро Ода',
            13: 'Цугуми Оба',
        },
        studio: {
            1: 'Toei Animation',
            2: 'Sunrise',
            3: 'Madhouse',
            4: 'J.C.Staff',
            5: 'Production I.G',
            6: 'Studio Deen',
            7: 'TMS Entertainment',
            8: 'Studio Pierrot',
            9: 'OLM',
            10: 'Nippon Animation',
            11: 'AIC',
            12: 'NHK',
            13: 'Shin-Ei Animation',
        },
        AgeRating: {
            G: 'G',
            PG: 'PG',
            PG13: 'PG-13',
            R: 'R',
            NC17: 'NC-17',
        },
    },
    searchInput: {
        searchValue: '',
        type: '',
        genre: '',
        years: {
            start: '1970',
            end: new Date().getFullYear().toString(),
        },
        author: '',
        studio: '',
        AgeRating: '',
        rating: {
            start: '0',
            end: '10',
        },
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
            default:
                return state;
    }
}

export const CONTROLSearchVis = (searchVis) => ({
    type: CONTROL_SEARCH_VIS,
    searchVis
});

export default searchR;