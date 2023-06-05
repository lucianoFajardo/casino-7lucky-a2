import React from "react";

export function RulesViewCustom() {
    return (
        <div className="grid grid-cols-4 m-5">
            <div className="card w-96 bg-yellow bg-opacity-70 text-primary-content">
                <div className="card-body">
                    <h2 className="card-title p-1 text-white">Montos y Retiros</h2>
                    <p className="">Monto minimo para compra de fichas es de $5.000 pesos , el retiro maximo es de $100.000 pesos diarios por usuario</p>
                    <div className="card-actions justify-end">                    </div>
                </div>
            </div>

            <div className="card w-96 bg-yellow bg-opacity-70 text-primary-content">
                <div className="card-body">
                    <h2 className="card-title p-1 text-white">Valor de Fichas</h2>
                    <p>El valor de la ficha es de $100 pesos cada ficha $100 = 1 ficha</p>
                    <div className="card-actions justify-end">                    </div>
                </div>
            </div>

            <div className="card w-96 bg-yellow bg-opacity-70 text-primary-content">
                <div className="card-body">
                    <h2 className="card-title p-1 text-white">Horarios</h2>
                    <p>Los horarios para la carga de ficha y su retiro son desde las 9:00 de la mañana hasta las 23:00 de la noche.</p>
                    <div className="card-actions justify-end">                    </div>
                </div>
            </div>

            <div className="card w-96 bg-yellow bg-opacity-70 text-primary-content">
                <div className="card-body">
                    <h2 className="card-title p-1 text-white">Pagos</h2>
                    <p >Los pagos de ganancias tienen un tiempo maximo de 30 minutos al igual que las cargas de fichas</p>
                    <div className="card-actions justify-end">                    </div>
                </div>
            </div>

        </div>
    );
}