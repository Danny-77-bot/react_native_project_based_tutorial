import { Image, StyleSheet, Text, View } from 'react-native';

export default function AboutScreen() {
  return (
    <View style={styles.container}>

      <Image
        source={{ uri: 'https://i.pravatar.cc/150' }}
        style={styles.image}
      />

      <Text style={styles.title}>About This App</Text>

      <Text style={styles.text}>
        This is a simple React Native app built using Expo Router.
      </Text>

      <Text style={styles.text}>
        It demonstrates tabs navigation, profile UI, and basic mobile app structure.
      </Text>

      <Text style={styles.footer}>
        Version 1.0.0
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    justifyContent: 'center',
  },

  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },

  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  text: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 10,
  },

  footer: {
    marginTop: 20,
    color: 'gray',
  },
});