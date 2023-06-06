import React from "react";
import { CardGamesFree } from "../COMPONENTS/card_view_games";

export function GamesViewCustom() {

    const FreeGamesView = CardGamesFree.map(i =>
    <div className="flex bg-purple">
        <div key={i.id}  className="m-10">
            <div className="card card-compact bg-base-500 shadow-x1 w-100">
                <figure><img src={i.img} alt="Juego de azar" /></figure>
                <div className="card-body bg-slate-500">
                    <h2 className="card-title">{i.title}</h2>
                    <p>{i.description}</p>
                    <div className="card-actions justify-end">
                        <a href={i.url} className='btn btn-secondary' target='_blank'>{i.descriptionButton}</a>
                    </div>
                </div>
            </div>
        </div>
    </div>);

    return (
        <div className="bg-gray-dark grid grid-cols-1 p-4 gap-5 mx-auto sm:gap-5 sm:flex-col sm:grid-cols-1 sm:p-5 sm:justify-center md:flex md:flex-col 2xl:flex-row">
            {FreeGamesView}
        </div>
    );
}