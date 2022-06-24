import { FlatList, StyleSheet, Text, View } from "react-native";
import Cabecalho from "./src/components/cabecalho";
import Botao from "./src/components/botao";
import Jogos from "./src/components/jogos";
import Dados from './src/dados/dadosOfertas'
import dadosCarrosel_Sofa from './src/dados/dadosCarrosel_Sofa'
import dadosCarrosel_Poltrona from './src/dados/dadosCarrosel_Poltrona'
import JogosCarrosel from "./src/components/carrosel";

export default function App() {
  return (
    <View>
      <Cabecalho />
      <Botao
        logo="home"
        texto="Pagina Inicial"
        cor="#00CED1"
        logo2="cart"
        texto2="Carrinho"
        cor2="#00CED1"
      />
      <Botao
        logo="albums-outline"
        texto="Comodos"
        cor="#A9A9A9"
        logo2="add-sharp"
        texto2="Móveis"
        cor2="#A9A9A9"
      />
      <Botao
        logo="car"
        texto="Entrega"
        cor="#D3D3D3"
        logo2="ios-logo-dropbox"
        texto2="Loja Fisica"
        cor2="#D3D3D3"
      />

      <Text style = {{fontSize: 20, margin: 10, marginTop: 20, textAlign:"center"}}>
          Ofertas do Dia
      </Text>
      <View>
        <FlatList
          horizontal={true}
          data={Dados}
          keyExtractor={(item) => item.id}
          renderItem = {({ item }) => (
            <Jogos
              titulo={item.nome}
              imagem={item.imagem}
              valor={item.valor}
            />
          )}
        />
      </View>

      <Text style = {{fontSize: 20, margin: 10, marginTop: 50, textAlign:"center"}}>
          Sofás
      </Text>
      <View>
        <FlatList
          horizontal={true}
          data={dadosCarrosel_Sofa}
          keyExtractor={(item) => item.id}
          renderItem = {({ item }) => (
            <JogosCarrosel
              titulo={item.nome}
              imagem={item.imagem}
              data={item.data}
            />
          )}
        />
      </View>

      <Text style = {{fontSize: 20, margin: 10, marginTop: 50, textAlign:"center"}}>
          Poltronas
      </Text>
      <View>
        <FlatList
          horizontal={true}
          data={dadosCarrosel_Poltrona}
          keyExtractor={(item) => item.id}
          renderItem = {({ item }) => (
            <JogosCarrosel
              titulo={item.nome}
              imagem={item.imagem}
              data={item.data}
            />
          )}
        />
      </View>
    </View>
  );
}
