import { createAction, props } from "@ngrx/store";
import { User } from "src/app/Interfaces/user";



export const getUsers = createAction('GetUsers')
export const getUsersSuccess= createAction('GetUsers',props<{user:User[]}>())
export const getUserError = createAction('GetUser',props<{errorMsg:string}>())