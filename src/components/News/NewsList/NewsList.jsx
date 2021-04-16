import React      from 'react'
import { Select } from 'antd';
import { Modal  } from 'antd';
import { Redirect } from 'react-router';
const  { Option } = Select;

const NewsList = (props) => {
    const [visible, setVisible] = React.useState(false);
    const [title  , setTitle  ] = React.useState('title');
    const [img    , setImg    ] = React.useState('img');
    const [text   , setDescr  ] = React.useState('Text');
    const newsList = props.newsList.newsList;
    const handleCancel = () => setVisible(false)

    const showModal = (title, text, img) => {
          setVisible (true );
          setTitle   (title);
          setDescr   (text );
          setImg     (img  );
    };

    return (
        <div className="news_list">
            <div className="news_list_header">
                <div className="news_filtres">
                    <Select placeholder='Фильтр' size='large' bordered={false} className={'news_select'} allowClear>
                        <Option className={'news_select_options fCG'} bordered={false} value={1}>1</Option>
                        <Option className={'news_select_options fCG'} bordered={false} value={2}>2</Option>
                        <Option className={'news_select_options fCG'} bordered={false} value={3}>3</Option>
                    </Select>
                </div>
                <div className="news_search">123</div>
            </div>
            <div className="news_list_body">
                {newsList.list.map((card, key) => {
                    return (
                        <div className="news_card_line bcgB" key={key}>
                            <div className="news_card_left">
                                <img src={card.imgM} alt="" className="news_card_img" onClick={() => showModal(card.title, card.text, card.imgM)} />
                            </div>
                            <div className="news_card_right">
                                <div className="news_card_head">
                                    <div className="news_card_title fCG" onClick={() => showModal(card.title, card.text, card.imgM)}>{card.title}</div>
                                </div>
                                <div className="news_card_descr">{card.descr}</div>
                                <div className="news_card_date tD">{card.author} {card.date}</div>
                            </div>
                        </div>
                    );
                })}
                <Modal
                    width    = '60%'
                    title    = {false}
                    footer   = {false}
                    visible  = {visible}
                    onCancel = {handleCancel}
                    bodyStyle= {{ background: 'rgb(33, 37, 41)', margin:'-40px 0'}}
                >
                    <div className="containe">                        
                    <div className="news_card_titles fCG tW">{title}</div>
                    <img src={img} alt="" className="news_card_img_page" />
                    <p className='fCG tW aa'>{text}</p>
                    <img src={img} alt="" className="news_card_img_page" />
                    </div>
                </Modal>
            </div>
        </div>
    )
}

export default NewsList
