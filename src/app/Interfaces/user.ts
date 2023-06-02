export interface User{
    username:string
    email:string
    password:string
}

export interface RegisterSuccess{
    message:string
}

export interface LogInUser{
    email:string
    password:string
}

export interface LogInSuccess{
    username:string
    role:string
    token:string
}