import {createSlice} from "@reduxjs/toolkit";
const UserSlice=createSlice({
    name:"user",
    initialState:{
       userInfo:null,
       isFetching:false,
       isError:false
    },
    reducers:{
        loginStart:(state)=>{state.isFetching=true;},
        loginSucsess:(state,action)=>{
            state.userInfo=action.payload;
            state.isFetching=false;
            state.isError=false;
        },
        loginError:(state)=>{
            state.isFetching=false;
            state.isError=true
        },logOut:(state)=>{
            state.userInfo=null;
            state.isFetching=false;
            state.isError=false;
        }
    }
});
export const {loginStart,loginSucsess,loginError,logOut}=UserSlice.actions;
export  default UserSlice.reducer