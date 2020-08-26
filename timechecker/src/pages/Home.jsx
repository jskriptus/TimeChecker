import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Countdown from 'react-countdown';
import moment from 'moment';

// Таймер не перестает идти даже при переключении между страницами приложения
function Home() {
    // Пользовательские действия
    const userActions = [
        { id: 1, label: 'Работа', value: 3, color: 'rgb(140, 255, 140)' },
        { id: 2, label: 'Саморазвитие', value: 1, color: 'rgb(255, 255, 152)' },
        { id: 3, label: 'Отдых', value: 2, color: 'rgb(134, 237, 255)' },
        { id: 4, label: 'Семья', value: 4, color: 'rgb(100, 102, 255)' },
        { id: 5, label: 'Быт', value: 6, color: 'rgb(255, 132, 239)' },
    ];

    // присваиваем переменной хук который возвращает ссылку на dispatch функцию
    const dispatch = useDispatch();

    // храним выбранное действие
    const [selectedAction, setSelectedAction] = useState();

    // Присваиваем переменной извлеченные данные (время) из состояния\хранилища redux
    const storeTime = useSelector((state) => state.time);

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
        dispatchTimer(moment().add(time, 'minutes').valueOf());
    };

    // функция рендерит таймер
    const renderer = ({ minutes, seconds }) => {
        const formattedMinutes = minutes >= 10 ? minutes : '0' + minutes;
        const formattedSeconds = seconds >= 10 ? seconds : '0' + seconds;

        return (
            <span className="home__timer">
                {formattedMinutes}:{formattedSeconds}
            </span>
        );
    };

    return (
        <main className="home">
            {selectedAction || storeTime ? (
                <Countdown date={storeTime} renderer={renderer} />
            ) : (
                <div className="home__actions">
                    {userActions ? (
                        userActions.map((action) => (
                            <button
                                onClick={() => selectAction(action, 15)}
                                type="submit"
                                className={`home__button`}
                                style={{ backgroundColor: action.color }}
                                key={action.id}>
                                {action.label}
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
