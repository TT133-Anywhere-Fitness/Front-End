import { FETCHING_CLASSES_START, FETCHING_CLASSES_SUCCESS, FETCHING_CLASSES_FAILURE, TOGGLE_EDITING, ADD_CLASS, DELETE_CLASS, UPDATE_CLASS } from "../actions/index"

const initialState = {
    classes: [{
        id:'',
        name: '', 
        type:'',
        date: '',
        duration: '',
        intensity: '',
        location: '',
        numberOfRegisteredAttendees: '',
        maxClassSize: ''
    }],
    loadingClasses: false,
    errorClasses: ""
}

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case(FETCHING_CLASSES_START):
            return ({...state, loadingClasses: true});
        case(FETCHING_CLASSES_SUCCESS):
            return ({...state, loadingClasses: false, classes: action.payload});
        case(FETCHING_CLASSES_FAILURE):
            return ({...state, loadingClasses: false, errorClasses: action.payload});
        case(ADD_CLASS):
            return ({...state, classes: action.payload});
        case(DELETE_CLASS):
            return ({
                ...state, 
                classes : state.classes.filter((item) => item.id !== action.payload.id)
            });
        default:
            return state;
    }
}