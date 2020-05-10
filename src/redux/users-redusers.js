const SET_USERS = 'SET_USERS';

let initialState = {
    users: [
        {id: 1, name: 'Дима'},
        {id: 2, name: 'Катя'},
        {id: 3, name: 'Маша'},
        {id: 4, name: 'Леша'},
        {id: 5, name: 'Лера'},
        {id: 6, name: 'Олег'},
        {id: 7, name: 'Слава'},
        {id: 8, name: 'Саша'},
        {id: 9, name: 'Гера'},
        {id: 10, name: 'Оля'},
        {id: 12, name: 'Ксения'},
        {id: 13, name: 'Женя'},
        {id: 14, name: 'Денис'},
    ]
};

const usersRedusers = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS: {
            let futureObject = action.futureAction;
            return {
                ...state,
                users: [...state.users, futureObject]
            }
        };
        default:
            return state;
    }
}

export const actionUsersCreator = (futureAction) => ({type: SET_USERS, futureAction});

export default usersRedusers;