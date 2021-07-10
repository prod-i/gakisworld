import React from 'react'
import AnaliticAD from './AdminContent/AnaliticAD'
import ControlAD from './AdminContent/ControlAD'
import NewsAD from './AdminContent/NewsAD'
import SerialsAD from './AdminContent/SerialsAD'
import UsersAD from './AdminContent/UsersAD'

const AdminPanel = (props) => {
    return (
        <div>
            {(() => {
                switch (props.PanelID) {
                    case 'analytics':
                        return (
                            <AnaliticAD />
                        )
                    case 'control':
                        return (
                            <ControlAD 
                                controlVis ={props.controlAD.controlVis}
                                changeVis  ={props.changeVis}
                            />
                        )
                    case 'users':
                        return (
                            <UsersAD usersList={props.usersList} />
                        )
                    case 'serials':
                        return (
                            <SerialsAD catalogList={props.catalogList}/>
                        )
                    case 'addSerials':
                        return (
                            <>addSerials</>
                        )
                    case 'news':
                        return (
                            <NewsAD newsList={props.newsList}/>
                        )
                    case 'addNews':
                        return (
                            <>addNews</>
                        )
                    case 'servers':
                        return (
                            <>servers</>
                        )
                    case 'report':
                        return (
                            <>report</>
                        )
                    default:
                        return (
                            <div>You are a User.</div>

                        )
                }
            })()}
        </div >
    )
}

export default AdminPanel
