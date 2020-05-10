const SET_PROFILE = 'SET_PROFILE';
const STATUS = 'STATUS';
const STATUS_TEXT = 'STATUS_TEXT';

let initialState = {
    personalData: [
        {
            id: '1', name: 'Антон', surname: 'Ахмадеев', position: 'Frontend-developer',
            email: 'loonyp2010@gmail.com', telephon: '+79193639610'
        }
    ],
    statusShow: { status: 'online'},
    statusText: "Status Text"
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PROFILE: {
            return {
                ...state,
                personalData: [...state.personalData],
            }
        }
        case STATUS: {
            return {
                ...state,
                statusShow: {...state.statusShow}
            }
        }
        case STATUS_TEXT: {
            return {
                ...state,
                statusText: action.statusText
            }
        }
        default:
            return state;
    }
}

export const showProfile = (personalData) => ({type: SET_PROFILE, personalData})
export const showStatus = (status) => ({type: STATUS, status})
export const setStatusText = (statusText) => ({ type: STATUS_TEXT, statusText})



export default profileReducer;