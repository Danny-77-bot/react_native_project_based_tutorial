import { Image, StyleSheet, Text, View } from 'react-native';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      
      <Image
        source={{ uri: 'https://i.pravatar.cc/200' }}
        style={styles.image}
      />

      <Text style={styles.name}>Daniel Melaku</Text>
      <Text style={styles.job}>React Native Developer</Text>
      <Text style={styles.bio}>
        I build mobile apps using React Native and MERN stack.
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20
  },

  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20
  },

  name: {
    fontSize: 24,
    fontWeight: 'bold'
  },

  job: {
    fontSize: 18,
    color: 'gray',
    marginVertical: 8
  },

  bio: {
    textAlign: 'center',
    marginTop: 10
  }
});