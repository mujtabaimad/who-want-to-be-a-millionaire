import { levelType } from "../constants/initialValues";

export enum localStorageKeys {
    levels = "levels",
    questions = "questions",
}

export function initLocalStorage() {
    const localStorage = window.localStorage;
    const levels = localStorage.getItem(localStorageKeys.levels);
    if (levels) {

    } else {

    }

    const questions = localStorage.getItem(localStorageKeys.questions);
    if (questions) {

    } else {
    }

}

export function changeLevels(newLevels: levelType[]) {
    const localStorage = window.localStorage;
    localStorage.setItem(localStorageKeys.levels, JSON.stringify(newLevels));
} 