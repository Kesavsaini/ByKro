import {createSlice} from "@reduxjs/toolkit";
const CartSlice=createSlice({
    name:"cart",
    initialState:{
        product:[],
        quantity:0,
        total:0
    },
    reducers:{
        updateCart:(state,action)=>{
            state.quantity+=1;
            state.product.push(action.payload);
            state.total+=(action.payload.quant)*(action.payload.price)
        },
        deleteCart:(state,action)=>{
            state.quantity-=1;
            state.product.splice(action.payload.idx,1);
            state.total-=(action.payload.quant)*(action.payload.price)
        }
    }
});
export const {updateCart,deleteCart} =CartSlice.actions;
export  default CartSlice.reducer