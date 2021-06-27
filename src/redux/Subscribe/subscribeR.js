import img1 from '../../assets/s1.jpg'


let initialState = {
    SubscribeList: {
        list: [
            {
                id:1,
                price: 1200,
                previevImg:img1,
                bonuses:[
                    'Никакой рекламы',
                    'Новые серии через час после Японпии',
                    'Доступ к цифровой манге',
                ]
            },
            {
                id:2,
                price: 700,
                previevImg:img1,
                bonuses:[
                    'Никакой рекламы',
                    'Новые серии через час после Японпии',
                    'Доступ к цифровой манге',
                    'Стрим на 4 устройства одновременно',
                    'Неограниченный доступ к библиотеке Gaki`s World',
                ]
            },
            {
                id:3,
                price: 1000,
                previevImg:img1,
                bonuses:[
                    'Никакой рекламы',
                    'Новые серии через час после Японпии',
                    'Доступ к цифровой манге',
                    'Стрим на 4 устройства одновременно',
                    'Неограниченный доступ к библиотеке Gaki`s World',
                    'Офлайн просмотр',
                ]
            },
            {
                id:4,
                price: 1500,
                previevImg:img1,
                bonuses:[
                    'Никакой рекламы',
                    'Новые серии через час после Японпии',
                    'Доступ к цифровой манге',
                    'Стрим на 4 устройства одновременно',
                    'Неограниченный доступ к библиотеке Gaki`s World',
                    'Офлайн просмотр',
                    'Доступ в приватный канал дискорд',
                    'Скидка 20% на ежемесячный план',
                ]
            },
        ],
    },
    SubscribeVis: true,
};

const SubscribeR = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default SubscribeR;