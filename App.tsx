import { StyleSheet, View} from 'react-native';
import SwipeButton from './src/components/SwipeButton';

export default function App() {
  return (
    <View style={styles.container}>
      <SwipeButton
        buttonText="Insira seu texto"
        onRelease={() => {
          console.log("Insira sua função")
        }
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
