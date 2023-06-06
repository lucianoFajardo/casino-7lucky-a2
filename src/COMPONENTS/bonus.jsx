import React from 'react';
import {Space} from 'antd';
export function BonusViewCustom() {

    const cardViewCharacter = [
        {
            id: 0, // Used in JSX as a key
            title: 'Bonus',
            subtitile: 'Esto es una descriptio',
            description: 'spaceflight calculations',
            icon: 'MK3eW3A'
        },
        {
            id: 1, // Used in JSX as a key
            title: 'Premios',
            subtitile: 'mathematician',
            description: 'spaceflight calculations',
            icon: 'MK3eW3A'
        },
        {
            id: 2, // Used in JSX as a key
            title: 'Retiros',
            subtitile: 'mathematician',
            description: 'spaceflight calculations',
            icon: 'MK3eW3A'
        }
    ];

    const CardViewBody = cardViewCharacter.map(cardItems => (
        <Space
        direction='horizontal'
        style={{
            border: '1px solid'
        }}
        >
        <div className="card">
            <div className="card-body" key={cardItems.id}>   
                <h5 className="card-title">{cardItems.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{cardItems.subtitile}</h6>
                <p className="card-text">{cardItems.description}</p>
            </div>
        </div>
        </Space>
        )
    );

    return (
        <div className='grid grid-cols-3 bg-slate-600 gap gap-3 m-5 dark:bg-gray-dark'>
            {CardViewBody}
        </div>
    );

}
