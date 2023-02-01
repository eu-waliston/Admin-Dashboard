import React from "react";
import './Topbar.css';

const Topbar = () => {
    return (
        <div className="top__bar">
            <input type={"text"} placeholder={"Search for..."}/>
            <i class="bi bi-search input__inner__icon"></i>
            <i class="bi bi-envelope"></i>
            <i class="bi bi-chat"></i>
            <i class="bi bi-person-circle"></i>
            <i class="bi bi-caret-down-fill"></i>
        </div>
    )
}

export default Topbar;