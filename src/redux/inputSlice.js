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
      } else if(!isNaN(prevArray[prevArray.length-2]) && action.payload === '-') {
        state.value = [...state.value, action.payload]
      }
    },
    reset: (state) => {
      state.value = ['0']
      state.result = null
    },
    equal: (state) => {
      const inputArr1 = state.value.map((item,index) => {
        if(!isNaN(item)) {
          if(state.value[index - 1]==='-' && isNaN(state.value[index - 2])) {
            return parseFloat(-item)
          }
          return parseFloat(item)
        } else return item
      })
      const inputArr = inputArr1.filter((item,index) => {
        if(item !== '-' ) {
          return item
        } else if(!isNaN(inputArr1[index-1])) {
          return item
        }
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