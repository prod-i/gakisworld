import   React                           from 'react';
import   CatalogBlock                    from './CatalogCards/CatalogBlock';
import   CatalogLine                     from './CatalogCards/CatalogLine';
import { AppstoreOutlined, MenuOutlined} from '@ant-design/icons';
import '../../../style/catalog/catalogList.css';


const CatalogList = (props) => {
    const [rtlLine, setRtlLine] = React.useState(false);

    const list = props.catalogList.catalogList.list;

    if (!Array.isArray(list) || list.length <= 0) {
        return null
    }

    const rtlSwith = () => {
        return rtlLine ? setRtlLine(false) : setRtlLine(true)
    }

    return (
        <div className="catalog_body">
            <div className="container">

                <div className="catalog_filtres">
                    <div className="title_name">
                        <span className="filters_catalog selector_s">
                            <select>
                                <option>По рейтингу</option>
                                <option>По названию</option>
                                <option>По длительности</option>
                            </select>
                        </span>
                    </div>
                    <div className="rtl tA" onClick={rtlSwith}>
                        {rtlLine ? <AppstoreOutlined /> : <MenuOutlined />}
                    </div>
                </div>

                <div className="catalog__cards">
                    {!rtlLine
                    //  BLOCK
                        ? list.map((card, key) => <CatalogBlock card={card} key={key}/>)
                    //  LINE 
                        : list.map((card, key) => <CatalogLine  card={card} key={key}/>)
                    }
                </div>
            </div>
        </div>
    )
}

export default CatalogList
