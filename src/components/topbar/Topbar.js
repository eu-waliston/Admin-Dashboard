import React from "react";
import './Topbar.css';


const Topbar = () => {

    return (
        <div className="top__bar">
            <img src={require("../assets/logo.png")} className="logo__topbar" alt={"logo"} />
            <div id="itens">

                <input type={"text"} placeholder={"  Search for..."} className={"input__side"} />
                <i className="bi bi-search input__inner__icon icons"></i>
                <i className="bi bi-envelope icons"></i>
                <i className="bi bi-chat icons"></i>
                <img src={(require("../assets/pf.png"))} alt="profile" className="profile__photo"/>
                <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">

                    </button>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="/">Profile</a></li>
                        <li><a className="dropdown-item" href="/">Log out</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Topbar;