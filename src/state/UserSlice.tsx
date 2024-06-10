import { createSlice } from "@reduxjs/toolkit";
import { UserType } from "../types/Types";
import userData from "../data/users.json"

export interface UserState {
    user:Array<UserType> 
    error:boolean
}

const initialState:UserState={
    user:userData,
    error:false
}

const userSlice=createSlice({
    name:'user',
    initialState,
    reducers:{
       login:(state,action)=> {
        state.user.map((el:UserType)=>{
            if (action.payload.target.email.value === el.email && action.payload.target.password.value === el.password){
                state.error=false
               localStorage.setItem('user',JSON.stringify(el))
            }
            else state.error=true
        })
         
        if (!state.error) {
            location.href='/home'
        }
       },
       logout:()=>{
        localStorage.clear()
        location.href='/register'
       }
        }
    
})
export const {login,logout}=userSlice.actions

export default userSlice.reducer