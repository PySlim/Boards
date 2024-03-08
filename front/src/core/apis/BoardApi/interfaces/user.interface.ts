export interface UserInterface{
    username: string,
    name: string,
    email: string,
    password: string
}

export interface UserUpdateInterface{
    username?: string,
    name?: string,
    email?: string,
    password?: string
}