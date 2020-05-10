const ADD_TEXT_MESSAGE = 'ADD_TEXT_MESSAGE';
const MY_MESSAGE_MARKER = 'MY_MESSAGE_MARKER';
const DELETE_MESSAGE = 'DELETE_MESSAGE';
//const UPDATE_INPUT = 'UPDATE_INPUT';

let initialState = {
    windowMessageTwo: [{ message: '' }],
    myMessageMarker: { workingChat: "[Рабочий чат] - ", name: 'Антон: ' },
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
                myMessageMarker: { ...state.myMessageMarker },
            }
        }
        case DELETE_MESSAGE: {
            return {
                ...state, 
                windowMessageTwo: state.windowMessageTwo.filter(m => m.id !== action.newTextMessageTwo)
            }
        }
/*         case UPDATE_INPUT: {
            return {
                ...state,
                newTextMessageTwo: ""
            }
        } */
        default:
            return state;
    }
}

export const workingChatCreator = (newTextMessageTwo) => ({ type: ADD_TEXT_MESSAGE, newTextMessageTwo });
export const deleteMessageCreatorTWo = (newTextMessageTwo) => ({ type: DELETE_MESSAGE, newTextMessageTwo});
//export const updateInputCreator = (newTextMessageTwo) => ({ type: UPDATE_INPUT, newTextMessageTwo });

export default workingChatReducer;