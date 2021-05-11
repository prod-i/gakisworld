import React from 'react'

const AdminPanelContent = (props) => {
    return (
        <div>
            {(() => {
                switch (props.PanelID) {
                    case 'analytics':
                        return (
                            <>analytics</>
                        )
                    case 'users':
                        return (
                            <>users</>
                        )
                    case 'serials':
                        return (
                            <>serials</>
                        )
                    case 'news':
                        return (
                            <>news</>
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

export default AdminPanelContent
