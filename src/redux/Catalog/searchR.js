
let initialState = {
    noRequiredSubscribe: false,
    filters: {
        type:{
            all: 'Все', 
            films: 'Фильм', 
            serials: 'Сериал', 
            announcement: 'Анонсы',
        },
        genre: {
            drama: 'Драма', 
            detectiv: 'Детектив', 
            test: 'Военное', 
            test1: 'Безумие',
            test2: 'Фантастика',
            test3: 'Фентези',
        },
        author: {
            test: 'test',
            test1: 'test',
            test2: 'test',
        },
        studio: {
            test: 'test',
            test1: 'test',
            test2: 'test',
        },
        AgeRating: {
            test: 'test',
            test1: 'test',
            test2: 'test',
        },
    },
    searchVis: true,
};

const searchR = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default searchR;