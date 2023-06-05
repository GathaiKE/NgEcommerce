import { createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store"
import { User } from "src/app/Interfaces/user"
import * as UserActions from '../Actions/UserActions'


export interface UserInterface{
    users:User[]
    errorMsg:string
}

const initialState:UserInterface={users:[], errorMsg:''}

export const userReducer = createReducer(

initialState,

on(UserActions.getUsersSuccess, (state,action):UserInterface=>{
    return {
        ...state,
        users:action.user,
        errorMsg:''
    }
}),

on(UserActions.getUserError, (state,action):UserInterface=>{
    return {
        ...state,
        users:[],
        errorMsg:action.errorMsg
    }
})


)

const getUsersState = createFeatureSelector<UserInterface>('users')
export const getUsers = createSelector(getUsersState, (state)=>state.users)
export const getUserError = createSelector(getUsersState, (state)=>state.errorMsg)