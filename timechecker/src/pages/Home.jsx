import React, { useState } from 'react';
import { Timer } from '../components';

/*
    После нажатия на действие, блок дейстствий скрывается. 
    Появляется блок с обратным отсчетом времени (интервал пользователь указывает в найстроках)
*/

function Home() {
    const userActions = [
        { id: 1, title: 'Работа', class: 'home__button_work' },
        { id: 2, title: 'Саморазвитие', class: 'home__button_self' },
        { id: 3, title: 'Отдых', class: 'home__button_chill' },
        { id: 4, title: 'Семья', class: 'home__button_family' },
        { id: 5, title: 'Быт', class: 'home__button_household' },
    ];

    const [selectedAction, setSelectedAction] = useState();

    const selectAction = (action) => {
        setSelectedAction(action);
    };

    return (
        <main className="home">
            {selectedAction ? (
                <Timer minutes="15" />
            ) : (
                <div className="home__actions">
                    {userActions ? (
                        userActions.map((action) => (
                            <button
                                onClick={() => selectAction(action)}
                                type="submit"
                                className={`home__button ${action.class}`}
                                key={action.title}>
                                {action.title}
                            </button>
                        ))
                    ) : (
                        <button type="submit" className="home__button">
                            Пусто
                        </button>
                    )}
                </div>
            )}
        </main>
    );
}

export default Home;
