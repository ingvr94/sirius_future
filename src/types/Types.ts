export interface ProfileType {
    name:string,
    icon:string
}

export interface UserType {
    id:number,
    profiles:Array<ProfileType>
    email:string,
    password:string
}

export interface LoginType {
    email:string,
    password:string
}