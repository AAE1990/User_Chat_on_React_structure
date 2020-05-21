const ADD_TEXT_MESSAGE = 'ADD_TEXT_MESSAGE';
const MY_MESSAGE_MARKER = 'MY_MESSAGE_MARKER';
const DELETE_MESSAGE = 'DELETE_MESSAGE';

let initialState = {
    windowMessageTwo: [{ message: '' }],
    myMessageMarkerTwo: { workingChat: "[Рабочий чат] - ", name: 'Антон: ' },
};

const workingChatReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TEXT_MESSAGE: {
            let newMessage = action.newTextMessageTwo;
            return {
                ...state,
                windowMessageTwo: [...state.windowMessageTwo, { message: newMessage }]
            }
        }
        case MY_MESSAGE_MARKER: {
            return {
                ...state,
                myMessageMarkerTwo: { ...state.myMessageMarkerTwo },
            }
        }
        case DELETE_MESSAGE: {
            return {
                ...state, 
                windowMessageTwo: state.windowMessageTwo.filter(m => m.id !== action.newTextMessageTwo)
            }
        }
        default:
            return state;
    }
}

export const workingChatCreator = (newTextMessageTwo) => ({ type: ADD_TEXT_MESSAGE, newTextMessageTwo });
export const deleteMessageCreatorTWo = (newTextMessageTwo) => ({ type: DELETE_MESSAGE, newTextMessageTwo});

export default workingChatReducer;