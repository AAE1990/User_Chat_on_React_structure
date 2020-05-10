const ADD_TEXT_MESSAGE = 'ADD_TEXT_MESSAGE';
const MY_MESSAGE_MARKER = 'MY_MESSAGE_MARKER';
const DELETE_MESSAGE = 'DELETE_MESSAGE';
//const UPDATE_INPUT = 'UPDATE_INPUT';

let initialState = {
    windowMessage: [{ message: '' }],
    myMessageMarker: { workingChat: "[Флуд чат] - ", name: 'Антон: ' },
};

const floodChatReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TEXT_MESSAGE: {
            let newMessage = action.newTextMessage;
            return {
                ...state,
                windowMessage: [...state.windowMessage, { message: newMessage }]
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
                windowMessage: state.windowMessage.filter(m => m.id !== action.newTextMessage)
            }
        }
/*         case UPDATE_INPUT: {
            return {
                ...state,
                newTextMessage: ""
            }
        } */
        default:
            return state;
    }
}

export const floodChatCreator = (newTextMessage) => ({ type: ADD_TEXT_MESSAGE, newTextMessage });
export const deleteMessageCreator = (newTextMessage) => ({ type: DELETE_MESSAGE, newTextMessage});
//export const updateInputCreator = (newTextMessage) => ({ type: UPDATE_INPUT, newTextMessage });

export default floodChatReducer;