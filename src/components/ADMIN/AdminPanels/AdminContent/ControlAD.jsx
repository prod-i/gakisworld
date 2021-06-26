import React from 'react'
import './../../../../style/admin/controlAD.css';

const ControlAD = (props) => {
    const controlVis = props.controlVis;
    const changeVis = props.changeVis;
    console.log(controlVis);

    return (
        <div className='controlAD'>
            <div className="controlAD_wrap fCG">
                <div className="controlAD_item bE">
                    <div className="controlAD_item_title">Header</div>
                    <div className="controlAD_item_vis">Visible:
                        <span className={controlVis.headerVis ? "controlAD_check tBl" : "controlAD_check tRP"} onClick={() => { changeVis.CONTROLHeaderVis(!controlVis.headerVis) }}>{controlVis.headerVis.toString()}</span>
                    </div>
                </div>
                <div className="controlAD_item bE">
                    <div className="controlAD_item_title">Footer</div>
                    <div className="controlAD_item_vis">Visible:
                        <span className={controlVis.footerVis ? "controlAD_check tBl" : "controlAD_check tRP"} onClick={() => { changeVis.CONTROLFooterVis(!controlVis.footerVis) }}>{controlVis.footerVis.toString()}</span>
                    </div>
                </div>
                <div className="controlAD_item bE">
                    <div className="controlAD_item_title">Main</div>
                    <div className="controlAD_item_vis">Visible:
                        <span className={controlVis.mainVis ? "controlAD_check tBl" : "controlAD_check tRP"} onClick={() => { changeVis.CONTROLMainVis(!controlVis.mainVis) }}>{controlVis.mainVis.toString()}</span>
                    </div>
                </div>
                <div className="controlAD_item bE">
                    <div className="controlAD_item_title">Slider</div>
                    <div className="controlAD_item_vis">Visible: <span className="controlAD_check tBl">true</span></div>
                </div>
                <div className="controlAD_item bE">
                    <div className="controlAD_item_title">Banner</div>
                    <div className="controlAD_item_vis">Visible: <span className="controlAD_check tBl">true</span></div>
                </div>
                <div className="controlAD_item bE">
                    <div className="controlAD_item_title">Continue view</div>
                    <div className="controlAD_item_vis">Visible: <span className="controlAD_check tBl">true</span></div>
                </div>
                <div className="controlAD_item bE">
                    <div className="controlAD_item_title">Preview news</div>
                    <div className="controlAD_item_vis">Visible: <span className="controlAD_check tBl">true</span></div>
                </div>
                <div className="controlAD_item bE">
                    <div className="controlAD_item_title">Popular</div>
                    <div className="controlAD_item_vis">Visible: <span className="controlAD_check tBl">true</span></div>
                </div>
                <div className="controlAD_item bE">
                    <div className="controlAD_item_title">Catalog</div>
                    <div className="controlAD_item_vis">Visible: <span className="controlAD_check tBl">true</span></div>
                </div>
                <div className="controlAD_item bE">
                    <div className="controlAD_item_title">Novelty</div>
                    <div className="controlAD_item_vis">Visible: <span className="controlAD_check tBl">true</span></div>
                </div>
                <div className="controlAD_item bE">
                    <div className="controlAD_item_title">Search</div>
                    <div className="controlAD_item_vis">Visible: <span className="controlAD_check tBl">true</span></div>
                </div>
                <div className="controlAD_item bE">
                    <div className="controlAD_item_title">Catalog List</div>
                    <div className="controlAD_item_vis">Visible: <span className="controlAD_check tBl">true</span></div>
                </div>
                <div className="controlAD_item bE">
                    <div className="controlAD_item_title">News</div>
                    <div className="controlAD_item_vis">Visible: <span className="controlAD_check tBl">true</span></div>
                </div>
                <div className="controlAD_item bE">
                    <div className="controlAD_item_title">News Slider</div>
                    <div className="controlAD_item_vis">Visible: <span className="controlAD_check tBl">true</span></div>
                </div>
                <div className="controlAD_item bE">
                    <div className="controlAD_item_title">News List</div>
                    <div className="controlAD_item_vis">Visible: <span className="controlAD_check tBl">true</span></div>
                </div>
                <div className="controlAD_item bE">
                    <div className="controlAD_item_title">News Sidebar</div>
                    <div className="controlAD_item_vis">Visible: <span className="controlAD_check tBl">true</span></div>
                </div>
                <div className="controlAD_item bE">
                    <div className="controlAD_item_title">Calendar</div>
                    <div className="controlAD_item_vis">Visible: <span className="controlAD_check tBl">true</span></div>
                </div>
                <div className="controlAD_item bE">
                    <div className="controlAD_item_title">Subscribe</div>
                    <div className="controlAD_item_vis">Visible: <span className="controlAD_check tBl">true</span></div>
                </div>
                <div className="controlAD_item bE">
                    <div className="controlAD_item_title">Subscribe cards</div>
                    <div className="controlAD_item_vis">Visible: <span className="controlAD_check tBl">true</span></div>
                </div>
                <div className="controlAD_item bE">
                    <div className="controlAD_item_title">Subscribe banner</div>
                    <div className="controlAD_item_vis">Visible: <span className="controlAD_check tBl">true</span></div>
                </div>
                <div className="controlAD_item bE">
                    <div className="controlAD_item_title">Subscribe form</div>
                    <div className="controlAD_item_vis">Visible: <span className="controlAD_check tBl">true</span></div>
                </div>
                <div className="controlAD_item bE">
                    <div className="controlAD_item_title">Profile</div>
                    <div className="controlAD_item_vis">Visible: <span className="controlAD_check tBl">true</span></div>
                </div>
                <div className="controlAD_item bE">
                    <div className="controlAD_item_title">Profile menu</div>
                    <div className="controlAD_item_vis">Visible: <span className="controlAD_check tBl">true</span></div>
                </div>
                <div className="controlAD_item bE">
                    <div className="controlAD_item_title">Profile info</div>
                    <div className="controlAD_item_vis">Visible: <span className="controlAD_check tBl">true</span></div>
                </div>
                <div className="controlAD_item bE">
                    <div className="controlAD_item_title">Profile content</div>
                    <div className="controlAD_item_vis">Visible: <span className="controlAD_check tBl">true</span></div>
                </div>
                <div className="controlAD_item bE">
                    <div className="controlAD_item_title">Profile continue view</div>
                    <div className="controlAD_item_vis">Visible: <span className="controlAD_check tBl">true</span></div>
                </div>
                <div className="controlAD_item bE">
                    <div className="controlAD_item_title">Profile favorites</div>
                    <div className="controlAD_item_vis">Visible: <span className="controlAD_check tBl">true</span></div>
                </div>
                <div className="controlAD_item bE">
                    <div className="controlAD_item_title">Profile plans</div>
                    <div className="controlAD_item_vis">Visible: <span className="controlAD_check tBl">true</span></div>
                </div>
                <div className="controlAD_item bE">
                    <div className="controlAD_item_title">Profile archive</div>
                    <div className="controlAD_item_vis">Visible: <span className="controlAD_check tBl">true</span></div>
                </div>
                <div className="controlAD_item bE">
                    <div className="controlAD_item_title">Profile subscribe info</div>
                    <div className="controlAD_item_vis">Visible: <span className="controlAD_check tBl">true</span></div>
                </div>
                <div className="controlAD_item bE">
                    <div className="controlAD_item_title">Profile subscribe unplug</div>
                    <div className="controlAD_item_vis">Visible: <span className="controlAD_check tBl">true</span></div>
                </div>
                <div className="controlAD_item bE">
                    <div className="controlAD_item_title">Profile edit</div>
                    <div className="controlAD_item_vis">Visible: <span className="controlAD_check tBl">true</span></div>
                </div>
                <div className="controlAD_item bE">
                    <div className="controlAD_item_title">Profile notifications</div>
                    <div className="controlAD_item_vis">Visible: <span className="controlAD_check tBl">true</span></div>
                </div>
                <div className="controlAD_item bE">
                    <div className="controlAD_item_title">Profile security</div>
                    <div className="controlAD_item_vis">Visible: <span className="controlAD_check tBl">true</span></div>
                </div>
            </div>
        </div>
    )
}

export default ControlAD
