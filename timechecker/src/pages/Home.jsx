import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import Countdown from 'react-countdown';
import moment from "moment";

function Home() {
    const userActions = [
        { id: 1, title: 'Работа', class: 'home__button_work' },
        { id: 2, title: 'Саморазвитие', class: 'home__button_self' },
        { id: 3, title: 'Отдых', class: 'home__button_chill' },
        { id: 4, title: 'Семья', class: 'home__button_family' },
        { id: 5, title: 'Быт', class: 'home__button_household' },
    ];

    // присваиваем переменной хук который возвращает ссылку на dispatch функцию
    const dispatch = useDispatch();

    // храним выбранное действие
    const [selectedAction, setSelectedAction] = useState();

    // Присваиваем переменной извлеченные данные (время) из состояния\хранилища redux
    const storeTime = useSelector(state => state.time)

    // функция принимает время в миллисекундах и диспатчит его в хранилище\состояние redux
    const dispatchTimer = (time) => {
        dispatch({
            type: 'SET_TIMER',
            payload: time,
        });
    };

    // функция передает\изменяет выбранное действие и передает в функцию время до завершения таймера (в миллисекундах)
    const selectAction = (action, time) => {
        setSelectedAction(action);
        dispatchTimer(moment().add(time, "minutes").valueOf());
    };

    // функция рендерит таймер
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
            {selectedAction || storeTime ? (
                <Countdown date={storeTime} renderer={renderer}/>
            ) : (
                <div className="home__actions">
                    {userActions ? (
                        userActions.map((action) => (
                            <button
                                onClick={() => selectAction(action, 15)}
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
