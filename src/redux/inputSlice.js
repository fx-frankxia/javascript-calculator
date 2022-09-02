import { createSlice } from '@reduxjs/toolkit'

export const inputSlice = createSlice({
  name: 'input',
  initialState: {
    value: [0]
  },
  reducers: {
    inputNum: (state, action) => {
      let prevArray = [...state.value];
      let prevNum = prevArray[prevArray.length-1];
      let newNum = prevNum * 10 + Number(action.payload)
      prevArray.pop()
      state.value = [...prevArray, newNum]
    }
  }
})


export const { inputNum } = inputSlice.actions

export default inputSlice.reducer