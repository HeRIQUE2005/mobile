import { StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import RotasIndex from './src/Rotas/index'
import AutProvider from './src/components/Context/Contexts'
import QRCode from 'react-native-qrcode-svg'
import { useState } from 'react'
export default function App() {

    const [qrValor, setQrValor] = useState('')
  const [textoEntrada, setTextoEntrada] = useState('')


  return (



    <NavigationContainer>
      <AutProvider>
        async function criarQrCode() {
          setQrValor(textoEntrada)
        }
          <QRCode
          value={qrValor}
          size={200}
          color='#000000'
          backgroundColor='#FFFFFF'
          />
        <StatusBar backgroundColor='#000000' barStyle='light-content' translucent={false} />
        <RotasIndex />
      </AutProvider>
    </NavigationContainer>
  )
}  