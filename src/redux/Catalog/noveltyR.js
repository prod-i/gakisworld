import Img from '../../assets/img/naruto.jpg'
import Img2 from '../../assets/img/titans.jpg'
import Img3 from '../../assets/img/gul.jpg'
import Img4 from '../../assets/img/preview.png'

let initialState = {
    noveltyList: {
        list: [
            {
                id:1,
                image: Img,
                title: 'Naruto',
                rating: 5,
                seasons: 2,
                LastSeries: 21,
                descr: 'Эпоха Тайсё. Ещё с древних времён ходят слухи',
            },
            {
                id:2,
                image: Img2,
                title: 'Атака титанов',
                rating: 5,
                seasons: 2,
                LastSeries: 21,
                descr: 'Эпоха Тайсё. Ещё с древних времён ходят слухи',
            },
            {
                id:3,
                image: Img3,
                title: 'Токийский гуль',
                rating: 5,
                seasons: 2,
                LastSeries: 21,
                descr: 'Эпоха Тайсё. Ещё с древних времён ходят слухи',
            },
            {
                id:4,
                image: Img4,
                title: 'Клинок рассекающий демонов',
                rating: 5,
                seasons: 2,
                LastSeries: 21,
                descr: 'Эпоха Тайсё. Ещё с древних времён ходят слухи',
            },
        ],
    },
    noveltyVis: true,
};

const noveltyR = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default noveltyR;