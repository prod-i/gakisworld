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

let initialState = {
    catalogList: {
        list: [
            {
                id: 1,
                title      : 'Клинок рассекающий демонов',
                imageBcg   : img1b,
                imageLarge : img1l,
                imageMin   : img1m,
                rating     : 8.1,
                years      : '2019',
                genre      : 'Демоны, Сверхъестественное',
                director   : 'Сотодзаки Харуо',
                studio     : 'ufotable',
                type       : 'сериал',
                seasons    : '2',
                episodes   : '',
                AgeRating  : 'PG-16',
                descr      : `Эпоха Тайсё. Ещё с древних времён ходят слухи, что в лесу обитают человекоподобные демоны, 
                              которые питаются людьми и выискивают по ночам новых жертв. 
                              Тандзиро Камадо — старший сын в семье, потерявший отца и взявший на себя заботу о родных. 
                              Однажды он уходит в соседний город, чтобы продать древесный уголь. 
                              Вернувшись утром, парень обнаруживает перед собой страшную картину: 
                              вся родня зверски убита, а единственная выжившая - младшая сестра Нэдзуко`,
            },
            {
                id: 2,
                title      : 'Токийский гуль',
                imageBcg   : img2b,
                imageLarge : img2l,
                imageMin   : img2m,
                rating     : 9.0,
                years      : '2014',
                genre      : 'Детектив, Драма, Психологическое',
                director   : 'Сюхэй Морита',
                studio     : 'Studio Pierrot',
                type       : 'сериал',
                seasons    : '4',
                episodes   : '',
                AgeRating  : 'NC-17',
                descr      : `Пройдя через страшную боль, унижение и ломку жизненных ценностей, 
                              Кэн Канэки переродился. Вместо неуклюжего гибрида человека и упыря возникло что-то новое, 
                              гораздо сильнее и совершеннее. Выпустив и укротив внутреннего зверя, 
                              Кэн встал на дорогу могущества, но куда она приведет? 
                              Пока что молодой боец уверен в одном – только абсолютная сила позволит ему жить так, 
                              как хочет, и защитить тех немногих, кто остался дорог. 
                              Остальные же – лишь враги, добыча, и ничего более.`,
            },
            {
                id: 3,
                title      : 'Хвост феи',
                imageBcg   : img3b,
                imageLarge : img3l,
                imageMin   : img3m,
                rating     : 9.0,
                years      : '2009',
                genre      : 'Комедия, Магия, Приключения',
                director   : 'Исихира Синдзи',
                studio     : 'A-1 Pictures Inc., Satelight',
                type       : 'сериал',
                seasons    : '',
                episodes   : '175',
                AgeRating  : 'PG-13',
                descr      : `События разворачиваются в выдуманной стране, где всё пропитано волшебством. 
                              В Королевстве магия является совершенно обычной вещью, 
                              без которой не могут обойтись местные жители. 
                              Все, кто владеет магическими способностями, входят в состав гильдий, 
                              которые давно стали основной составляющей обители. Люси – миловидная юная девушка, 
                              только начинающая путь юной волшебницы. Она мечтает вступить в гильдию «Хвост Феи», 
                              являющегося самым престижным и сильным на всей королевской территории.`,
            },
            {
                id: 4,
                title      : 'Атака титанов',
                imageBcg   : img4b,
                imageLarge : img4l,
                imageMin   : img4m,
                rating     : 9.6,
                years      : '2013',
                genre      : 'Военное, Драма',
                director   : 'Араки Тэцуро, Ябута Сюхэй',
                studio     : 'Wit Studio',
                type       : 'сериал',
                seasons    : '4',
                episodes   : '',
                AgeRating  : 'NC-17',
                descr      : `В прошлом столетии человечество страдало из-за нашествия гигантов. 
                              Они были очень похожи внешностью на простых людей, 
                              но также имели несколько отличий. Разница состояла в слишком больших размерах 
                              созданий и в их абсолютной глупости. Действовали великаны, как зомби из банальных фильмов ужасов. 
                              Они не могли похвастаться разумом и полностью соответствовали своему первобытному инстинкту, 
                              связанному с выживанием. Поэтому эти существа неустанно пожирали беззащитное население, 
                              совершенно не чувствуя к нему сожаления.`,
            },
            {
                id: 5,
                title      : 'Тетрадь смерти',
                imageBcg   : img5b,
                imageLarge : img5l,
                imageMin   : img5m,
                rating     : 9.3,
                years      : '2006',
                genre      : 'Детектив, Полиция, Психологическое',
                director   : 'Араки Тэцуро',
                studio     : 'Madhouse Studios',
                type       : 'сериал',
                seasons    : '',
                episodes   : '37',
                AgeRating  : 'NC-17',
                descr      : `Ягами Лайт – обычный старшеклассник, у которого довольно неплохая жизнь. 
                              Ему пророчат блестящее будущее, сверстницы одаривают его вниманием, 
                              учеба идет как нельзя лучше, а дома царит мир. Но все меняется, 
                              когда в его руки попадает странная черная тетрадь смерти, принадлежащая шинигами Рюку. 
                              Тогда парень, ослепленный желанием избавить мир от зла и несправедливости, 
                              решает сыграть в Бога и решать, кому жить, а кому нет.`,
            },
            {
                id: 6,
                title      : 'Реинкарнация безработного',
                imageBcg   : img6b,
                imageLarge : img6l,
                imageMin   : img6m,
                rating     : 9.7,
                years      : '2021',
                genre      : 'Драма, Магия, Фэнтези, Этти',
                director   : 'Манабу Окамото',
                studio     : '',
                type       : 'сериал',
                seasons    : '',
                episodes   : '11',
                AgeRating  : 'NC-17',
                descr      : `«В этом новом мире я возьмусь за голову!» Встречайте: девственник, 
                              затворник и безработный 34 лет от роду. В день похорон родителей его выгоняют из дома, 
                              а немногим позже он погибает под колёсами грузовика. Казалось бы, 
                              на этом сказочке конец… но нет! Он оказывается в теле младенца уже в другом, 
                              фэнтезийном мире. Отброс, чья жизни не стоила и ломаного гроша, перерождается как Рудеус Грейрат.`,
            },
            {
                id: 7,
                title      : 'Наруто: Ураганные хроники',
                imageBcg   : img7b,
                imageLarge : img7l,
                imageMin   : img7m,
                rating     : 9.7,
                years      : '2021',
                genre      : 'Боевые искусства, Сёнэн',
                director   : 'Date Hayato, Ямасита Хироюки',
                studio     : 'Studio Pierrot',
                type       : 'сериал',
                seasons    : '',
                episodes   : '500',
                AgeRating  : 'NC-17',
                descr      : `Много невзгод и проблем встретил Наруто Узумаки – великий ниндзя. 
                              Прошли экзамены на повышение квалификации, прошли долгие годы, 
                              где горечь и боль, с переменным успехом, заменились на радость и счастье. 
                              Наруто стал взрослее, умнее, быстрее и сильнее. Предательство за предательством его закалили, 
                              а его настоящие друзья определились в беде. Теперь, после двух лет обучения у знаменитого 
                              на весь мир отшельника Джирайя, Узумаки готов к новым приключениям, ведь грядет новая эра.`,
            },
            {
                id: 8,
                title      : 'Волейбол!!',
                imageBcg   : img8b,
                imageLarge : img8l,
                imageMin   : img8m,
                rating     : 9.6,
                years      : '2014',
                genre      : 'Драма, Комедия, Сёнэн, Спорт, Школа',
                director   : 'Сато Масако',
                studio     : 'Production I.G',
                type       : 'сериал',
                seasons    : '4',
                episodes   : '',
                AgeRating  : 'PG-13',
                descr      : `По результатам Весеннего отборочного турнира волейбольный клуб старшей школы 
                              Карасуно прошёл на Чемпионат Японии. И пока всей секцией они дожидаются 
                              выхода на национальный уровень, Кагеяме пришло предложение поучаствовать в 
                              тренировочном лагере национальной команды юниоров. А Цукисиму тем временем 
                              пригласили в лагерь первогодок префектуры Мияги. Словно холодным душем, 
                              Хинату окатила разница между ним и другими первогодками…`,
            },
            {
                id: 9,
                title      : 'Обещанный Неверленд',
                imageBcg   : img9b,
                imageLarge : img9l,
                imageMin   : img9m,
                rating     : 9.6,
                years      : '2019',
                genre      : 'Детектив, Психологическое, Сёнэн',
                director   : 'Камбэ Мамору',
                studio     : 'CloverWorks',
                type       : 'сериал',
                seasons    : '',
                episodes   : '12',
                AgeRating  : 'NC-17',
                descr      : `В приюте «Грейс Филд» под чутким взором «Матери» живут трое подростков — Эмма, 
                              Норман и Рэй. Окружённые младшими братьями и сёстрами они не знают бед и невзгод. 
                              Но в одну ночь их идиллия оборачивается кошмаром. Они считали приют раем. 
                              Но теперь, когда они знают правду, у них остался один выход: сбежать или... умереть!`,
            },
            {
                id: 10,
                title      : 'Доктор Стоун',
                imageBcg   : img10b,
                imageLarge : img10l,
                imageMin   : img10m,
                rating     : 9.6,
                years      : '2019',
                genre      : 'Комедия, Приключения, Сёнэн, Фантастика',
                director   : 'Синъя Иино',
                studio     : 'TMS Entertainment',
                type       : 'сериал',
                seasons    : '2',
                episodes   : '',
                AgeRating  : 'PG-13',
                descr      : `Тысячи лет прошли с тех пор, как всё человечество мгновенно окаменело от загадочного явления. 
                              Проснувшись и не узнав сильно изменившийся свет, Сэнку Исигами — гений, 
                              обладающий сверхчеловеческим интеллектом — застал лишь жалкие окаменевшие останки, 
                              свидетельствующие о том, что некогда здесь существовала развитая цивилизация. 
                              Застигнутый врасплох, но не отчаявшийся, Сэнку решает вернуть прежний мир силой науки. 
                              Со временем к нему присоединяются новые друзья и вместе создают Научное королевство.`,
            },
            {
                id: 11,
                title      : 'Ван-Пис',
                imageBcg   : img11b,
                imageLarge : img11l,
                imageMin   : img11m,
                rating     : 9.5,
                years      : '1999',
                genre      : 'Драма, Комедия, Приключения, Сёнэн',
                director   : 'Сакай Мунэхиса, Уда Коносукэ',
                studio     : 'Toei Animation',
                type       : 'сериал',
                seasons    : '',
                episodes   : '967',
                AgeRating  : 'PG-13',
                descr      : `Главный герой этой истории - парень в соломенной шляпе по имени Монки Д. Луффи. 
                              Все о чем мечтает наш герой - это приключения и путешествия. 
                              Будучи маленьким ребенком, он съедает дьявольский фрукт и становится резиновым человеком. 
                              Теперь у него есть необычная способность - он может растягивать свое 
                              тело и конечности до любых размеров.`,
            },
            {
                id: 12,
                title      : 'Унесённые призраками',
                imageBcg   : img12b,
                imageLarge : img12l,
                imageMin   : img12m,
                rating     : 9.5,
                years      : '2001',
                genre      : 'Драма, Приключения, Сверхъестественное',
                director   : 'Миядзаки Хаяо',
                studio     : 'Studio Ghibli',
                type       : 'фильм',
                seasons    : '',
                episodes   : '',
                AgeRating  : 'PG-13',
                descr      : `Сюжет данной картины пойдет про маленькую десятилетнюю девочку, 
                              по имени, Тихиро Огино. Её семья переезжает в глубину Японии, 
                              но по пути они теряют свою дорогу и волей случая поворачивают немного раньше, 
                              чем это необходимо. Этого никто не замечает и они заезжают в необычный лес, 
                              выход из которого лежит через длинный туннель. `,
            },
            {
                id: 13,
                title      : 'Ходячий замок',
                imageBcg   : img13b,
                imageLarge : img13l,
                imageMin   : img13m,
                rating     : 9.5,
                years      : '2004',
                genre      : 'Драма, Приключения, Романтика, Фэнтези',
                director   : 'Миядзаки Хаяо',
                studio     : 'Studio Ghibli',
                type       : 'фильм',
                seasons    : '',
                episodes   : '',
                AgeRating  : 'PG-13',
                descr      : `Действия в данной картине начнут свою историю в 19 веке Европы, 
                              когда в мире магия не уступает технологиям, а наоборот, 
                              они вместе стараются развиваться. Сюжет повествует про молодую девушку Софи, 
                              которая потеряла свою красоту и молодость из-за ведьмы. 
                              Тем самым превратилась из красивой восемнадцати летней девочки в дряхлую старушку.`,
            },
            {
                id: 14,
                title      : 'Твоё имя',
                imageBcg   : img14b,
                imageLarge : img14l,
                imageMin   : img14m,
                rating     : 9.5,
                years      : '2016',
                genre      : 'Драма, Романтика, Сверхъестественное, Школа',
                director   : 'Синкай Макото',
                studio     : 'CoMix Wave',
                type       : 'фильм',
                seasons    : '',
                episodes   : '',
                AgeRating  : 'PG-13',
                descr      : `Действие в аниме Твое имя будет происходить в двух городах. 
                              Главными героями является парочка обычных людей, которые даже не подозревают, 
                              что вскоре судьба свяжет их жизни очень крепко. Они никогда не были знакомы, 
                              она – любимая дочь, которая свое свободное время посвящает работе в храме. 
                              Он – надежный друг, успешен и трудолюбив на работе, имеет неплохие задатки талантливого художника.`,
            },
            {
                id: 15,
                title      : 'Банановая рыба',
                imageBcg   : img15b,
                imageLarge : img15l,
                imageMin   : img15m,
                rating     : 9.4,
                years      : '2018',
                genre      : 'Драма, Приключения, Сёдзё, Экшен',
                director   : 'Уцуми Хироко',
                studio     : 'MAPPA',
                type       : 'сериал',
                seasons    : '',
                episodes   : '24',
                AgeRating  : 'NC-17',
                descr      : `События разворачиваются в период Вьетнамского противостояния, 
                              когда обезумевший боец Гриффин Калленрис начинает неожиданно стрелять в своих соратников. 
                              Парня удается успокоить, после чего он произносит фразу «Банановая рыба». 
                              Юноша так и не возвращается к нормальной жизнедеятельности. 
                              Он в сумасшедшем состоянии повисает на шее младшего братишки.`,
            },
            {
                id: 16,
                title      : 'Укрась прощальное утро цветами обещания',
                imageBcg   : img16b,
                imageLarge : img16l,
                imageMin   : img16m,
                rating     : 9.4,
                years      : '2018',
                genre      : 'Драма, Фэнтези',
                director   : 'Окада Мари',
                studio     : 'P.A. Works',
                type       : 'фильм',
                seasons    : '',
                episodes   : '',
                AgeRating  : 'PG-13',
                descr      : `Макия родилась необычной девушкой. Поселение йольфов знаменито тем, что люди, родом оттуда, 
                              не могут постареть, по достижению подросткового возраста они застывают во времени. 
                              Она отделена от всего мира, но однажды правителю одного государства приходит мысль о том, 
                              что его наследник тоже должен быть бессмертен. Происходит набег на племя с целью украсть девушку, 
                              способную дать потомство. `,
            },
        ],
    },
    catalogListVis: true,
};

const catalogListR = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default catalogListR;