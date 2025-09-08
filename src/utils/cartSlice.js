import { createSlice } from "@reduxjs/toolkit";


//creating a cart slice inside our redux store.
const cartSlice = createSlice({
    //name of the slice
    name:"cart",

    //initialstate/value of the slice.
    initialState:{
        items:["burger", "Pizza"],
    },

    //reducers to modify/update the slice.
    reducers:{
        addItem: (state,action) => {
            state.items.push(action.payload);
        },
        removeItem: (state) => {
            state.items.pop();
        },
        clearCart: (state) => {
            state.items.length = 0;
        },
    },
});


//so when we use CreateSLice it will return an object in cartSlice

//cartSlice object will look something like this:

/*
    {
        actions:{
            addItem:{},
            removeItem:{},
        },
        reducer:{

        }
    }

    thats why we export them they way were doing below.
*/

export const {addItem, removeItem, clearCart} = cartSlice.actions;

export default cartSlice.reducer;