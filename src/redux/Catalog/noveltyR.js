import Img from '../../assets/img/naruto.jpg'
import Img2 from '../../assets/img/titans.jpg'
import Img3 from '../../assets/img/gul.jpg'
import Img4 from '../../assets/img/preview.png'

let initialState = {
    noveltyList: {
        list: [
            {
                image: Img,
                title: 'Name anime',
                rating: 5,
                seasons: 2,
                LastSeries: 21,
                descr: 'Эпоха Тайсё. Ещё с древних времён ходят слухи',
            },
            {
                image: Img2,
                title: 'Name anime',
                rating: 5,
                seasons: 2,
                LastSeries: 21,
                descr: 'Эпоха Тайсё. Ещё с древних времён ходят слухи',
            },
            {
                image: Img3,
                title: 'Name anime',
                rating: 5,
                seasons: 2,
                LastSeries: 21,
                descr: 'Эпоха Тайсё. Ещё с древних времён ходят слухи',
            },
            {
                image: Img4,
                title: 'Name anime',
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