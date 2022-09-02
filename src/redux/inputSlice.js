import { createSlice } from '@reduxjs/toolkit'

export const inputSlice = createSlice({
  name: 'input',
  initialState: {
    value: ['0']
  },
  reducers: {
    inputNum: (state, action) => {
      let prevArray = [...state.value];
      let prevNumStr = prevArray[prevArray.length-1];
      let newNumStr = prevNumStr + action.payload
      prevArray.pop()
      state.value = [...prevArray, newNumStr]
    },
    inputDot: (state) => {
      let prevArray = [...state.value];
      let prevNumStr = prevArray[prevArray.length-1]
      if(prevNumStr.indexOf('.') == -1) {
        let newNumStr = prevNumStr + '.'
        prevArray.pop()
        state.value = [...prevArray, newNumStr]
      } else {
        state.value = state.value
      }
      

    },
    inputSymbol: (state, action) => {

    }
  }
})


export const { inputNum, inputDot } = inputSlice.actions

export default inputSlice.reducer