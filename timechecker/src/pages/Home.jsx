import React, { useState } from 'react';
import Countdown from 'react-countdown';
import store from '../redux/store';
import moment from "moment";
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

    const selectAction = (action, time) => {
        setSelectedAction(action);
        dispatchTimer(moment().add(time, "minutes").valueOf());
    };

    const dispatchTimer = (time) => {
        store.dispatch({
            type: 'SET_TIMER',
            payload: time,
        });
    };

    const renderer = ({ minutes, seconds }) => {
        const formattedMinutes = minutes >= 10 ? minutes : "0" + minutes;
        const formattedSeconds = seconds >= 10 ? seconds : "0" + seconds;
        
        return (
            <span className="home__timer">
                {formattedMinutes}:{formattedSeconds}
            </span>
        );
    };

    return (
        <main className="home">
            {selectedAction || store.getState().time ? (
                <Countdown date={store.getState().time} renderer={renderer}/>
            ) : (
                <div className="home__actions">
                    {userActions ? (
                        userActions.map((action) => (
                            <button
                                onClick={() => selectAction(action, 9)}
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
