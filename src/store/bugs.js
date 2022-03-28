import { createSlice } from "@reduxjs/toolkit";

/* Simplify our action functions with Redux-ToolKit,
createAction, createReducer,
 by bulding actions and reducers in same model with slice*/

let lastId = 0;
const slice = createSlice({
  name: "bugs", // name of the state
  initialState: [],
  reducers: {
    //actions: functions () (event => eventHandler)
    bugAdded: (state, action) => {
      state.push({
        id: ++lastId,
        description: action.payload.description,
        resolved: false,
      });
    },

    bugResolved: (state, action) => {
      const index = state.findIndex((bug) => bug.id === action.payload.id);
      state[index].resolved = true;
    },
    bugRemoved: (state, action) => {
      return state.filter((bug) => bug.id !== action.payload.id);
    },
  },
});

/* Selector Function */
export const unresolvedBugsSelector = (state) =>state.entities.bugs.filter(bug => !bug.resolved)
/* destructure actions object */
export const { bugAdded, bugResolved, bugRemoved } = slice.actions;
/* Export slice as default */
export default slice.reducer;
