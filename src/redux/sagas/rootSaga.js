import { takeLatest, takeEvery } from "@redux-saga/core/effects";
import { handleGetUser } from "./handler/user";
import {GET_USER} from "../ducks/user"

export function* watcherSaga() {
    yield takeLatest(GET_USER, handleGetUser)
}