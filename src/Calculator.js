import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useCalculator } from './use-calculator';


const COLOR = {
    RESULT: '#4e4c51',
    RESET: '#5f5e62',
    OPERATOR: '#f39c29',
    NUM: '#5c5674',
  }

const oneBlockWidth = 80; // 한블럭에 해당하는 가로길이

// Button type: 'reset' | 'operator' | 'num'
const Button = ({ text, onPress, flex, type, isSelected }) => {
  
  const backgroundColor = 
    type === 'reset' 
    ? COLOR.RESET 
    : type === 'operator' 
      ? COLOR.OPERATOR 
      : type === 'num' 
          ? COLOR.NUM   
          : 'transparent';
  return (
    <TouchableOpacity 
        onPress={onPress} 
        style= {{
            flex,
            backgroundColor,
            justifyContent: "center",
            alignItems:"center",
            height:50,
            borderWidth: isSelected ? 1 : 0.2,
            borderColor:"black",
        }}
    >
        <Text style= {{ color: "white", fontSize:25}}> {text}</Text>
    </TouchableOpacity>
  )
}

  


export default () => {

    const  {
      input,
      currentOperator,
      result,
      tempInput,
      tempOperator,
      onPressNum,
      hasInput,
      onPressOperator,
      onPressReset
    } = useCalculator();

    return(
    <View style= {{flex: 1, width:250, justifyContent:"center"}}>
            {/*부모 component에서 flex 1로 가득채워줘야 표시가 가능   */}
      {__DEV__ && (
         <>
          <Text>input: {input}</Text>
          <Text>currentOperator: {currentOperator}</Text>
          <Text>result: {result}</Text>
          <Text>tempInput: {tempInput}</Text>
          <Text>tempOperator: {tempOperator}</Text>
        </>
     )} 
      {/* dev상태에서만 결과값이 보이게 함 */}
      {/* 결과 */}
      <View style= {{ 
        backgroundColor:COLOR.RESULT,
        minHeight:50,
        justifyContent:"center",
        alignItems: "flex-end",
        padding: 5,  
      }}>
            <Text style={{ color: "white", fontSize: 35}}>{input}</Text>
      </View>

      {/* [AC ~ /] */}
    <View style={{ flexDirection: "row", width:"100%"}}>
            <Button
                type="reset"
                text={hasInput ? "C" : "AC"}
                onPress={onPressReset}
                flex={3} 
            />
             <Button
                type="operator"
                text="/"
                onPress={() => onPressOperator("/")}
                flex={1} 
                isSelected={currentOperator === "/"}
            />
    </View>

      {/* [7 ~ x] */}
      <View style={{ flexDirection: "row", width:"100%"}}>
            {[7,8,9].map((num) => (
                <Button
                type="num"
                key={`num-${num}`} //map 함수는 key값을 부여해야한다 위와 같이 하면 고유한 키값 부여 가능 
                text={`${num}`}
                onPress={() => onPressNum(num)}
                flex={1} 
                /> 
            ))}
           
             <Button
                type="operator"
                text="*"
                onPress={() => onPressOperator("*")}
                flex={1}
                isSelected={currentOperator === "*"}
            />
        </View> 


      {/* [4 ~ -] */}
      <View style={{ flexDirection: "row", width:"100%"}}>
           {[4,5,6].map((num) => (
                <Button
                type="num"
                key={`num-${num}`}
                text={`${num}`}
                onPress={() => onPressNum(num)}
                flex={1} 
                /> 
            ))}
            
            
             <Button
                type="operator"
                text="-"
                onPress={() => onPressOperator("-")}
                flex={1}
                isSelected={currentOperator === "-"}
            />
        </View> 


      {/* [1 ~ +] */}
      <View style={{ flexDirection: "row", width:"100%"}}>
            {[1,2,3].map((num) => (
                <Button
                key={`num-${num}`} 
                type="num"
                text={`${num}`}
                onPress={() => onPressNum(num)}
                flex={1} 
                /> 
            ))}
            
             <Button
                type="operator"
                text="+"
                onPress={() => onPressOperator("+")}
                flex={1} 
            />
        </View> 

      {/* [0 ~ =] */}
      <View style={{ flexDirection: "row", width:"100%"}}>
            <Button
                type="num"
                text="0"
                onPress={() => onPressNum(0)}
                
                flex={3} 
            />
             <Button
                type="operator"
                text="="
                onPress={() => onPressOperator("=")}
                flex={1} 
            />
          
        </View> 
    </View>
  )
}