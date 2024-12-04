import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [status, setStatus] = useState('');

  const calculateBMI = () => {
    console.log("calculateBMI");
    if (weight && height) {
      const heightInMeters = parseFloat(height) / 100;
      const bmiValue = parseFloat(weight) / (heightInMeters ** 2);
      setBmi(bmiValue.toFixed(2));
      determineStatus(bmiValue);
    }
  };

  const determineStatus = (bmiValue) => {
    if (bmiValue < 18.5) {
      setStatus('Underweight');
    } else if (bmiValue >= 18.5 && bmiValue < 25) {
      setStatus('Normal');
    } else if (bmiValue >= 25 && bmiValue < 30) {
      setStatus('Overweight');
    } else {
      setStatus('Obese');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>BMI Calculator</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter weight (kg)"
        keyboardType="numeric"
        value={weight}
        onChangeText={setWeight}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter height (cm)"
        keyboardType="numeric"
        value={height}
        onChangeText={setHeight}
      />
      <Button title="Calculate BMI" onPress={calculateBMI} />
      {bmi && (
        <View style={styles.result}>
          <Text>Your BMI: {bmi}</Text>
          <Text>Status: {status}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  result: {
    marginTop: 20,
    alignItems: 'center',
  },
});
