import axios from "axios";

//Redux types
import { GET_ACHIEVEMENT, GET_SPECIFIC_ACHIEVEMENT, ADD_ACHIEVEMENT, DELETE_ACHIEVEMENT, UPDATE_ACHIEVEMENT } from "./achievements.type";

import { API_URL } from "../../../key";

export const getAchievement = () => async (dispatch) => {
    try {
        const achievementsList = axios({
            method: "GET",
            url: `${API_URL}/achievements/`
        }).then((response) => {
            return response;
        });
        return dispatch({ type: GET_ACHIEVEMENT, payload: (await achievementsList).data });
    } catch (error) {
        return dispatch({ type: "ERROR", payload: error });
    }
}
export const getSpecificAchievement = (_id) => async (dispatch) => {
    try {
        const specificAchievementsList = axios({
            method: "GET",
            url: `${API_URL}/achievements/get/${_id}`
        }).then((response) => {
            return response;
        });
        console.log(specificAchievementsList);
        return dispatch({ type: GET_SPECIFIC_ACHIEVEMENT, payload: (await specificAchievementsList).data });
    } catch (error) {
        return dispatch({ type: "ERROR", payload: error });
    }
}

export const addAchievement = (achievememtData) => async (dispatch) => {
    try {
        const achievememt = axios({
            method: "POST",
            url: `${API_URL}/achievements/add-achievementS`,
            data: {achievememtData},
        }).then((response) => {
            return response;
        });
        return dispatch({ type: ADD_ACHIEVEMENT, payload:  (await achievememt).data});
    } catch (error) {
        return dispatch({ type: "ERROR", payload: error });
    }
}
export const updateAchievementData = (achievememtData) => async (dispatch) => {
    try {        
        const achievememt = axios({
            method: "PUT",
            url: `${API_URL}/achievements/update-achievement`,
            data: {achievememtData},
        }).then((response) => {
            return response;
        });
        console.log(achievememt);
        return dispatch({ type: UPDATE_ACHIEVEMENT, payload:  (await achievememt).data});
    } catch (error) {
        return dispatch({ type: "ERROR", payload: error });
    }
}
export const deleteAchievement = (_id) => async (dispatch) => {
    try {
        const deleteAch = axios({
            method: "DELETE",
            url: `${API_URL}/achievements/delete/${_id}`,
        }).then((response) => {
            return response;
        });
        return dispatch({ type: DELETE_ACHIEVEMENT, payload: (await deleteAch).data});
    } catch (error) {
        return dispatch({ type: "ERROR", payload: error });
    }
}