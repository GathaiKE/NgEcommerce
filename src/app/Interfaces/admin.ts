export interface LogInadmin{
    email:string
    password:string
}

export interface adminLogInSuccess{
    username:string
    role:string
    token:string
}

export interface Admin{
    username:string
    email:string
    password:string
}