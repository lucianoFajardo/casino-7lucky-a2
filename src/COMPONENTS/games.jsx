import React from "react";
import img1 from "../IMG/imagen2juego.jpg";
import img2 from "../IMG/romanlegend.jpg";
import img3 from "../IMG/tile_large.jpg";
import img4 from "../IMG/goldenforge.jpg";

export function GamesViewCustom() {
    const games = ["juegos de zeus"];

    return (
        <div className="grid grid-cols-4">
            <div className="m-10">
                <div className="card card-compact bg-base-500 shadow-x1 w-100">
                    <figure><img src={img1} alt="Juego de azar" /></figure>
                    <div className="card-body bg-slate-500">
                        <h2 className="card-title">Juega Arabian Secret</h2>
                        <p>Crees ser capaz de vencer al genio y ganarle todo su oro.</p>
                        <div className="card-actions justify-end">
                        <a href="https://demo.rubyplay.com/launcher?gamename=rp_71&mode=offline" className='btn btn-secondary' target='_blank'>Jugar</a>
                        </div>  
                    </div>
                </div>
            </div>


            <div className="m-10">
                <div className="card card-compact bg-base-500 shadow-x1 w-100 hover:opacity-90">
                    <figure><img src={img2} alt="Juego de azar" /></figure>
                    <div className="card-body bg-slate-500">
                        <h2 className="card-title">Juega Roman Leyend</h2>
                        <p>Gana al emperados y conviertete en el mejor guerrero.</p>
                        <div className="card-actions justify-end">
                            <a href="https://demo.rubyplay.com/launcher?gamename=rp_67&mode=offline" className='btn btn-secondary' target='_blank'>Jugar</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="m-10">
                <div className="card card-compact bg-base-500 shadow-x1 w-95">
                    <figure><img src={img3} alt="Juego de azar" /></figure>
                    <div className="card-body bg-slate-500">
                        <h2 className="card-title">Juega Tiki Blaze</h2>
                        <p>Adentrate en la junga y gana a la temible bestia.</p>
                        <div className="card-actions justify-end">
                        <a href="https://demo.rubyplay.com/launcher?gamename=rp_78&mode=offline" className='btn btn-secondary' target='_blank'>Jugar</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="m-10">
                <div className="card card-compact bg-base-500 shadow-x1 w-100">
                    <figure><img src={img4} alt="Juego de azar" /></figure>
                    <div className="card-body bg-slate-500">
                        <h2 className="card-title">Juega Golden Forge</h2>
                        <p>Compite con los dioses por ser el mejor.</p>
                        <div className="card-actions justify-end">
                        <a href="https://demo.rubyplay.com/launcher?gamename=rp_70&mode=offline" className='btn btn-secondary' target='_blank'>Jugar</a>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    );
}