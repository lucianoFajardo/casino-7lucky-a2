import React from "react"
import { Link } from "react-router-dom";

export function HeaderView() {
    var TitleCasinoName = "VgranCasino";

    return (
        <>
            {/*this part is a nav min screen*/}
            <div className="navbar bg-transparent">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <a className="btn btn-ghost normal-case text-2xl" style={{color: 'white'}}> {TitleCasinoName}</a>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52 bg-gray-dark">
                        <li><a>Juegos</a></li>
                        <li><a>Nosotros</a></li>
                        <li><a>Conocenos</a></li>
                        <li><a>Cantidad</a></li>
                        <li><a>Publicidad</a></li>
                        </ul>
                    </div>

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-2 text-white text-x2">
                        <li className="delay-150"><a>Juegos</a></li>
                        <li><a>Nosotros</a></li>
                        <li><a>Conocenos</a></li>
                        <li><a>Cantidad</a></li>
                        <li><a>Publicidad</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                </div>
            </div>
        </>
    );
}