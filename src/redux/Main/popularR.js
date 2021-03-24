import Img from '../../assets/img/titans.jpg'

let initialState = {
    popularList: {
        list: [
            {
                image: Img,
                title: 'Name anime',
                rating: 5,
                seasons: 2,
                descr: 'Эпоха Тайсё. Ещё с древних времён ходят слухи',
            },
            {
                image: Img,
                title: 'Name anime',
                rating: 5,
                seasons: 2,
                descr: 'Эпоха Тайсё. Ещё с древних времён ходят слухи',
            },
            {
                image: Img,
                title: 'Name anime',
                rating: 5,
                seasons: 2,
                descr: 'Эпоха Тайсё. Ещё с древних времён ходят слухи',
            },
            {
                image: Img,
                title: 'Name anime',
                rating: 5,
                seasons: 2,
                descr: 'Эпоха Тайсё. Ещё с древних времён ходят слухи',
            },
            {
                image: Img,
                title: 'Name anime',
                rating: 5,
                seasons: 2,
                descr: 'Эпоха Тайсё. Ещё с древних времён ходят слухи',
            },
        ],
    },
    popularVis: true,
};

const popularR = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default popularR;