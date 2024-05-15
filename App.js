import { useState } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import Calculator from './src/Calculator';

export default function App() {
  const [input, setInput] = useState(0); //처음 입력값 (결과값 화면에 표시되는 숫자)
  const [currentOperator, setcurrentOperator] = useState(null);// 연산자 설정 
  const [result, setResult] = useState(null);// 두번째 입력값 기억  
  const [tempInput, setTempInput] = useState(null);
  const [tempOperator, setTempOperator] = useState(null);
  
  return (
    <SafeAreaView style={styles.container}>
      <Calculator/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:50,
  },
});
