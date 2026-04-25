import { Link } from 'expo-router';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  const [name, setName] = useState('');
  const [submittedName, setSubmittedName] = useState('');

  const handleSubmit = () => {
    setSubmittedName(name);
  };

  return (
    <View style={styles.container}>

      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
      />

      <Button title="Submit" onPress={handleSubmit} />

      {submittedName !== '' && (
       <view>
         <Text style={styles.text}>
          Welcome, {submittedName}!
        </Text>
        <Link href={"/about"}>GO to about screen </Link>
       </view>
        
      )}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    borderWidth: 1,
    width: '80%',
    padding: 10,
    marginBottom: 15
  },
  text: {
    marginTop: 20,
    fontSize: 20
  }
});