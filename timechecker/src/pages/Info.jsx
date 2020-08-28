import React from 'react';
import { PieChart, SortStat } from '../components';

// Пользовательские действия
const userActions = [
    { id: 'Работа', label: 'Работа', value: 3, color: 'rgb(140, 255, 140)' },
    { id: 'Саморазвитие', label: 'Саморазвитие', value: 1, color: 'rgb(255, 255, 152)' },
    { id: 'Отдых', label: 'Отдых', value: 2, color: 'rgb(134, 237, 255)' },
    { id: 'Семья', label: 'Семья', value: 4, color: 'rgb(100, 102, 255)' },
    { id: 'Быт', label: 'Быт', value: 6, color: 'rgb(255, 132, 239)' },
];

function Info() {
    return (
        <div className="info">
            <div className="info__sort">
                <SortStat className="info__sort__actions" />
            </div>
            <div className="info__chart">
                <PieChart className="info__chart__pie" data={userActions} />
            </div>
        </div>
    );
}

export default Info;
