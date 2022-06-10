import { FlatList, StyleSheet, Text, View } from "react-native";
import Cabecalho from "./src/components/cabecalho";
import Botao from "./src/components/botao";
import Jogos from "./src/components/jogos";
import Dados from './src/dados/dadosJogos'
import DadosCarrosel from './src/dados/dadosCarrosel'
import JogosCarrosel from "./src/components/carrosel";

export default function App() {
  return (
    <View>
      <Cabecalho />
      <Botao
        logo="home"
        texto="Pagina Inicial"
        cor="#A9A9A9"
        logo2="list-outline"
        texto2="Configurações"
        cor2="#A9A9A9"
      />
      <Botao
        logo="camera-outline"
        texto="Serviços Online"
        cor="#FF6347"
        logo2="book-outline"
        texto2="Isenções"
        cor2="#FF6347"
      />
      <Botao
        logo="musical-notes-outline"
        texto="Consultas Grátis"
        cor="#1C1C1C"
        logo2="game-controller"
        texto2="Fale Conosco"
        cor2="#1C1C1C"
      />

      <Text style = {{fontSize: 20, margin: 10, marginTop: 20}}>
          Jogos em Destaque
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

      <Text style = {{fontSize: 20, margin: 10, marginTop: 50}}>
          Proximos Lançamentos!
      </Text>
      <View>
        <FlatList
          horizontal={true}
          data={DadosCarrosel}
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
