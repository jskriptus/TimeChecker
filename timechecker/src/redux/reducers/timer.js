// Начальное состояние
export const initialState = {
    time: 0, // время по умолчанию
    timerOn: false, // активность таймера по умолчанию
};

// функция редюсер
export const timer = (state = initialState, action) => {
    if (action.type === 'SET_TIMER') {
        return {
            ...state,
            time: action.payload,
            timerOn: true,
        };
    }
    return state;
}
