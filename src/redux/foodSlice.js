import { createSlice } from "@reduxjs/toolkit";

export const foodSlice = createSlice(
    {
        name:"food",
        initialState:{
          foodName:"a",
        },
        reducers:{
            update:(state,action)=>{
                state.foodName = action.payload.foodName;
            },
        }
    }
);
export const {update} = foodSlice.actions;
export const selectFood = state => state.food.foodName;
export default foodSlice.reducer;