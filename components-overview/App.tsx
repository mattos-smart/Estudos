import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View 
        style={[styles.borderPadrao, styles.backgroundColorPadrao]} 
        onTouchStart={(event) => { {/* Array de Styles é útil para receber mais de uma classe de estilização, facilitando a padronizacao do projeto. */}
        Alert.alert('TOQUE', 'Toque iniciado')
      }}
        onTouchEnd={(evento) => {
          Alert.alert('TOQUE', 'Encerrando o toque')
        }}
      >
        <Text>Teste Toque</Text>
      </View>
        <Text selectable={true}>Texto selecionavel e "Copiavel"</Text>

      <View>
        <View>
          <Text>Texto nao</Text>
          <Text>Concatenado</Text>
        </View>

        <Text> {/* Útil para trazer dados dinamicos */}   
          <Text>Texto</Text>
          <Text>Concatenado</Text>
        </Text>
      </View>

      <View>
        <Text> 
          <Text onPress={() => console.log('Pressionado')}>Texto</Text>
          <Text onLongPress={() => console.log('LongPress acionado')}>Concatenado</Text>
        </Text>
      </View>

      <StatusBar style="auto" />
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

  backgroundColorPadrao: {
    backgroundColor: 'red',
  },

  borderPadrao: {
    borderColor: "red",
    borderWidth: 1,
    borderRadius: 12,
  }
});
