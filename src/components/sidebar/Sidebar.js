import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
    const [isNavExpanded, setIsNavExpanded] = React.useState(false)

    return (
        <div className={isNavExpanded ? 'sidebar' : 'sidebar__ls'}>
            <div className='sidebar__icons'>
                <div>
                    <i class="bi bi-list" id='bi-list' onClick={() => { setIsNavExpanded(!isNavExpanded); }}></i>
                </div>
                <div>
                    <i class="bi bi-bullseye"></i>
                    <h5 className={isNavExpanded ? 'sidebar__text' : 'sidebar__text__invisible'} >dashboard</h5>
                </div>
                <div >
                    <i class="bi bi-star-fill"></i>
                    <h5 className={isNavExpanded ? 'sidebar__text' : 'sidebar__text__invisible'}  >Profile</h5>
                </div>
                <div >
                    <i class="bi bi-heart-fill"></i>
                    <h5 className={isNavExpanded ? 'sidebar__text' : 'sidebar__text__invisible'} >Favorites</h5>
                </div>
                <div >
                    <i class="bi bi-bar-chart-line-fill"></i>
                    <h5 className={isNavExpanded ? 'sidebar__text' : 'sidebar__text__invisible'} >Charts</h5>
                </div>
                <div >
                    <i class="bi bi-geo-alt-fill"></i>
                    <h5 className={isNavExpanded ? 'sidebar__text' : 'sidebar__text__invisible'} >Maps</h5>
                </div>
                <div >
                    <i class="bi bi-send"></i>
                    <h5 className={isNavExpanded ? 'sidebar__text' : 'sidebar__text__invisible'} >Send</h5>
                </div>
                <div >
                    <i class="bi bi-gear-fill"></i>
                    <h5 className={isNavExpanded ? 'sidebar__text' : 'sidebar__text__invisible'} >Config</h5>
                </div>
                <div >
                    <i class="bi bi-shield-lock-fill"></i>
                    <h5 className={isNavExpanded ? 'sidebar__text' : 'sidebar__text__invisible'} >Security</h5>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;
