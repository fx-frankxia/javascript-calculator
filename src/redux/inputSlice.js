import { createSlice } from '@reduxjs/toolkit'

export const inputSlice = createSlice({
  name: 'input',
  initialState: {
    value: ['0'],
    result: null
  },
  reducers: {
    inputNum: (state, action) => {
      let prevArray = [...state.value];
      let prevNumStr = prevArray[prevArray.length-1];
      if(!isNaN(prevNumStr)){
        if(prevNumStr === '0'){
          if(action.payload !== 0) {
            prevArray[prevArray.length-1] = action.payload
            state.value = [...prevArray]
          }
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
      if(prevNumStr.indexOf('.') === -1 && !isNaN(prevNumStr)) {
        let newNumStr = prevNumStr + '.'
        prevArray.pop()
        state.value = [...prevArray, newNumStr]
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
      state.result = null
    },
    equal: (state) => {
      const inputArr = state.value.map(item => {
        if(!isNaN(item)) {
          return parseFloat(item)
        } else return item
      })
      let tempResult = inputArr[0]
      for(let i=2; i<inputArr.length; i++) {
        if(!isNaN(inputArr[i]) && inputArr[i-1]){
          switch(inputArr[i-1]){
            case '+': tempResult = tempResult + inputArr[i];break;
            case '-': tempResult = tempResult - inputArr[i];break;
            case 'X': tempResult = tempResult * inputArr[i];break;
            case '/': tempResult = tempResult / inputArr[i];break;
            default: break;            
          }
        }
      }
      state.result = tempResult
    }
  }
})


export const { inputNum, inputDot,inputSymbol,reset,equal } = inputSlice.actions

export default inputSlice.reducer