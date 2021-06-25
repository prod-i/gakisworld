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
                                mainVis={props.main.mainVis} 
                                toggleIsMainVis={props.toggleIsMainVis}
                            />
                        )
                    case 'users':
                        return (
                            <UsersAD usersList={props.usersList} />
                        )
                    case 'serials':
                        return (
                            <SerialsAD />
                        )
                    case 'addSerials':
                        return (
                            <>addSerials</>
                        )
                    case 'news':
                        return (
                            <NewsAD />
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
