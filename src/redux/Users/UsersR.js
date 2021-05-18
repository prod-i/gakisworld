import img1b from '../../assets/img/serials/1b.jpg'
import img1l from '../../assets/img/serials/1l.jpg'
import img1m from '../../assets/img/serials/1m.jpg'
import img2b from '../../assets/img/serials/2b.jpg'
import img2l from '../../assets/img/serials/2l.jpg'
import img2m from '../../assets/img/serials/2m.jpg'
import img3b from '../../assets/img/serials/3b.jpg'
import img3l from '../../assets/img/serials/3l.jpg'
import img3m from '../../assets/img/serials/3m.jpg'


let initialState = {
    usersList: {
        list: [
            {
                userId        :1,
                fullName      :'Александр Глухов',
                nickname       :'Kaneki Ken',
                tel           :'89090129938', 
                photos:{
                    large     :img1l,
                    bcg       :img1b,
                },
                contacts:{
                    email     :'gakisWorld@gmail.com',
                    vk        :'vk.com/prodi',
                    facebook  :'facebook.com/123123',
                    twitter   :'twitter.com/prodi07118635',
                    instagram :'www.instagram.com/p_r_o_d_i_',
                    telegram  :'89190137708',
                },
                ban           :false,
            },
            {
                userId        :2,
                fullName      :'Артём Перегаров',
                nickname      :'Eren Yeager',
                tel           :'89090129938', 
                photos:{
                    large     :img2l,
                    bcg       :img2b,
                },
                contacts:{
                    email     :'gakisWorld@gmail.com',
                    vk        :'vk.com/artem',
                    facebook  :'facebook.com/123123',
                    twitter   :'twitter.com/dhdrgrds',
                    instagram :'www.instagram.com/rdghdfg',
                    telegram  :'89190137708',
                },
                ban           :false,
            },
            {
                userId        :3,
                fullName      :'Анна Когай',
                nickname      :'Hatake',
                tel           :'89090129938', 
                photos:{
                    large     :img3l,
                    bcg       :img3b,
                },
                contacts:{
                    email     :'gakisWorld@gmail.com',
                    vk        :'vk.com/anna',
                    facebook  :'facebook.com/wadwadwa',
                    twitter   :'twitter.com/wdawda',
                    instagram :'www.instagram.com/swsswss',
                    telegram  :'89190137708',
                },
                ban           :'false',
            },
        ],
    },
    UsersListVis: true,
};

const UsersR = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default UsersR;