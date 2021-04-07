import SliderImg from '../../assets/img/naruto.jpg'
import img1l from '../../assets/img/serials/1l.jpg'
import img19b from '../../assets/img/serials/19b.jpg'
import img19l from '../../assets/img/serials/19l.jpg'
import img19m from '../../assets/img/serials/19m.jpg'

let initialState = {
    sliderData: {
        slides: [
            {
                id: 19,
                title      : 'Дороро',
                imageBcg   : img19b,
                imageLarge : img19l,
                imageMin   : img19m,
                rating     : 8.4,
                years      : '2019',
                genre      : 'Демоны, Исторический, Приключения',
                director   : 'Фурухаси Кадзухиро',
                studio     : 'MAPPA, Tezuka Production',
                type       : 'сериал',
                seasons    : '',
                episodes   : '24',
                AgeRating  : 'NC-17',
                popular    : true,
                descr      : `Пройдя через страшную боль, унижение и ломку жизненных ценностей, 
                Кэн Канэки переродился. Вместо неуклюжего гибрида человека и упыря возникло что-то новое, 
                гораздо сильнее и совершеннее. Выпустив и укротив внутреннего зверя, 
                Кэн встал на дорогу могущества, но куда она приведет? 
                Пока что молодой боец уверен в одном – только абсолютная сила позволит ему жить так, 
                как хочет, и защитить тех немногих, кто остался дорог. 
                Остальные же – лишь враги, добыча, и ничего более.`,
            },
            {
                imageLarge: img1l,
                title: 'Name ainme serials test 2',
                rating: 8.1,
                year: 'none',
                genre: 'none',
                author: 'none',
                descr: `Эпоха Тайсё. Ещё с древних времён ходят слухи, 
                что в лесу обитают человекоподобные демоны, которые питаются людьми и выискивают по ночам новых жертв. 
                Однажды он уходит в соседний город, Вернувшись утром, парень обнаруживает: вся родня зверски убита, 
                а единственная выжившая - младшая сестра Нэдзуко, обращённая в демона 
                С этого момента начинается долгое и опасное путешествие Тандзиро и Нэдзуко, 
                в котором мальчик намерен разыскать убийцу и узнать способ исцеления сестры.`,
            },
            {
                imageLarge: SliderImg,
                title: 'Name ainme serials test 3',
                rating: 8.1,
                year: 'none',
                genre: 'none',
                author: 'none',
                descr: `Эпоха Тайсё. Ещё с древних времён ходят слухи, 
                что в лесу обитают человекоподобные демоны, которые питаются людьми и выискивают по ночам новых жертв. 
                Однажды он уходит в соседний город, Вернувшись утром, парень обнаруживает: вся родня зверски убита, 
                а единственная выжившая - младшая сестра Нэдзуко, обращённая в демона 
                С этого момента начинается долгое и опасное путешествие Тандзиро и Нэдзуко, 
                в котором мальчик намерен разыскать убийцу и узнать способ исцеления сестры.`,
            },
            {
                imageLarge: SliderImg,
                title: 'Name ainme serials test 3',
                rating: 8.1,
                year: 'none',
                genre: 'none',
                author: 'none',
                descr: `Эпоха Тайсё. Ещё с древних времён ходят слухи, 
                что в лесу обитают человекоподобные демоны, которые питаются людьми и выискивают по ночам новых жертв. 
                Однажды он уходит в соседний город, Вернувшись утром, парень обнаруживает: вся родня зверски убита, 
                а единственная выжившая - младшая сестра Нэдзуко, обращённая в демона 
                С этого момента начинается долгое и опасное путешествие Тандзиро и Нэдзуко, 
                в котором мальчик намерен разыскать убийцу и узнать способ исцеления сестры.`,
            },
            {
                imageLarge: SliderImg,
                title: 'Name ainme serials test 3',
                rating: 8.1,
                year: 'none',
                genre: 'none',
                author: 'none',
                descr: `Эпоха Тайсё. Ещё с древних времён ходят слухи, 
                что в лесу обитают человекоподобные демоны, которые питаются людьми и выискивают по ночам новых жертв. 
                Однажды он уходит в соседний город, Вернувшись утром, парень обнаруживает: вся родня зверски убита, 
                а единственная выжившая - младшая сестра Нэдзуко, обращённая в демона 
                С этого момента начинается долгое и опасное путешествие Тандзиро и Нэдзуко, 
                в котором мальчик намерен разыскать убийцу и узнать способ исцеления сестры.`,
            },
            {
                imageLarge: SliderImg,
                title: 'Name ainme serials test 3',
                rating: 8.1,
                year: 'none',
                genre: 'none',
                author: 'none',
                descr: `Эпоха Тайсё. Ещё с древних времён ходят слухи, 
                что в лесу обитают человекоподобные демоны, которые питаются людьми и выискивают по ночам новых жертв. 
                Однажды он уходит в соседний город, Вернувшись утром, парень обнаруживает: вся родня зверски убита, 
                а единственная выжившая - младшая сестра Нэдзуко, обращённая в демона 
                С этого момента начинается долгое и опасное путешествие Тандзиро и Нэдзуко, 
                в котором мальчик намерен разыскать убийцу и узнать способ исцеления сестры.`,
            },
        ],
    },
    sliderVis: true,
};

const sliderR = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default sliderR;