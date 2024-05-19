import { useState } from "react";

export const useCalculator = () => {
    const [input, setInput] = useState(0); //처음 입력값 (결과값 화면에 표시되는 숫자)
    const [currentOperator, setCurrentOperator] = useState(null);// 연산자 설정 
    const [result, setResult] = useState(null);// 두번째 입력값 기억  
    const [tempInput, setTempInput] = useState(null);
    const [tempOperator, setTempOperator] = useState(null);
    const [isClickedOperator , setIsClickedOperator] = useState(false);
    const [isClickedEqual, setIsClickedEqual] = useState(false);

    // const hasInput = input ? true : false;
    const hasInput = !!input;

    const onPressNum = (num) => {
      if (currentOperator && isClickedOperator){
          setResult(input);
          setInput(num);
          setIsClickedOperator(false);
      }  else { 
          const newInput = Number(`${input}${num}`)
          //num은 숫자이기 때문에 더하면 덧셈이 된다 문자화 시킨다. 하지만 0은 없어져야 하기때문에 다시 숫자화
          setInput(newInput);
      }
    }

    const onPressOperator = (operator) => {
        if(operator !== "="){
          setCurrentOperator(operator);
           setIsClickedOperator(true); 
           setIsClickedEqual(false);  
        }else {
          let finalResult = result;
            const finalInput = isClickedEqual ? tempInput : input ;
            const finalOperator = isClickedEqual ? tempOperator : currentOperator;
           switch (finalOperator) {
              case'+':
                finalResult = result + finalInput;
                break; 
              case'-':
                finalResult = result - finalInput;
                 break; 
              case'*':
                 finalResult = result * finalInput;
                 break;
              case'/':
                 finalResult = result / finalInput;
                 break
              default:
                break;   
           }
           setResult(finalResult);
           setInput(finalResult);
           setIsClickedEqual(true);
           setTempInput(finalOperator);
           setCurrentOperator(null);

        }//operator에서 = 은 다르게 해야한다. 
    }

    const onPressReset = () => {
        if(hasInput) {
            setInput(0);
        } else {
         setInput(0);
         setCurrentOperator(null);
         setResult(null);
         setTempInput(null);
         setTempOperator(null);
         }
   }

   return {
    input,
    currentOperator,
    result,
    tempInput,
    tempOperator,
    hasInput,
    onPressNum,
    onPressOperator,
    onPressReset
        
   }
};