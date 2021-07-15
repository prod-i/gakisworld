import { API } from '../../API/api'
import img1b from '../../assets/img/serials/1b.jpg'
import img1l from '../../assets/img/serials/1l.jpg'
import img1m from '../../assets/img/serials/1m.jpg'
import img2b from '../../assets/img/serials/2b.jpg'
import img2l from '../../assets/img/serials/2l.jpg'
import img2m from '../../assets/img/serials/2m.jpg'
import img3b from '../../assets/img/serials/3b.jpg'
import img3l from '../../assets/img/serials/3l.jpg'
import img3m from '../../assets/img/serials/3m.jpg'
import img4b from '../../assets/img/serials/4b.jpg'
import img4l from '../../assets/img/serials/4l.jpg'
import img4m from '../../assets/img/serials/4m.jpg'
import img5b from '../../assets/img/serials/5b.jpg'
import img5l from '../../assets/img/serials/5l.jpg'
import img5m from '../../assets/img/serials/5m.jpg'
import img6b from '../../assets/img/serials/6b.jpg'
import img6l from '../../assets/img/serials/6l.jpg'
import img6m from '../../assets/img/serials/6m.jpg'
import img7b from '../../assets/img/serials/7b.jpg'
import img7l from '../../assets/img/serials/7l.jpg'
import img7m from '../../assets/img/serials/7m.jpg'
import img8b from '../../assets/img/serials/8b.jpg'
import img8l from '../../assets/img/serials/8l.jpg'
import img8m from '../../assets/img/serials/8m.jpg'
import img9b from '../../assets/img/serials/9b.jpg'
import img9l from '../../assets/img/serials/9l.jpg'
import img9m from '../../assets/img/serials/9m.jpg'
import img10b from '../../assets/img/serials/10b.jpg'
import img10l from '../../assets/img/serials/10l.jpg'
import img10m from '../../assets/img/serials/10m.jpg'
import img11b from '../../assets/img/serials/11b.jpg'
import img11l from '../../assets/img/serials/11l.jpg'
import img11m from '../../assets/img/serials/11m.jpg'
import img12b from '../../assets/img/serials/12b.jpg'
import img12l from '../../assets/img/serials/12l.jpg'
import img12m from '../../assets/img/serials/12m.jpg'
import img13b from '../../assets/img/serials/13b.jpg'
import img13l from '../../assets/img/serials/13l.jpg'
import img13m from '../../assets/img/serials/13m.jpg'
import img14b from '../../assets/img/serials/14b.jpg'
import img14l from '../../assets/img/serials/14l.jpg'
import img14m from '../../assets/img/serials/14m.jpg'
import img15b from '../../assets/img/serials/15b.jpg'
import img15l from '../../assets/img/serials/15l.jpg'
import img15m from '../../assets/img/serials/15m.jpg'
import img16b from '../../assets/img/serials/16b.jpg'
import img16l from '../../assets/img/serials/16l.jpg'
import img16m from '../../assets/img/serials/16m.jpg'
import img17b from '../../assets/img/serials/17b.jpg'
import img17l from '../../assets/img/serials/17l.jpg'
import img17m from '../../assets/img/serials/17m.jpg'
import img18b from '../../assets/img/serials/18b.jpg'
import img18l from '../../assets/img/serials/18l.jpg'
import img18m from '../../assets/img/serials/18m.jpg'
import img19b from '../../assets/img/serials/19b.jpg'
import img19l from '../../assets/img/serials/19l.jpg'
import img19m from '../../assets/img/serials/19m.jpg'
import img20b from '../../assets/img/serials/20b.jpg'
import img20l from '../../assets/img/serials/20l.jpg'
import img20m from '../../assets/img/serials/20m.jpg'

import img1p from '../../assets/img/serials/1p.jpg'
import vi1v from '../../assets/img/serials/1v.mp4'

const CONTROL_CATALOG_VIS = 'catalog/CONTROL_CATALOG_VIS';
const CONTROL_NOVELTY_VIS = 'catalog/CONTROL_NOVELTY_VIS';
const CONTROL_CATALOG_LIST_VIS = 'catalog/CONTROL_CATALOG_LIST_VIS';
const SET_SERIALS = 'catalog/SET_SERIALS';

let initialState = {
    catalogList: {
        list: [{
            id: 1,
            title: 'Клинок рассекающий демонов',
            imageBcg: img1b,
            imageLarge: img1l,
            imageMin: img1m,
            videoBcg: vi1v,
            rating: 8.1,
            years: '2019',
            genre: 'Демоны, Сверхъестественное',
            director: 'Сотодзаки Харуо',
            studio: 'ufotable',
            type: 'сериал',
            seasons: '2',
            episodes: '',
            AgeRating: 'PG-16',
            MainSlider: true,
            datePublic:'11/07/2021',
            popular: true,
            descr: `Эпоха Тайсё. Ещё с древних времён ходят слухи, что в лесу обитают человекоподобные демоны, 
                          которые питаются людьми и выискивают по ночам новых жертв. 
                          Тандзиро Камадо — старший сын в семье, потерявший отца и взявший на себя заботу о родных. 
                          Однажды он уходит в соседний город, чтобы продать древесный уголь. 
                          Вернувшись утром, парень обнаруживает перед собой страшную картину: 
                          вся родня зверски убита`,
            series: [{
                id: 1,
                title: 'cерия 1',
                imgPrev: img1p,
                video: '',
            },
            {
                id: 2,
                title: 'cерия 2',
                imgPrev: img1p,
            },
            {
                id: 3,
                title: 'cерия 3',
                imgPrev: img1p,
            },
            {
                id: 4,
                title: 'cерия 4',
                imgPrev: img1p,
            },
            {
                id: 5,
                title: 'cерия 5',
                imgPrev: img1p,
            },
            {
                id: 6,
                title: 'cерия 6',
                imgPrev: img1p,
            },
            ],
        },

        {
            id: 2,
            title: 'Атака титанов',
            imageBcg: img4b,
            imageLarge: img4l,
            imageMin: img4m,
            videoBcg: '',
            rating: 9.6,
            years: '2013',
            genre: 'Военное, Драма',
            director: 'Араки Тэцуро, Ябута Сюхэй',
            studio: 'Wit Studio',
            type: 'сериал',
            seasons: '4',
            episodes: '',
            AgeRating: 'NC-17',
            popular: true,
            descr: `В прошлом столетии человечество страдало из-за нашествия гигантов. 
                              Они были очень похожи внешностью на простых людей, 
                              но также имели несколько отличий. Разница состояла в слишком больших размерах 
                              созданий и в их абсолютной глупости. Действовали великаны, как зомби из фильмов ужасов. 
                              Они не могли похвастаться разумом и полностью соответствовали своему первобытному инстинкту, 
                              связанному с выживанием. Поэтому эти существа неустанно пожирали беззащитное население.`,
            series: [{
                id: 1,
                title: 'Серия 1',
                imgPrev: img4m,
            },
            {
                id: 2,
                title: 'Серия 2',
                imgPrev: img4m,
            },
            {
                id: 3,
                title: 'Серия 3',
                imgPrev: img4m,
            },
            {
                id: 4,
                title: 'Серия 4',
                imgPrev: img4m,
            },
            {
                id: 5,
                title: 'Серия 5',
                imgPrev: img4m,
            },
            {
                id: 6,
                title: 'Серия 6',
                imgPrev: img4m,
            },
            ],
        },
        {
            id: 3,
            title: 'Хвост феи',
            imageBcg: img3b,
            imageLarge: img3l,
            imageMin: img3m,
            videoBcg: '',
            rating: 9.0,
            years: '2009',
            genre: 'Комедия, Магия, Приключения',
            director: 'Исихира Синдзи',
            studio: 'A-1 Pictures Inc., Satelight',
            type: 'сериал',
            seasons: '',
            episodes: '175',
            AgeRating: 'PG-13',
            popular: false,
            descr: `События разворачиваются в выдуманной стране, где всё пропитано волшебством. 
                              В Королевстве магия является совершенно обычной вещью, 
                              без которой не могут обойтись местные жители. 
                              Все, кто владеет магическими способностями, входят в состав гильдий, 
                              которые давно стали основной составляющей обители. Люси – миловидная юная девушка, 
                              только начинающая путь юной волшебницы. Она мечтает вступить в гильдию «Хвост Феи», 
                              являющегося самым престижным.`,
            series: [{
                id: 1,
                title: 'Серия 1',
                imgPrev: img3m,
            },
            {
                id: 2,
                title: 'Серия 2',
                imgPrev: img3m,
            },
            {
                id: 3,
                title: 'Серия 3',
                imgPrev: img3m,
            },
            {
                id: 4,
                title: 'Серия 4',
                imgPrev: img3m,
            },
            {
                id: 5,
                title: 'Серия 5',
                imgPrev: img3m,
            },
            {
                id: 6,
                title: 'Серия 6',
                imgPrev: img3m,
            },
            ],
        },
        {
            id: 4,
            title: 'Токийский гуль',
            imageBcg: img2b,
            imageLarge: img2l,
            imageMin: img2m,
            videoBcg: '',
            rating: 9.0,
            years: '2014',
            genre: 'Детектив, Драма, Психологическое',
            director: 'Сюхэй Морита',
            studio: 'Studio Pierrot',
            type: 'сериал',
            seasons: '4',
            episodes: '',
            AgeRating: 'NC-17',
            popular: true,
            descr: `Пройдя через страшную боль, унижение и ломку жизненных ценностей, 
                              Кэн Канэки переродился. Вместо неуклюжего гибрида человека и упыря возникло что-то новое, 
                              гораздо сильнее и совершеннее. Выпустив и укротив внутреннего зверя, 
                              Кэн встал на дорогу могущества, но куда она приведет? 
                              Пока что молодой боец уверен в одном – только абсолютная сила позволит ему жить так, 
                              как хочет, и защитить тех немногих, кто остался дорог. 
                              Остальные же – лишь враги`,
            series: [{
                id: 1,
                title: 'Серия 1',
                imgPrev: img2m,
            },
            {
                id: 2,
                title: 'Серия 2',
                imgPrev: img2m,
            },
            {
                id: 3,
                title: 'Серия 3',
                imgPrev: img2m,
            },
            {
                id: 4,
                title: 'Серия 4',
                imgPrev: img2m,
            },
            {
                id: 5,
                title: 'Серия 5',
                imgPrev: img2m,
            },
            {
                id: 6,
                title: 'Серия 6',
                imgPrev: img2m,
            },
            ],
        },
        {
            id: 5,
            title: 'Тетрадь смерти',
            imageBcg: img5b,
            imageLarge: img5l,
            imageMin: img5m,
            videoBcg: '',
            rating: 9.3,
            years: '2006',
            genre: 'Детектив, Полиция, Психологическое',
            director: 'Араки Тэцуро',
            studio: 'Madhouse Studios',
            type: 'сериал',
            seasons: '',
            episodes: '37',
            AgeRating: 'NC-17',
            popular: false,
            descr: `Ягами Лайт – обычный старшеклассник, у которого довольно неплохая жизнь. 
                              Ему пророчат блестящее будущее, сверстницы одаривают его вниманием, 
                              учеба идет как нельзя лучше, а дома царит мир. Но все меняется, 
                              когда в его руки попадает странная черная тетрадь смерти, принадлежащая шинигами Рюку. 
                              Тогда парень, ослепленный желанием избавить мир от зла и несправедливости, 
                              решает сыграть в Бога и решать, кому жить, а кому нет.`,
            series: [{
                id: 1,
                title: 'Серия 1',
                imgPrev: img5m,
            },
            {
                id: 2,
                title: 'Серия 2',
                imgPrev: img5m,
            },
            {
                id: 3,
                title: 'Серия 3',
                imgPrev: img5m,
            },
            {
                id: 4,
                title: 'Серия 4',
                imgPrev: img5m,
            },
            {
                id: 5,
                title: 'Серия 5',
                imgPrev: img5m,
            },
            {
                id: 6,
                title: 'Серия 6',
                imgPrev: img5m,
            },
            ],
        },
        {
            id: 6,
            title: 'Реинкарнация безработного',
            imageBcg: img6b,
            imageLarge: img6l,
            imageMin: img6m,
            videoBcg: '',
            rating: 9.7,
            years: '2021',
            genre: 'Драма, Магия, Фэнтези, Этти',
            director: 'Манабу Окамото',
            studio: '',
            type: 'сериал',
            seasons: '',
            episodes: '11',
            AgeRating: 'NC-17',
            popular: true,
            descr: `«В этом новом мире я возьмусь за голову!» Встречайте: девственник, 
                              затворник и безработный 34 лет от роду. В день похорон родителей его выгоняют из дома, 
                              а немногим позже он погибает под колёсами грузовика. Казалось бы, 
                              на этом сказочке конец… но нет! Он оказывается в теле младенца уже в другом, 
                              фэнтезийном мире. Отброс, чья жизни не стоила и ломаного гроша, перерождается как Рудеус Грейрат.`,
            series: [{
                id: 1,
                title: 'Серия 1',
                imgPrev: img6m,
            },
            {
                id: 2,
                title: 'Серия 2',
                imgPrev: img6m,
            },
            {
                id: 3,
                title: 'Серия 3',
                imgPrev: img6m,
            },
            {
                id: 4,
                title: 'Серия 4',
                imgPrev: img6m,
            },
            {
                id: 5,
                title: 'Серия 5',
                imgPrev: img6m,
            },
            {
                id: 6,
                title: 'Серия 6',
                imgPrev: img6m,
            },
            ],
        },
        {
            id: 7,
            title: 'Наруто: Ураганные хроники',
            imageBcg: img7b,
            imageLarge: img7l,
            imageMin: img7m,
            videoBcg: '',
            rating: 9.7,
            years: '2021',
            genre: 'Боевые искусства, Сёнэн',
            director: 'Date Hayato, Ямасита Хироюки',
            studio: 'Studio Pierrot',
            type: 'сериал',
            seasons: '',
            episodes: '500',
            AgeRating: 'NC-17',
            popular: false,
            descr: `Много невзгод и проблем встретил Наруто Узумаки – великий ниндзя. 
                              Прошли экзамены на повышение квалификации, прошли долгие годы, 
                              где горечь и боль, с переменным успехом, заменились на радость и счастье. 
                              Наруто стал взрослее, умнее, быстрее и сильнее. Предательство за предательством его закалили, 
                              а его настоящие друзья определились в беде. Теперь, после двух лет обучения у знаменитого 
                              на весь мир отшельника Джирайя, Узумаки готов к новым приключениям.`,
            series: [{
                id: 1,
                title: 'Серия 1',
                imgPrev: img7m,
            },
            {
                id: 2,
                title: 'Серия 2',
                imgPrev: img7m,
            },
            {
                id: 3,
                title: 'Серия 3',
                imgPrev: img7m,
            },
            {
                id: 4,
                title: 'Серия 4',
                imgPrev: img7m,
            },
            {
                id: 5,
                title: 'Серия 5',
                imgPrev: img7m,
            },
            {
                id: 6,
                title: 'Серия 6',
                imgPrev: img7m,
            },
            ],
        },
        {
            id: 8,
            title: 'Волейбол!!',
            imageBcg: img8b,
            imageLarge: img8l,
            imageMin: img8m,
            videoBcg: '',
            rating: 9.6,
            years: '2014',
            genre: 'Драма, Комедия, Сёнэн, Спорт, Школа',
            director: 'Сато Масако',
            studio: 'Production I.G',
            type: 'сериал',
            seasons: '4',
            episodes: '',
            AgeRating: 'PG-13',
            popular: true,
            descr: `По результатам Весеннего отборочного турнира волейбольный клуб старшей школы 
                              Карасуно прошёл на Чемпионат Японии. И пока всей секцией они дожидаются 
                              выхода на национальный уровень, Кагеяме пришло предложение поучаствовать в 
                              тренировочном лагере национальной команды юниоров. А Цукисиму тем временем 
                              пригласили в лагерь первогодок префектуры Мияги. Словно холодным душем, 
                              Хинату окатила разница между ним и другими первогодками…`,
            series: [{
                id: 1,
                title: 'Серия 1',
                imgPrev: img8m,
            },
            {
                id: 2,
                title: 'Серия 2',
                imgPrev: img8m,
            },
            {
                id: 3,
                title: 'Серия 3',
                imgPrev: img8m,
            },
            {
                id: 4,
                title: 'Серия 4',
                imgPrev: img8m,
            },
            {
                id: 5,
                title: 'Серия 5',
                imgPrev: img8m,
            },
            {
                id: 6,
                title: 'Серия 6',
                imgPrev: img8m,
            },
            ],
        },
        {
            id: 9,
            title: 'Обещанный Неверленд',
            imageBcg: img9b,
            imageLarge: img9l,
            imageMin: img9m,
            videoBcg: '',
            rating: 9.6,
            years: '2019',
            genre: 'Детектив, Психологическое, Сёнэн',
            director: 'Камбэ Мамору',
            studio: 'CloverWorks',
            type: 'сериал',
            seasons: '',
            episodes: '12',
            AgeRating: 'NC-17',
            popular: true,
            descr: `В приюте «Грейс Филд» под чутким взором «Матери» живут трое подростков — Эмма, 
                              Норман и Рэй. Окружённые младшими братьями и сёстрами они не знают бед и невзгод. 
                              Но в одну ночь их идиллия оборачивается кошмаром. Они считали приют раем. 
                              Но теперь, когда они знают правду, у них остался один выход: сбежать или... умереть!`,
            series: [{
                id: 1,
                title: 'Серия 1',
                imgPrev: img9m,
            },
            {
                id: 2,
                title: 'Серия 2',
                imgPrev: img9m,
            },
            {
                id: 3,
                title: 'Серия 3',
                imgPrev: img9m,
            },
            {
                id: 4,
                title: 'Серия 4',
                imgPrev: img9m,
            },
            {
                id: 5,
                title: 'Серия 5',
                imgPrev: img9m,
            },
            {
                id: 6,
                title: 'Серия 6',
                imgPrev: img9m,
            },
            ],
        },
        {
            id: 10,
            title: 'Доктор Стоун',
            imageBcg: img10b,
            imageLarge: img10l,
            imageMin: img10m,
            videoBcg: '',
            rating: 9.6,
            years: '2019',
            genre: 'Комедия, Приключения, Сёнэн, Фантастика',
            director: 'Синъя Иино',
            studio: 'TMS Entertainment',
            type: 'сериал',
            seasons: '2',
            episodes: '',
            AgeRating: 'PG-13',
            popular: true,
            descr: `Тысячи лет прошли с тех пор, как всё человечество мгновенно окаменело от загадочного явления. 
                              Проснувшись и не узнав сильно изменившийся свет, Сэнку Исигами — гений, 
                              обладающий сверхчеловеческим интеллектом — застал лишь жалкие окаменевшие останки, 
                              свидетельствующие о том, что некогда здесь существовала развитая цивилизация. 
                              Застигнутый врасплох, но не отчаявшийся, Сэнку решает вернуть прежний мир силой науки. 
                              Со временем к нему присоединяются новые друзья.`,
            series: [{
                id: 1,
                title: 'Серия 1',
                imgPrev: img10m,
            },
            {
                id: 2,
                title: 'Серия 2',
                imgPrev: img10m,
            },
            {
                id: 3,
                title: 'Серия 3',
                imgPrev: img10m,
            },
            {
                id: 4,
                title: 'Серия 4',
                imgPrev: img10m,
            },
            {
                id: 5,
                title: 'Серия 5',
                imgPrev: img10m,
            },
            {
                id: 6,
                title: 'Серия 6',
                imgPrev: img10m,
            },
            ],
        },
        {
            id: 11,
            title: 'Ван-Пис',
            imageBcg: img11b,
            imageLarge: img11l,
            imageMin: img11m,
            videoBcg: '',
            rating: 9.5,
            years: '1999',
            genre: 'Драма, Комедия, Приключения, Сёнэн',
            director: 'Сакай Мунэхиса, Уда Коносукэ',
            studio: 'Toei Animation',
            type: 'сериал',
            seasons: '',
            episodes: '967',
            AgeRating: 'PG-13',
            popular: false,
            descr: `Главный герой этой истории - парень в соломенной шляпе по имени Монки Д. Луффи. 
                              Все о чем мечтает наш герой - это приключения и путешествия. 
                              Будучи маленьким ребенком, он съедает дьявольский фрукт и становится резиновым человеком. 
                              Теперь у него есть необычная способность - он может растягивать свое 
                              тело и конечности до любых размеров.`,
            series: [{
                id: 1,
                title: 'Серия 1',
                imgPrev: img11m,
            },
            {
                id: 2,
                title: 'Серия 2',
                imgPrev: img11m,
            },
            {
                id: 3,
                title: 'Серия 3',
                imgPrev: img11m,
            },
            {
                id: 4,
                title: 'Серия 4',
                imgPrev: img11m,
            },
            {
                id: 5,
                title: 'Серия 5',
                imgPrev: img11m,
            },
            {
                id: 6,
                title: 'Серия 6',
                imgPrev: img11m,
            },
            ],
        },
        {
            id: 12,
            title: 'Унесённые призраками',
            imageBcg: img12b,
            imageLarge: img12l,
            imageMin: img12m,
            videoBcg: '',
            rating: 9.5,
            years: '2001',
            genre: 'Драма, Приключения, Сверхъестественное',
            director: 'Хаяо Миядзаки',
            studio: 'Studio Ghibli',
            type: 'фильм',
            seasons: '',
            episodes: '',
            AgeRating: 'PG-13',
            popular: true,
            descr: `Сюжет данной картины пойдет про маленькую десятилетнюю девочку, 
                              по имени, Тихиро Огино. Её семья переезжает в глубину Японии, 
                              но по пути они теряют свою дорогу и волей случая поворачивают немного раньше, 
                              чем это необходимо. Этого никто не замечает и они заезжают в необычный лес, 
                              выход из которого лежит через длинный туннель. `,
            series: [{
                id: 1,
                title: 'Смотреть',
                imgPrev: img12m,
            },
            ],
        },
        {
            id: 13,
            title: 'Ходячий замок',
            imageBcg: img13b,
            imageLarge: img13l,
            imageMin: img13m,
            videoBcg: '',
            rating: 9.5,
            years: '2004',
            genre: 'Драма, Приключения, Романтика, Фэнтези',
            director: 'Хаяо Миядзаки',
            studio: 'Studio Ghibli',
            type: 'фильм',
            seasons: '',
            episodes: '',
            AgeRating: 'PG-13',
            popular: true,
            descr: `Действия в данной картине начнут свою историю в 19 веке Европы, 
                              когда в мире магия не уступает технологиям, а наоборот, 
                              они вместе стараются развиваться. Сюжет повествует про молодую девушку Софи, 
                              которая потеряла свою красоту и молодость из-за ведьмы. 
                              Тем самым превратилась из красивой восемнадцати летней девочки в дряхлую старушку.`,
            series: [{
                id: 1,
                title: 'Смотреть',
                imgPrev: img13m,
            },
            ],
        },
        {
            id: 14,
            title: 'Твоё имя',
            imageBcg: img14b,
            imageLarge: img14l,
            imageMin: img14m,
            videoBcg: '',
            rating: 9.5,
            years: '2016',
            genre: 'Драма, Романтика, Сверхъестественное, Школа',
            director: 'Синкай Макото',
            studio: 'CoMix Wave',
            type: 'фильм',
            seasons: '',
            episodes: '',
            AgeRating: 'PG-13',
            popular: true,
            descr: `Действие в аниме Твое имя будет происходить в двух городах. 
                              Главными героями является парочка обычных людей, которые даже не подозревают, 
                              что вскоре судьба свяжет их жизни очень крепко. Они никогда не были знакомы, 
                              она – любимая дочь, которая свое свободное время посвящает работе в храме. 
                              Он – надежный друг, успешен и трудолюбив на работе, имеет неплохие задатки талантливого художника.`,
            series: [{
                id: 1,
                title: 'Смотреть',
                imgPrev: img14m,
            },
            ],
        },
        {
            id: 15,
            title: 'Банановая рыба',
            imageBcg: img15b,
            imageLarge: img15l,
            imageMin: img15m,
            videoBcg: '',
            rating: 9.4,
            years: '2018',
            genre: 'Драма, Приключения, Сёдзё, Экшен',
            director: 'Уцуми Хироко',
            studio: 'MAPPA',
            type: 'сериал',
            seasons: '',
            episodes: '24',
            AgeRating: 'NC-17',
            popular: true,
            descr: `События разворачиваются в период Вьетнамского противостояния, 
                              когда обезумевший боец Гриффин Калленрис начинает неожиданно стрелять в своих соратников. 
                              Парня удается успокоить, после чего он произносит фразу «Банановая рыба». 
                              Юноша так и не возвращается к нормальной жизнедеятельности. 
                              Он в сумасшедшем состоянии повисает на шее младшего братишки.`,
            series: [{
                id: 1,
                title: 'Серия 1',
                imgPrev: img15m,
            },
            {
                id: 2,
                title: 'Серия 2',
                imgPrev: img15m,
            },
            {
                id: 3,
                title: 'Серия 3',
                imgPrev: img15m,
            },
            {
                id: 4,
                title: 'Серия 4',
                imgPrev: img15m,
            },
            {
                id: 5,
                title: 'Серия 5',
                imgPrev: img15m,
            },
            {
                id: 6,
                title: 'Серия 6',
                imgPrev: img15m,
            },
            ],
        },
        {
            id: 16,
            title: 'Укрась прощальное утро цветами обещания',
            imageBcg: img16b,
            imageLarge: img16l,
            imageMin: img16m,
            videoBcg: '',
            rating: 9.4,
            years: '2018',
            genre: 'Драма, Фэнтези',
            director: 'Окада Мари',
            studio: 'P.A. Works',
            type: 'фильм',
            seasons: '',
            episodes: '',
            AgeRating: 'PG-13',
            popular: true,
            descr: `Макия родилась необычной девушкой. Поселение йольфов знаменито тем, что люди, родом оттуда, 
                              не могут постареть, по достижению подросткового возраста они застывают во времени. 
                              Она отделена от всего мира, но однажды правителю одного государства приходит мысль о том, 
                              что его наследник тоже должен быть бессмертен. Происходит набег на племя.`,
            series: [{
                id: 1,
                title: 'Смотреть',
                imgPrev: img16m,
            },
            ],
        },
        {
            id: 17,
            title: 'Мой сосед Тоторо',
            imageBcg: img17b,
            imageLarge: img17l,
            imageMin: img17m,
            videoBcg: '',
            rating: 9.4,
            years: '1988',
            genre: 'Комедия, Приключения, Сверхъестественное',
            director: 'Хаяо Миядзаки',
            studio: 'Studio Ghibli',
            type: 'фильм',
            seasons: '',
            episodes: '',
            AgeRating: 'G',
            popular: true,
            descr: `Сацуки, Мэй, две сестры, посчастливилось встретить зеленого духа Тоторо. 
                          Они переезжают поближе к природе и им предстоит открыть мир. Дом ветхий, 
                          в нем призраки – сусуватари. Из-за болезни мамы работу по дому выполняет 
                          Сацуки и её отец, а Мэй просто гуляет на природе и встречается с маленьким лесным духом, 
                          он приводит её к собрату, а тот отводит к Тоторо, он хранит лес и живет рядом.`,
            series: [{
                id: 1,
                title: 'Смотреть',
                imgPrev: img17m,
            },
            ],
        },
        {
            id: 18,
            title: 'Ванпанчмен',
            imageBcg: img18b,
            imageLarge: img18l,
            imageMin: img18m,
            videoBcg: '',
            rating: 9.3,
            years: '2015',
            genre: 'Комедия, Пародия, Супер сила',
            director: 'Нацумэ Синго',
            studio: 'Madhouse Studios',
            type: 'сериал',
            seasons: '2',
            episodes: '',
            AgeRating: 'NC-17',
            popular: true,
            descr: `Мы все привыкли, что комиксы наполнены различными злодеями, 
                              безумцами с планом захвата планеты и прочими неприятностями. 
                              Город Зет-Сити уже давно привык к такому роду событий, постоянными захватчиками 
                              из других миров и прочими бедствиями. Самое важное, 
                              чтобы всегда вовремя появился супергерой, 
                              которой справится со всеми проблемами и сможет победить всех злодеев. `,
            series: [{
                id: 1,
                title: 'Серия 1',
                imgPrev: img18m,
            },
            {
                id: 2,
                title: 'Серия 2',
                imgPrev: img18m,
            },
            {
                id: 3,
                title: 'Серия 3',
                imgPrev: img18m,
            },
            {
                id: 4,
                title: 'Серия 4',
                imgPrev: img18m,
            },
            {
                id: 5,
                title: 'Серия 5',
                imgPrev: img18m,
            },
            {
                id: 6,
                title: 'Серия 6',
                imgPrev: img18m,
            },
            ],
        },
        {
            id: 19,
            title: 'Дороро',
            imageBcg: img19b,
            imageLarge: img19l,
            imageMin: img19m,
            videoBcg: '',
            rating: 9.4,
            years: '2019',
            genre: 'Демоны, Исторический, Приключения',
            director: 'Фурухаси Кадзухиро',
            studio: 'MAPPA, Tezuka Production',
            type: 'сериал',
            seasons: '',
            episodes: '24',
            AgeRating: 'NC-17',
            popular: true,
            descr: `События разворачиваются в феодальной Японии, когда страна погружается в страшный военный водоворот. 
                              На полуострове под названием Ното ожидается появление на свет наследника генерала-самурая. 
                              Отважный Дайго Кагемитсу – преданный державе воин, готовый рисковать собственной жизнью ради защиты родины. 
                              Он находит метод, способный привести его к реализации заветного желания.`,
            series: [{
                id: 1,
                title: 'Серия 1',
                imgPrev: img19m,
            },
            {
                id: 2,
                title: 'Серия 2',
                imgPrev: img19m,
            },
            {
                id: 3,
                title: 'Серия 3',
                imgPrev: img19m,
            },
            {
                id: 4,
                title: 'Серия 4',
                imgPrev: img19m,
            },
            {
                id: 5,
                title: 'Серия 5',
                imgPrev: img19m,
            },
            {
                id: 6,
                title: 'Серия 6',
                imgPrev: img19m,
            },
            ],
        },
        {
            id: 20,
            title: 'Форма голоса',
            imageBcg: img20b,
            imageLarge: img20l,
            imageMin: img20m,
            videoBcg: '',
            rating: 9.4,
            years: '2016',
            genre: 'Драма, Сёнэн, Школа',
            director: 'Ямада Наоко',
            studio: 'Kyoto Animation',
            type: 'фильм',
            seasons: '',
            episodes: '',
            lastSeries: '1.1.2020',
            AgeRating: 'NC-17',
            popular: true,
            descr: `Каждый человек может совершать ошибки, но не все могут это осознать, 
                              потом они испытывают стыд. Сюжет данного аниме расскажет историю о мальчике 
                              Шоя Ишида и девочки Шоко Нишимия. У девочки с детства были проблемы со слухом, 
                              и ей пришлось из-за этого много страдать. Повествование берет начало в школе, с их знакомства, 
                              маленькая Шоко переводится к Шоя.`,
            series: [{
                id: 1,
                title: 'Смотреть',
                imgPrev: img20m,
            },
            ],
        },
        ],
        listAPI: [],
        catalogListVis: true,
    },
    novelty: {
        noveltyVis: true,
    },
    catalogVis: true,
};

const catalogListR = (state = initialState, action) => {
    switch (action.type) {
        case SET_SERIALS: 
        return {
                ...state,
                catalogList: { ...state.catalogList, list: [...state.catalogList.list, action.serials] },
                
            }
        case CONTROL_CATALOG_VIS:
            return {
                ...state,
                catalogVis: action.catalogVis,
            }
        case CONTROL_NOVELTY_VIS:
            return {
                ...state,
                novelty: { ...state.novelty, noveltyVis: action.noveltyVis },
            }
        case CONTROL_CATALOG_LIST_VIS:
            return {
                ...state,
                catalogList: { ...state.catalogList, catalogListVis: action.catalogListVis },
            }
        default:
            return state;
    }
}
export const setSerials = (serials) => ({ type: SET_SERIALS, serials })
export const CONTROLCatalogVis = (catalogVis) => ({ type: CONTROL_CATALOG_VIS, catalogVis });
export const CONTROLNoveltyVis = (noveltyVis) => ({ type: CONTROL_NOVELTY_VIS, noveltyVis });
export const CONTROLCatalogListVis = (catalogListVis) => ({ type: CONTROL_CATALOG_LIST_VIS, catalogListVis });


export const getSerialsTC = () => {
    return async (dispatch, getState) => {
        const response = await API.getSerials(getState().search.searchInput.searchValue)
        // dispatch(setSerials(response.data.Search))
    }
}


export default catalogListR;