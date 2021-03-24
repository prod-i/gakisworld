import Img from '../../assets/img/gulNews.jpg'

let initialState = {
    postsList: {
        posts: [
            {
                image: Img,
                title: 'Name ainme serials test 1',
                date: '01.01.2021',
                author: 'prodi',
            },
            {
                image: Img,
                title: 'Name ainme serials test 1',
                date: '01.01.2021',
                author: 'prodi',
            },
            {
                image: Img,
                title: 'Name ainme serials test 1',
                date: '01.01.2021',
                author: 'prodi',
            },
            {
                image: Img,
                title: 'Name ainme serials test 1',
                date: '01.01.2021',
                author: 'prodi',
            },
            {
                image: Img,
                title: 'Name ainme serials test 1',
                date: '01.01.2021',
                author: 'prodi',
            },
        ],
    },
    prevNewsVis: true,
};

const prevNewsR = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default prevNewsR;