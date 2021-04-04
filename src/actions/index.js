import { axiosWithAuth } from '../utils/axiosWithAuth'


export const FETCHING_CLASSES_START = "FETCHING_CLASSES_START";
export const FETCHING_CLASSES_SUCCESS = "FETCHING_CLASSES_SUCCESS";
export const FETCHING_CLASSES_FAILURE = "FETCHING_CLASSES_FAILURE";
export const TOGGLE_EDITING = "TOGGLE_EDITING";
export const ADD_CLASS = "ADD_CLASS";
export const DELETE_CLASS = "DELETE_CLASS";
export const UPDATE_CLASS = "UPDATE_CLASS";

export const addClass = (classItem) => (dispatch) =>{
    
    axiosWithAuth().post('/classes', classItem)
        .then(res => {
            dispatch({type: ADD_CLASS, payload: res.data})
            console.log(res.data)
        })
        .catch(err => {
            console.log(err)
        });
}

export const deleteClass = (classItem) => (dispatch) =>{
    axiosWithAuth().delete(`/classes/${classItem.id}`)
    .then(res => {
        dispatch({type: DELETE_CLASS, payload: res.data})
        console.log(res.data)
    })
    .catch(err => {
        console.log(err)
    });
}

export const fetchClasses = () => (dispatch) => {
    dispatch({type: FETCHING_CLASSES_START});

    axiosWithAuth().get('/classes')
        .then(res => {
            dispatch({type: FETCHING_CLASSES_SUCCESS, payload: res.data});
            console.log(res.data)
        })
        .catch(err => {
            dispatch({type: FETCHING_CLASSES_FAILURE, payload: err})
        });
}