import { Text, SafeAreaView, StyleSheet } from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';



export default function App() {
return (
<SafeAreaView style={styles.container}>
<Text style={styles.paragraph}>
  Tell the AI what app to make!
</Text>

</SafeAreaView>
);
}

const styles = StyleSheet.create({
container: {
flex: 1,
justifyContent: 'center',
backgroundColor: '#ecf0f1',
padding: 8,
},
paragraph: {
margin: 24,
fontSize: 18,
fontWeight: 'bold',
textAlign: 'center',
},
});
