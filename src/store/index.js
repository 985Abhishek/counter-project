
import {configureStore, createSlice} from "@reduxjs/toolkit"


const counterSlice = createSlice({
  name: "counter",
  initialState:{counterVal:0},
  reducers :{
    increment:(state, action) =>{
      state.counterVal++;
    },
    decrement:(state, action) =>{
      state.counterVal--;
    },
    add:(state, action) =>{
      state.counterVal+=Number(action.payload.num);
      //or when you take value from useRef rather then createing num obj
      //state.counterVal+=Number(action.payload.);
    },
    subtract:(state, action) =>{
      state.counterVal-=Number(action.payload.num)
    }
  }
});

// const counterReducer = (store = INITIAL_VALUE, action) => {
//   if (action.type === "INCREMENT") {
//     return { counter: store.counter + 1 };
//   } else if (action.type === "DECREMENT") {
//     return { counter: store.counter - 1 };
//   } else if (action.type === "Add") {
//     return { counter: store.counter + Number(action.payload.num) };
//   }
//   else if (action.type === "Subtract") {
//     return { counter: store.counter - Number(action.payload.num) };
//   }
//   return store;
// };

const counterStore = configureStore({reducer:{
  counter: counterSlice.reducer
}});


export const counterAction = counterSlice.actions;

export default counterStore;


// echo "# counter-project" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/985Abhishek/counter-project.git
// git push -u origin main