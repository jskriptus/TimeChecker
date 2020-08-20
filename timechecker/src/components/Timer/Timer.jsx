// import React, { useState, useEffect } from 'react';
// import './timer.css';

// function Timer({ minutes = 0, seconds = 0 }) {
//     // Храним состояние закончен отсчет или нет
//     const [over, setOver] = useState(false);
//     // Храним значения таймера
//     const [time, setTime] = useState({
//         minutes: parseInt(minutes, 10),
//         seconds: parseInt(seconds, 10),
//     });

//     // Функция изменяет значения таймера
//     const tick = () => {
//         // Прекратить работу если стутус - закончено
//         if (over) return;

//         // Время вышло, если минуты и секуны достигли 0
//         if (time.minutes === 0 && time.seconds === 0) {
//             setOver(true);
//         } else if (time.seconds === 0) {
//             // Уменьшаем минуты и обновляем секунды, если секунды достигли 0
//             setTime({
//                 minutes: time.minutes - 1,
//                 seconds: 59,
//             });
//         } else {
//             // Уменьшаем секунды
//             setTime({
//                 minutes: time.minutes,
//                 seconds: time.seconds - 1,
//             });
//         }
//     };

//     // Функция сбрасывает состояния минут, секунд и  в исходное
//     const reset = () => {
//         setTime({
//             minutes: parseInt(minutes),
//             seconds: parseInt(seconds),
//         });
//         setOver(false);
//     };

//     useEffect(() => {
//         // функция таймера (setInterval), которая будет изменять состояние каждую секунду
//         let timerID = setInterval(() => tick(), 1000);

//         // Очищаем таймер при завершении рендера компонента
//         return () => clearInterval(timerID);
//     });

//     return (
//         <div>
//             <p className="timer">{`${time.minutes.toString().padStart(2, '0')}:${time.seconds
//                 .toString()
//                 .padStart(2, '0')}`}</p>
//             <div>{over ? "Time's up!" : ''}</div>
//             {/*
//             <button onClick={() => reset()}>Restart</button>
//             */}
//         </div>
//     );
// }

// export default Timer;
