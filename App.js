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
        logo="logo-google-playstore"
        texto="App"
        cor="#2ecc71"
        logo2="list-outline"
        texto2="Categorias"
        cor2="#8e44ad"
      />
      <Botao
        logo="camera-outline"
        texto="Filmes"
        cor="#95a5a6"
        logo2="book-outline"
        texto2="Livros"
        cor2="#1abc9c"
      />
      <Botao
        logo="musical-notes-outline"
        texto="Músicas"
        cor="#e67e22"
        logo2="game-controller"
        texto2="Jogos"
        cor2="#f1c40f"
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
