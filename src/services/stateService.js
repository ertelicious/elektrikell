import { createAction, createReducer, configureStore, createSlice } from '@reduxjs/toolkit';
import { DEFAULT_ACTIVE_BUTTON } from '../Head/constants'; 
import { getDefaultFrom, getDefaultUntil } from '../utils/dates';


const initialState = {
    // изначальное состояние
    activePrice: DEFAULT_ACTIVE_BUTTON, 
    activeHour: 1,
    showSidebar: false,
    errorMessage: null,
    bestUntil: 0,
    // isLoading: true,
}


// вторая константа для слайсера
const initialDateState = {
    from: getDefaultFrom(),
    until: getDefaultUntil(),
}

// в редаксе функции, которые изменяют состояние называются action
export const setActivePrice = createAction('setActivePrice');
export const setActiveHour = createAction('setActiveHour');
export const setShowSidebar = createAction('setShowSidebar');
export const setErrorMessage = createAction('setErrorMessage');
export const setBestUntil = createAction('setBestUntil');
// export const setIsLoading = createAction('setIsLoading');


//вспомогательная функция редьюсер которая теперь выстраивает логику того, объединяет. объясняет реакту что изнач состояние и функция вместе работают
//в крейтредусер передаем две вещи - знач состояние наш объект, вторая - конфигурация то есть функцию стрелочную которая строит нам эту логику
//получаем билдер получаем конфигруацию и нам нужно его и вернуть

//payload - новое значение, старое в state будет 

// состояния редакса всегда ОДНО! когда ему нужно поменять состояние, он берет нынешнее, копируют объект, в этот объект вставляет новое значени и меняет все абсолютно. и используется ререндерится когда мы в useSelector используем

// main eto reducer

const main = createReducer(initialState, (builder) => {
    builder.addCase(setActivePrice, (state, action) => {
        state.activePrice = action.payload;
    })
    .addCase(setActiveHour, (state, action) => {
        state.activeHour = action.payload;
    })
    .addCase(setShowSidebar, (state, action) => {
        state.showSidebar = action.payload;
    })
    .addCase(setErrorMessage, (state, action) => {
        state.errorMessage = action.payload;
    })
    .addCase(setBestUntil, (state, action) => {
        state.bestUntil = action.payload;
    });
    // .addCase(setIsLoading, (state, action) => {
        // state.isLoading = action.payload;
    // });
});

// по сути мы сами объясняем редусеру, что нужно поменять состояние при этом экшене
// можно написать любую логику в редусер дополнительно

//в конце все оборачивается в storage. по сути самый главный объект редакса, где все хранится.туда передаем редусер. для этого нам нужна еще одна функиця configureStore

const dateSlice = createSlice({
    name: "date",
    initialState: initialDateState,
    reducers: {
        setFrom: (state, action) => {
            state.from = action.payload;
        },
        setUntil: (state, action) => {
        state.until = action.payload;
        },
    },
});

export const { setFrom, setUntil } = dateSlice.actions;

//соаздем разные состояния под разными именами, группируем экшены и состояния
export const store = configureStore({
    reducer: { main, date: dateSlice.reducer },
})