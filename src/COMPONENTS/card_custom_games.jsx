import React from 'react'
import { CardCustomGames } from '../COMPONENTS/card_view_games';
const contentStyle = {
    height: '450px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};

export function CardCustomCasinoGames() {

    const CardBodyView = CardCustomGames.map(i => (
        <div className="card card-compact w-96 bg-gray-custom shadow-xl hover:opacity-75">
            <figure><img src={i.img} alt="Shoes"/></figure>
            <div className="card-body">
                <h2 className="card-title text-2xl">{i.title}</h2>
                <p className='text-white text-sm'>{i.description}</p>
                <div className="card-actions justify-end">
                    <a href={i.url} className='btn btn-secondary' target='_blank'>{i.descriptionButton}</a>
                </div>
            </div>
        </div>
    ));

    return (
        <div className="p-10 grid lg:grid-cols-4 md:grid-cols-2 md:bg-gray-dark"> 
            {CardBodyView}
        </div>
    );
}