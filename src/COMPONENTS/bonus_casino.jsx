import React from "react";
import { InformationRuls } from "../COMPONENTS/information";

export function RulesViewCustom() {
    const CardRulesView = InformationRuls.map(i =>
        <div key={i.id} className="flex justify-center hover:opacity-70">
            <div className="card w-80 h-auto bg-red bg-opacity-60 text-primary-content">
                <div className="card-body">
                    <h2 className="card-title p-1">{i.title}</h2>
                    <p className="">{i.description}</p>
                </div>
            </div>
        </div>
    );
    {/**max-w-md grid grid-cols-4 gap-3 p-2 sm:grid-cols-1 sm:gap-2 lg:grid-cols-4 lg:gap-2 md:grid-cols-1 md:bg-blue */ }
    return (
        <div className="bg-gray-dark grid grid-cols-1 p-4 gap-5 mx-auto sm:gap-5 sm:flex-col sm:grid-cols-1 sm:p-5 sm:justify-center md:flex md:flex-col 2xl:flex-row">
            {CardRulesView}
        </div>
    );
}