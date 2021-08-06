import img1m from '../../assets/img/serials/1m.jpg'
import img2m from '../../assets/img/serials/2m.jpg'
import img3m from '../../assets/img/serials/3m.jpg'
import img4m from '../../assets/img/serials/4m.jpg'
import img5m from '../../assets/img/serials/5m.jpg'
import img6m from '../../assets/img/serials/6m.jpg'
import img7m from '../../assets/img/serials/7m.jpg'
import img8m from '../../assets/img/serials/8m.jpg'
import img9m from '../../assets/img/serials/9m.jpg'
import img10m from '../../assets/img/serials/10m.jpg'
import img11m from '../../assets/img/serials/11m.jpg'
import img12m from '../../assets/img/serials/12m.jpg'
import img13m from '../../assets/img/serials/13m.jpg'
import img14m from '../../assets/img/serials/14m.jpg'
import img15m from '../../assets/img/serials/15m.jpg'
import img16m from '../../assets/img/serials/16m.jpg'
import img17m from '../../assets/img/serials/17m.jpg'
import img18m from '../../assets/img/serials/18m.jpg'
import img19m from '../../assets/img/serials/19m.jpg'
import img20m from '../../assets/img/serials/20m.jpg'
import { updateObjectInArray } from '../../common/utils/object-helpers'

const SET_POST                 = 'news/SET_POST';
const CHANGE_POST              = 'news/CHANGE_POST';
const CONTROL_NEWS_VIS         = 'news/CONTROL_NEWS_VIS';
const CONTROL_NEWS_LIST_VIS    = 'news/CONTROL_NEWS_LIST_VIS';
const CONTROL_NEWS_SLIDER_VIS  = 'news/CONTROL_NEWS_SLIDER_VIS';
const CONTROL_NEWS_SIDEBAR_VIS = 'news/CONTROL_NEWS_SIDEBAR_VIS';
const CHANGE_SEARCH_VALUE      = 'news/CHANGE_SEARCH_VALUE';

let initialState = {
    newsList: {
        list: [
            {
                id: 1,
                imgM: img1m,
                title: '«Цестус: Римский боец» — второй трейлер CG-аниме про гладиатора-боксёра ',
                author: 'prodi',
                pictures: {},
                date: '01.01.2020',
                important: false,
                popular: false,
                about: false,
                descr:`На YouTube-канале +Ultra вышел второй трейлер аниме-сериала «Цестус: 
                Римский боец» (Cestvs: The Roman Fighter). Ролик представляет закрывающую тему CG-аниме, 
                которую исполняет певица Сараса Кадоваки.На YouTube-канале +Ultra вышел второй трейлер аниме-сериала «Цестус: 
                Римский боец» (Cestvs: The Roman Fighter). Ролик представляет закрывающую тему CG-аниме, 
                которую исполняет певица Сараса Кадоваки.На YouTube-канале +Ultra вышел второй трейлер аниме-сериала «Цестус: 
                Римский боец» (Cestvs: The Roman Fighter). Ролик представляет закрывающую тему CG-аниме, 
                которую исполняет певица Сараса Кадоваки.На YouTube-канале +Ultra вышел второй трейлер аниме-сериала «Цестус: 
                Римский боец» (Cestvs: The Roman Fighter). Ролик представляет закрывающую тему CG-аниме, 
                которую исполняет певица Сараса Кадоваки.`,
                text: `На YouTube-канале +Ultra вышел второй трейлер аниме-сериала «Цестус: 
                Римский боец» (Cestvs: The Roman Fighter). Ролик представляет закрывающую тему CG-аниме, 
                которую исполняет певица Сараса Кадоваки. Показ аниме начнётся 14 апреля. 
                В Японии сериал будет выходить в программном блоке +Ultra на Fuji TV. 
                В России его выпустит онлайн-сервис Crunchyroll. `,
            },
            {
                id: 2,
                imgM: img2m,
                title: '«Робот Геттер арк» — новый тизер, сэйю и дата выхода нового аниме культового франчайза',
                author: 'prodi',
                pictures: {},
                date: '01.01.2020',
                important: false,
                popular: false,
                about: false,
                descr:`Официальный сайт аниме «Робот Геттер арк» (Getter Robo Arc) разместил новый тизер аниме, 
                представил сэйю главных персонажей и значительно расширил авторский состав. 
                Сериал выйдет в летнем сезоне 2021 года. Также был подтверждён телевизионный формат предстоящего аниме.`,
                text: `На YouTube-канале +Ultra вышел второй трейлер аниме-сериала «Цестус: 
                Римский боец» (Cestvs: The Roman Fighter). Ролик представляет закрывающую тему CG-аниме, 
                которую исполняет певица Сараса Кадоваки. Показ аниме начнётся 14 апреля. 
                В Японии сериал будет выходить в программном блоке +Ultra на Fuji TV. 
                В России его выпустит онлайн-сервис Crunchyroll. `,
            },
            {
                id: 3,
                imgM: img3m,
                title: '«Этот вампир постоянно умирает» — трейлер и другие подробности комедийного аниме о слабом вампире',
                author: 'prodi',
                pictures: {},
                date: '01.01.2020',
                important: false,
                popular: false,
                about: false,
                descr:`На ивенте AnimeJapan 2021 был показан трейлер аниме 
                «Этот вампир постоянно умирает» (Kyuuketsuki Sugu Shinu). 
                Трейлер озвучивает Норио Вакамото (рассказчик в сериале «Боевой дворецкий Хаяте»). 
                Сериал выйдет в октябре.`,
                text: `На YouTube-канале +Ultra вышел второй трейлер аниме-сериала «Цестус: 
                Римский боец» (Cestvs: The Roman Fighter). Ролик представляет закрывающую тему CG-аниме, 
                которую исполняет певица Сараса Кадоваки. Показ аниме начнётся 14 апреля. 
                В Японии сериал будет выходить в программном блоке +Ultra на Fuji TV. 
                В России его выпустит онлайн-сервис Crunchyroll. `,
            },
            {
                id: 4,
                imgM: img4m,
                title: '«Позволь мне услышать твою песню о любви» — второй тизер и сэйю музыкального фильма от режиссёра «Патэмы наоборот»',
                author: 'prodi',
                pictures: {},
                date: '01.01.2020',
                important: false,
                popular: true,
                about: false,
                descr:`Официальный сайт аниме-фильма «Позволь мне услышать твою песню о любви» 
                (Ai no Utagoe o Kikasete) представил второй тизер, 
                а также раскрыл новые подробности проекта. 
                Фильм выйдет в японский прокат этой осенью.`,
                text: `На YouTube-канале +Ultra вышел второй трейлер аниме-сериала «Цестус: 
                Римский боец» (Cestvs: The Roman Fighter). Ролик представляет закрывающую тему CG-аниме, 
                которую исполняет певица Сараса Кадоваки. Показ аниме начнётся 14 апреля. 
                В Японии сериал будет выходить в программном блоке +Ultra на Fuji TV. 
                В России его выпустит онлайн-сервис Crunchyroll.На YouTube-канале +Ultra вышел второй трейлер аниме-сериала «Цестус: 
                Римский боец» (Cestvs: The Roman Fighter). Ролик представляет закрывающую тему CG-аниме, 
                которую исполняет певица Сараса Кадоваки. Показ аниме начнётся 14 апреля. 
                В Японии сериал будет выходить в программном блоке +Ultra на Fuji TV. 
                В России его выпустит онлайн-сервис Crunchyroll. `,
            },
            {
                id: 5,
                imgM: img5m,
                title: '«Девушки и танки» — первые сборы третьего фильма и реклама четвёртого',
                author: 'prodi',
                pictures: {},
                date: '01.01.2020',
                important: false,
                popular: false,
                about: false,
                descr:`В марте в японский прокат в 64 кинотеатрах вышел третий аниме-фильм серии 
                «Девушки и танки» (Girls und Panzer das Finale). За первые 10 дней (с 26 марта по 4 апреля) 
                он собрал более 285,9 млн иен (около $ 2,6 млн). А вчера YouTube-канал`,
                text: `На YouTube-канале +Ultra вышел второй трейлер аниме-сериала «Цестус: 
                Римский боец» (Cestvs: The Roman Fighter). Ролик представляет закрывающую тему CG-аниме, 
                которую исполняет певица Сараса Кадоваки. Показ аниме начнётся 14 апреля. 
                В Японии сериал будет выходить в программном блоке +Ultra на Fuji TV. 
                В России его выпустит онлайн-сервис Crunchyroll. `,
            },
            {
                id: 6,
                imgM: img6m,
                title: '«Девушки и танки» — первые сборы третьего фильма и реклама четвёртого',
                author: 'prodi',
                pictures: {},
                date: '01.01.2020',
                important: false,
                popular: false,
                about: false,
                descr:`В марте в японский прокат в 64 кинотеатрах вышел третий аниме-фильм серии 
                «Девушки и танки» (Girls und Panzer das Finale). За первые 10 дней (с 26 марта по 4 апреля) 
                он собрал более 285,9 млн иен (около $ 2,6 млн). А вчера YouTube-канал`,
                text: `На YouTube-канале +Ultra вышел второй трейлер аниме-сериала «Цестус: 
                Римский боец» (Cestvs: The Roman Fighter). Ролик представляет закрывающую тему CG-аниме, 
                которую исполняет певица Сараса Кадоваки. Показ аниме начнётся 14 апреля. 
                В Японии сериал будет выходить в программном блоке +Ultra на Fuji TV. 
                В России его выпустит онлайн-сервис Crunchyroll. `,
            },
            {
                id: 7,
                imgM: img7m,
                title: '«Девушки и танки» — первые сборы третьего фильма и реклама четвёртого',
                author: 'prodi',
                pictures: {},
                date: '01.01.2020',
                important: false,
                popular: false,
                about: false,
                descr:`В марте в японский прокат в 64 кинотеатрах вышел третий аниме-фильм серии 
                «Девушки и танки» (Girls und Panzer das Finale). За первые 10 дней (с 26 марта по 4 апреля) 
                он собрал более 285,9 млн иен (около $ 2,6 млн). А вчера YouTube-канал`,
                text: `На YouTube-канале +Ultra вышел второй трейлер аниме-сериала «Цестус: 
                Римский боец» (Cestvs: The Roman Fighter). Ролик представляет закрывающую тему CG-аниме, 
                которую исполняет певица Сараса Кадоваки. Показ аниме начнётся 14 апреля. 
                В Японии сериал будет выходить в программном блоке +Ultra на Fuji TV. 
                В России его выпустит онлайн-сервис Crunchyroll. `,
            },
            {
                id: 8,
                imgM: img8m,
                title: '«Девушки и танки» — первые сборы третьего фильма и реклама четвёртого',
                author: 'prodi',
                pictures: {},
                date: '01.01.2020',
                important: false,
                popular: false,
                about: true,
                descr:`В марте в японский прокат в 64 кинотеатрах вышел третий аниме-фильм серии 
                «Девушки и танки» (Girls und Panzer das Finale). За первые 10 дней (с 26 марта по 4 апреля) 
                он собрал более 285,9 млн иен (около $ 2,6 млн). А вчера YouTube-канал`,
                text: `На YouTube-канале +Ultra вышел второй трейлер аниме-сериала «Цестус: 
                Римский боец» (Cestvs: The Roman Fighter). Ролик представляет закрывающую тему CG-аниме, 
                которую исполняет певица Сараса Кадоваки. Показ аниме начнётся 14 апреля. 
                В Японии сериал будет выходить в программном блоке +Ultra на Fuji TV. 
                В России его выпустит онлайн-сервис Crunchyroll. `,
            },
            {
                id: 9,
                imgM: img9m,
                title: '«Девушки и танки» — первые сборы третьего фильма и реклама четвёртого',
                author: 'prodi',
                pictures: {},
                date: '01.01.2020',
                important: false,
                popular: false,
                about: true,
                descr:`В марте в японский прокат в 64 кинотеатрах вышел третий аниме-фильм серии 
                «Девушки и танки» (Girls und Panzer das Finale). За первые 10 дней (с 26 марта по 4 апреля) 
                он собрал более 285,9 млн иен (около $ 2,6 млн). А вчера YouTube-канал`,
                text: `На YouTube-канале +Ultra вышел второй трейлер аниме-сериала «Цестус: 
                Римский боец» (Cestvs: The Roman Fighter). Ролик представляет закрывающую тему CG-аниме, 
                которую исполняет певица Сараса Кадоваки. Показ аниме начнётся 14 апреля. 
                В Японии сериал будет выходить в программном блоке +Ultra на Fuji TV. 
                В России его выпустит онлайн-сервис Crunchyroll. `,
            },
            {
                id: 10,
                imgM: img10m,
                title: '«Девушки и танки» — первые сборы третьего фильма и реклама четвёртого',
                author: 'prodi',
                pictures: {},
                date: '01.01.2020',
                important: false,
                popular: true,
                about: false,
                descr:`В марте в японский прокат в 64 кинотеатрах вышел третий аниме-фильм серии 
                «Девушки и танки» (Girls und Panzer das Finale). За первые 10 дней (с 26 марта по 4 апреля) 
                он собрал более 285,9 млн иен (около $ 2,6 млн). А вчера YouTube-канал`,
                text: `На YouTube-канале +Ultra вышел второй трейлер аниме-сериала «Цестус: 
                Римский боец» (Cestvs: The Roman Fighter). Ролик представляет закрывающую тему CG-аниме, 
                которую исполняет певица Сараса Кадоваки. Показ аниме начнётся 14 апреля. 
                В Японии сериал будет выходить в программном блоке +Ultra на Fuji TV. 
                В России его выпустит онлайн-сервис Crunchyroll. `,
            },
            {
                id: 11,
                imgM: img11m,
                title: '«Девушки и танки» — первые сборы третьего фильма и реклама четвёртого',
                author: 'prodi',
                pictures: {},
                date: '01.01.2020',
                important: false,
                popular: false,
                about: false,
                descr:`В марте в японский прокат в 64 кинотеатрах вышел третий аниме-фильм серии 
                «Девушки и танки» (Girls und Panzer das Finale). За первые 10 дней (с 26 марта по 4 апреля) 
                он собрал более 285,9 млн иен (около $ 2,6 млн). А вчера YouTube-канал`,
                text: `На YouTube-канале +Ultra вышел второй трейлер аниме-сериала «Цестус: 
                Римский боец» (Cestvs: The Roman Fighter). Ролик представляет закрывающую тему CG-аниме, 
                которую исполняет певица Сараса Кадоваки. Показ аниме начнётся 14 апреля. 
                В Японии сериал будет выходить в программном блоке +Ultra на Fuji TV. 
                В России его выпустит онлайн-сервис Crunchyroll. `,
            },
            {
                id: 12,
                imgM: img12m,
                title: '«Девушки и танки» — первые сборы третьего фильма и реклама четвёртого',
                author: 'prodi',
                pictures: {},
                date: '01.01.2020',
                important: true,
                popular: false,
                about: false,
                descr:`В марте в японский прокат в 64 кинотеатрах вышел третий аниме-фильм серии 
                «Девушки и танки» (Girls und Panzer das Finale). За первые 10 дней (с 26 марта по 4 апреля) 
                он собрал более 285,9 млн иен (около $ 2,6 млн). А вчера YouTube-канал`,
                text: `На YouTube-канале +Ultra вышел второй трейлер аниме-сериала «Цестус: 
                Римский боец» (Cestvs: The Roman Fighter). Ролик представляет закрывающую тему CG-аниме, 
                которую исполняет певица Сараса Кадоваки. Показ аниме начнётся 14 апреля. 
                В Японии сериал будет выходить в программном блоке +Ultra на Fuji TV. 
                В России его выпустит онлайн-сервис Crunchyroll. `,
            },
            {
                id: 13,
                imgM: img13m,
                title: '«Девушки и танки» — первые сборы третьего фильма и реклама четвёртого',
                author: 'prodi',
                pictures: {},
                date: '01.01.2020',
                important: true,
                popular: false,
                about: false,
                descr:`В марте в японский прокат в 64 кинотеатрах вышел третий аниме-фильм серии 
                «Девушки и танки» (Girls und Panzer das Finale). За первые 10 дней (с 26 марта по 4 апреля) 
                он собрал более 285,9 млн иен (около $ 2,6 млн). А вчера YouTube-канал`,
                text: `На YouTube-канале +Ultra вышел второй трейлер аниме-сериала «Цестус: 
                Римский боец» (Cestvs: The Roman Fighter). Ролик представляет закрывающую тему CG-аниме, 
                которую исполняет певица Сараса Кадоваки. Показ аниме начнётся 14 апреля. 
                В Японии сериал будет выходить в программном блоке +Ultra на Fuji TV. 
                В России его выпустит онлайн-сервис Crunchyroll. `,
            },
            {
                id: 14,
                imgM: img14m,
                title: '«Девушки и танки» — первые сборы третьего фильма и реклама четвёртого',
                author: 'prodi',
                pictures: {},
                date: '01.01.2020',
                important: false,
                popular: false,
                about: true,
                descr:`В марте в японский прокат в 64 кинотеатрах вышел третий аниме-фильм серии 
                «Девушки и танки» (Girls und Panzer das Finale). За первые 10 дней (с 26 марта по 4 апреля) 
                он собрал более 285,9 млн иен (около $ 2,6 млн). А вчера YouTube-канал`,
                text: `На YouTube-канале +Ultra вышел второй трейлер аниме-сериала «Цестус: 
                Римский боец» (Cestvs: The Roman Fighter). Ролик представляет закрывающую тему CG-аниме, 
                которую исполняет певица Сараса Кадоваки. Показ аниме начнётся 14 апреля. 
                В Японии сериал будет выходить в программном блоке +Ultra на Fuji TV. 
                В России его выпустит онлайн-сервис Crunchyroll. `,
            },
            {
                id: 15,
                imgM: img15m,
                title: '«Девушки и танки» — первые сборы третьего фильма и реклама четвёртого',
                author: 'prodi',
                pictures: {},
                date: '01.01.2020',
                important: false,
                popular: false,
                about: true,
                descr:`В марте в японский прокат в 64 кинотеатрах вышел третий аниме-фильм серии 
                «Девушки и танки» (Girls und Panzer das Finale). За первые 10 дней (с 26 марта по 4 апреля) 
                он собрал более 285,9 млн иен (около $ 2,6 млн). А вчера YouTube-канал`,
                text: `На YouTube-канале +Ultra вышел второй трейлер аниме-сериала «Цестус: 
                Римский боец» (Cestvs: The Roman Fighter). Ролик представляет закрывающую тему CG-аниме, 
                которую исполняет певица Сараса Кадоваки. Показ аниме начнётся 14 апреля. 
                В Японии сериал будет выходить в программном блоке +Ultra на Fuji TV. 
                В России его выпустит онлайн-сервис Crunchyroll. `,
            },
            {
                id: 16,
                imgM: img16m,
                title: '«Девушки и танки» — первые сборы третьего фильма и реклама четвёртого',
                author: 'prodi',
                pictures: {},
                date: '01.01.2020',
                important: false,
                popular: false,
                about: false,
                descr:`В марте в японский прокат в 64 кинотеатрах вышел третий аниме-фильм серии 
                «Девушки и танки» (Girls und Panzer das Finale). За первые 10 дней (с 26 марта по 4 апреля) 
                он собрал более 285,9 млн иен (около $ 2,6 млн). А вчера YouTube-канал`,
                text: `На YouTube-канале +Ultra вышел второй трейлер аниме-сериала «Цестус: 
                Римский боец» (Cestvs: The Roman Fighter). Ролик представляет закрывающую тему CG-аниме, 
                которую исполняет певица Сараса Кадоваки. Показ аниме начнётся 14 апреля. 
                В Японии сериал будет выходить в программном блоке +Ultra на Fuji TV. 
                В России его выпустит онлайн-сервис Crunchyroll. `,
            },
            {
                id: 17,
                imgM: img17m,
                title: '«Девушки и танки» — первые сборы третьего фильма и реклама четвёртого',
                author: 'prodi',
                pictures: {},
                date: '01.01.2020',
                important: true,
                popular: false,
                about: false,
                descr:`В марте в японский прокат в 64 кинотеатрах вышел третий аниме-фильм серии 
                «Девушки и танки» (Girls und Panzer das Finale). За первые 10 дней (с 26 марта по 4 апреля) 
                он собрал более 285,9 млн иен (около $ 2,6 млн). А вчера YouTube-канал`,
                text: `На YouTube-канале +Ultra вышел второй трейлер аниме-сериала «Цестус: 
                Римский боец» (Cestvs: The Roman Fighter). Ролик представляет закрывающую тему CG-аниме, 
                которую исполняет певица Сараса Кадоваки. Показ аниме начнётся 14 апреля. 
                В Японии сериал будет выходить в программном блоке +Ultra на Fuji TV. 
                В России его выпустит онлайн-сервис Crunchyroll. `,
            },
            {
                id: 18,
                imgM: img18m,
                title: '«Девушки и танки» — первые сборы третьего фильма и реклама четвёртого',
                author: 'prodi',
                pictures: {},
                date: '01.01.2020',
                important: false,
                popular: false,
                about: false,
                descr:`В марте в японский прокат в 64 кинотеатрах вышел третий аниме-фильм серии 
                «Девушки и танки» (Girls und Panzer das Finale). За первые 10 дней (с 26 марта по 4 апреля) 
                он собрал более 285,9 млн иен (около $ 2,6 млн). А вчера YouTube-канал`,
                text: `На YouTube-канале +Ultra вышел второй трейлер аниме-сериала «Цестус: 
                Римский боец» (Cestvs: The Roman Fighter). Ролик представляет закрывающую тему CG-аниме, 
                которую исполняет певица Сараса Кадоваки. Показ аниме начнётся 14 апреля. 
                В Японии сериал будет выходить в программном блоке +Ultra на Fuji TV. 
                В России его выпустит онлайн-сервис Crunchyroll. `,
            },
            {
                id: 19,
                imgM: img19m,
                title: '«Девушки и танки» — первые сборы третьего фильма и реклама четвёртого',
                author: 'prodi',
                pictures: {},
                date: '01.01.2020',
                important: false,
                popular: false,
                about: false,
                descr:`В марте в японский прокат в 64 кинотеатрах вышел третий аниме-фильм серии 
                «Девушки и танки» (Girls und Panzer das Finale). За первые 10 дней (с 26 марта по 4 апреля) 
                он собрал более 285,9 млн иен (около $ 2,6 млн). А вчера YouTube-канал`,
                text: `На YouTube-канале +Ultra вышел второй трейлер аниме-сериала «Цестус: 
                Римский боец» (Cestvs: The Roman Fighter). Ролик представляет закрывающую тему CG-аниме, 
                которую исполняет певица Сараса Кадоваки. Показ аниме начнётся 14 апреля. 
                В Японии сериал будет выходить в программном блоке +Ultra на Fuji TV. 
                В России его выпустит онлайн-сервис Crunchyroll. `,
            },
            {
                id: 20,
                imgM: img20m,
                title: '«Девушки и танки» — первые сборы третьего фильма и реклама четвёртого Девушки и танки» — первые сборы третьего фильма и реклама четвёртого Девушки и танки»',
                author: 'prodi',
                pictures: {},
                date: '01.01.2020',
                important: false,
                popular: false,
                about: false,
                descr:`В марте в японский прокат в 64 кинотеатрах вышел третий аниме-фильм серии «Девушки и танки» (Girls und Panzer das Finale). За первые 10 дней (с 26 марта по 4 апреля) он собрал более 285,9 млн иен (около $ 2,6 млн). А вчера YouTube-канал В марте в японский прокат в 64 кинотеатрах вышел третий аниме-фильм серии «Девушки и танки» (Girls und Panzer das`,
                text: `На YouTube-канале +Ultra вышел второй трейлер аниме-сериала «Цестус: 
                Римский боец» (Cestvs: The Roman Fighter). Ролик представляет закрывающую тему CG-аниме, 
                которую исполняет певица Сараса Кадоваки. Показ аниме начнётся 14 апреля. 
                В Японии сериал будет выходить в программном блоке +Ultra на Fuji TV. 
                В России его выпустит онлайн-сервис Crunchyroll. `,
            },

        ],
        search: '',
        newsListVis: true,
    },
    filters: {
        sorting: [
            'Сначала новые',
            'Новости сервиса',
            'тег',
            'тег',
            'тег',
            'тег',
        ],
    },
    newsSlider: {
        newsSliderVis: true,
    },
    newsSidebar: {
        newsSidebarVis: true,
    },
    newsVis: true,
}

const newsListR = (state = initialState, action) => {
    switch (action.type) {
        case SET_POST:  
        return {
                ...state,
                newsList: { ...state.newsList, list: [...state.newsList.list, action.newPost] },
            }
        case CHANGE_SEARCH_VALUE:
            return {
                ...state,
                newsList: {...state.newsList, search: action.searchValue},
            }
        case CHANGE_POST:
            return {
                ...state,
                newsList:{...state.newsList, list: updateObjectInArray(state.newsList.list, action.postId, {[action.postItem]: action.postValue})}
            }
        case CONTROL_NEWS_VIS:
            return {
                ...state,
                newsVis: action.newsVis,
            }
        case CONTROL_NEWS_LIST_VIS:
            return {
                ...state,
                newsList: {...state.newsList, newsListVis: action.newsListVis},
            }
        case CONTROL_NEWS_SLIDER_VIS:
            return {
                ...state,
                newsSlider: {...state.newsSlider, newsSliderVis: action.newsSliderVis},
            }
        case CONTROL_NEWS_SIDEBAR_VIS:
            return {
                ...state,
                newsSidebar: {...state.newsSidebar, newsSidebarVis: action.newsSidebarVis},
            }
        default:
            return state;
    }
}


export const setPost               = (newPost)                      => ({type: SET_POST, newPost});
export const ChangeSearchValue     = (searchValue)                  => ({type: CHANGE_SEARCH_VALUE, searchValue });
export const changePost            = (postId, postItem, postValue)  => ({type: CHANGE_POST, postId, postItem, postValue});
export const CONTROLNewsVis        = (newsVis)                      => ({type: CONTROL_NEWS_VIS, newsVis});
export const CONTROLNewsListVis    = (newsListVis)                  => ({type: CONTROL_NEWS_LIST_VIS, newsListVis});
export const CONTROLNewsSliderVis  = (newsSliderVis)                => ({type: CONTROL_NEWS_SLIDER_VIS, newsSliderVis});
export const CONTROLNewsSidebarVis = (newsSidebarVis)               => ({type: CONTROL_NEWS_SIDEBAR_VIS, newsSidebarVis});

export default newsListR;