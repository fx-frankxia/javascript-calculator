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
      if(!isNaN(prevNumStr)){
        if(prevNumStr === '0'){
          prevArray[prevArray.length-1] = action.payload
          state.value = [prevArray]
        } else {
          let newNumStr = prevNumStr + action.payload
          prevArray.pop()
          state.value = [...prevArray, newNumStr]
        }
        
      } else {
        state.value = [...prevArray, action.payload]
      }

    },
    inputDot: (state) => {
      let prevArray = [...state.value];
      let prevNumStr = prevArray[prevArray.length-1]
      if(prevNumStr.indexOf('.') == -1 && !isNaN(prevNumStr)) {
        let newNumStr = prevNumStr + '.'
        prevArray.pop()
        state.value = [...prevArray, newNumStr]
      } else {
        state.value = state.value
      }      
    },
    inputSymbol: (state, action) => {
      let prevArray = [...state.value];
      let prevNumStr = prevArray[prevArray.length-1]
      if(!isNaN(prevNumStr)){
        state.value = [...state.value, action.payload]
      } 

    },
    reset: (state) => {
      state.value = ['0']
    }
  }
})


export const { inputNum, inputDot,inputSymbol,reset } = inputSlice.actions

export default inputSlice.reducer