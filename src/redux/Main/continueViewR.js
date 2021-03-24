import Img from '../../assets/img/gul.jpg'

let initialState = {
    viewList: {
        list: [
            {
                image: Img,
                title: 'Name ainme serials test 1',
                numberSeries: 1,
                rogress: 5,
            },
            {
                image: Img,
                title: 'Name ainme serials test 1',
                numberSeries: 1,
                rogress: 5,
            },
            {
                image: Img,
                title: 'Name ainme serials test 1',
                numberSeries: 1,
                rogress: 5,
            },
            {
                image: Img,
                title: 'Name ainme serials test 1',
                numberSeries: 1,
                rogress: 5,
            },
        ],
    },
    continueViewVis: true,
};

const continueViewR = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default continueViewR;