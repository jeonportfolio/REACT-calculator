import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';


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
            borderWidth: 0.3,
            borderColor:"black",
        }}
    >
        <Text style= {{ color: "white", fontSize:25}}> {text}</Text>
    </TouchableOpacity>
  )
}

  


export default () => {
    const [input, setInput] = useState(0); //처음 입력값 (결과값 화면에 표시되는 숫자)
    const [currentOperator, setcurrentOperator] = useState(null);// 연산자 설정 
    const [result, setResult] = useState(null);// 두번째 입력값 기억  
    const [tempInput, setTempInput] = useState(null);
    const [tempOperator, setTempOperator] = useState(null);

    const onPressNum = (num) => {
        const newInput = Number(`${input}${num}`)
        //num은 숫자이기 때문에 더하면 덧셈이 된다 문자화 시킨다. 하지만 0은 없어져야 하기때문에 다시 숫자화
        setInput(newInput);
    }

    

    return(
    <View style= {{flex: 1, width:250, justifyContent:"center"}}>
            {/*부모 component에서 flex 1로 가득채워줘야 표시가 가능   */}

          <Text>input: {input}</Text>
          <Text>currentOperator: {currentOperator}</Text>
          <Text>result: {result}</Text>
          <Text>tempInput: {tempInput}</Text>
          <Text>tempOperator: {tempOperator}</Text>
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
    <View>
        
            <Button
                type="reset"
                text="AC"
                onPress={() => null }
                flex={3} 
            />
             <Button
                type="operator"
                text="/"
                onPress={() => null}
                flex={1} 
            />
    </View>

      {/* [7 ~ x] */}
      <View style={{ flexDirection: "row", width:"100%"}}>
            {[7,8,9].map((num) => (
                <Button
                type="num"
                text={`${num}`}
                onPress={() => onPressNum(num)}
                flex={1} 
                /> 
            ))}
           
             <Button
                type="operator"
                text="X"
                onPress={() => null}
                flex={1} 
            />
        </View> 


      {/* [4 ~ -] */}
      <View style={{ flexDirection: "row", width:"100%"}}>
           {[4,5,6].map((num) => (
                <Button
                type="num"
                text={`${num}`}
                onPress={() => onPressNum(num)}
                flex={1} 
                /> 
            ))}
            
            
             <Button
                type="operator"
                text="-"
                onPress={() => null}
                flex={1} 
            />
        </View> 


      {/* [1 ~ +] */}
      <View style={{ flexDirection: "row", width:"100%"}}>
            {[1,2,3].map((num) => (
                <Button
                type="num"
                text={`${num}`}
                onPress={() => onPressNum(num)}
                flex={1} 
                /> 
            ))}
            
             <Button
                type="operator"
                text="+"
                onPress={() => null}
                flex={1} 
            />
        </View> 

      {/* [0 ~ =] */}
      <View style={{ flexDirection: "row", width:"100%"}}>
            <Button
                type="num"
                text="0"
                onPress={() => onPressNum(num)}
                flex={3} 
            />
             <Button
                type="operator"
                text="="
                onPress={() => null}
                flex={1} 
            />
          
        </View> 
    </View>
  )
}