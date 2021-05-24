import React               from 'react'                           ;
import StartSearch         from './StartSearch/StartSearch'       ;
import AdvancedSearch      from './AdvancedSearch/AdvancedSearch' ;
import '../../../style/catalog/search.css'                        ;

const Search = (props) => {
    const [extendSearch, setExtendSearch] = React.useState(false); //toggle advanced search
    return (
        <div className="search">

            <StartSearch 
                extendSearch={extendSearch} 
                setExtendSearch={setExtendSearch}
                search={props.search}
            />

            <AdvancedSearch 
                extendSearch={extendSearch}
                search={props.search}
            />

        </div>
    )
}

export default Search
