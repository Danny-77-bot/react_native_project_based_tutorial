import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {

  const [showBio, setShowBio] = useState(false);

  return (
    <View style={styles.container}>

      <Text style={styles.name}>Daniel Melaku</Text>
      <Text style={styles.job}>Full Stack Developer</Text>

      <Button 
        title="Toggle Bio"
        onPress={() => setShowBio(!showBio)}
      />

      {showBio && (
        <Text style={styles.bio}>
          I build mobile and web apps using MERN and React Native.
        </Text>
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
  name: {
    fontSize: 26,
    fontWeight: 'bold'
  },
  job: {
    fontSize: 18,
    color: 'gray',
    marginBottom: 10
  },
  bio: {
    marginTop: 10,
    fontSize: 16,
    textAlign: 'center',
    paddingHorizontal: 20
  }
});