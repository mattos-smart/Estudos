import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Alert, StyleSheet, Text, View, TextInput, Button, Image, Switch } from 'react-native';
import imgTeste from './assets/img.png'

export default function App() {
  const [usuario, setUsuario] = useState('')
  const [ligado, setLigado] = useState(true)

  function handleSwitch() {
    setLigado(!ligado)
  }

  return (

    <View style={styles.container}>
      <View
        style={[styles.borderPadrao, styles.backgroundColorPadrao, styles.paddingPadrao]}
        onTouchStart={(event) => {
          {/* Array de Styles é útil para receber mais de uma classe de estilização, facilitando a padronizacao do projeto. */ }
          Alert.alert('TOQUE', 'Toque iniciado')
        }}
        onTouchEnd={(evento) => {
          Alert.alert('TOQUE', 'Encerrando o toque')
        }}
      >
        <Text>Teste Toque</Text>
      </View>
      <Text selectable={true}>Texto selecionavel e "Copiavel"</Text>

      <View style={styles.paddingPadrao}>
        <View style={styles.paddingPadrao}>
          <Text>Texto nao</Text>
          <Text>Concatenado</Text>
        </View>

        <Text style={styles.paddingPadrao}> {/* Útil para trazer dados dinamicos */}
          <Text>Texto</Text>
          <Text>Concatenado</Text>
        </Text>
      </View>

      <View style={styles.paddingPadrao}>
        <Text>
          <Text onPress={() => console.log('Pressionado')}>Texto</Text>
          <Text onLongPress={() => console.log('LongPress acionado')}>Concatenado</Text>
        </Text>
      </View>

      <View>
        <TextInput
          style={styles.borderPadrao}
          placeholder='Input'
          keyboardType='number-pad'
          //onChange={(eventoParaCapturar)=>console.log(eventoParaCapturar.nativeEvent.text)} /* Muito interessante para o uso */

          onChange={(text) => setUsuario(text.nativeEvent.text)}
          value={usuario}
        />
      </View>

      <Button
        title='click'
        onPress={() => { Alert.alert('Valor do input', usuario) }}
      />

      <Switch
        value={ligado}
        onValueChange={handleSwitch}
      >
      </Switch>

      <Image
        source={imgTeste}
        style={{ display: ligado ? 'flex' : 'none' }}
      />
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
  },

  paddingPadrao: {
    marginBottom: 20
  }
});
