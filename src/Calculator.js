import React from 'react';
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
    return(
    <View style= {{flex: 1, width:250}}>
            {/*부모 component에서 flex 1로 가득채워줘야 표시가 가능   */}
      {/* 결과 */}
      

      {/* [AC ~ /] */}
    <View>
            <Button
                type="reset"
                text="AC"
                onPress={() => null}
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
            <Button
                type="num"
                text="7"
                onPress={() => null}
                flex={1} 
            />
             <Button
                type="num"
                text="8"
                onPress={() => null}
                flex={1} 
            />
              <Button
                type="num"
                text="9"
                onPress={() => null}
                flex={1} 
            />
             <Button
                type="operator"
                text="X"
                onPress={() => null}
                flex={1} 
            />
        </View> 


      {/* [4 ~ -] */}
      <View style={{ flexDirection: "row", width:"100%"}}>
            <Button
                type="num"
                text="4"
                onPress={() => null}
                flex={1} 
            />
             <Button
                type="num"
                text="5"
                onPress={() => null}
                flex={1} 
            />
              <Button
                type="num"
                text="6"
                onPress={() => null}
                flex={1} 
            />
             <Button
                type="operator"
                text="-"
                onPress={() => null}
                flex={1} 
            />
        </View> 


      {/* [1 ~ +] */}
      <View style={{ flexDirection: "row", width:"100%"}}>
            <Button
                type="num"
                text="1"
                onPress={() => null}
                flex={1} 
            />
             <Button
                type="num"
                text="2"
                onPress={() => null}
                flex={1} 
            />
              <Button
                type="num"
                text="3"
                onPress={() => null}
                flex={1} 
            />
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
                onPress={() => null}
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