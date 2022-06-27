import {createSlice} from "@reduxjs/toolkit";
const SignupSlice=createSlice({
    name:"newuser",
    initialState:{
       isFetching:false,
       isError:false,
       user:null
    },
    reducers:{
        signupStart:(state)=>{state.isFetching=true;},
        signupSucsess:(state,action)=>{
            state.isFetching=false;
            state.isError=false;
            state.user=action.payload;
        },
        signupError:(state)=>{
            state.isFetching=false;
            state.isError=true
        }
    }
});
export const {signupStart,signupSucsess,signupError}=SignupSlice.actions;
export  default SignupSlice.reducer