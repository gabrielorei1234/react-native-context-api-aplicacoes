import { Text, View, FlatList, StatusBar, TouchableOpacity, Alert } from 'react-native';
import { Produto } from '../../componentes/Produto';
import { estilos } from './estilos';
import { Feather } from 'react-native-vector-icons'
import MaterialCommunityIcons from 'react-native-vector-icons/Feather';
import { useContext, useEffect, useState } from 'react';
import { TemaContext } from '../../contexts/TemaContext';
import { AutenticacaoContext } from '../../contexts/AutenticacaoContext';
import { ProdutosContext } from '../../contexts/ProdutosContext';
import { deletaProdutos } from '../../servicos/requisicoes/produtos';


export default function Finalizar({ navigation }) {

  const { temaEscolhido } = useContext(TemaContext)
  const { usuario } = useContext(AutenticacaoContext)
  const { quantidade, carrinho } = useContext(ProdutosContext)
  const estilo = estilos(temaEscolhido)
  const [precoTotal, setPrecoTotal] = useState(0);

  function retornaPreco() {
    let preco = 0;
    carrinho.map((carrinhoitem) => {
      preco = preco + carrinhoitem.preco
    })
    setPrecoTotal(preco);
    return preco;
  }

  useEffect(()=>{
    retornaPreco();

  })

  async function comprar(){
    const resultado = await deletaProdutos();
    if(resultado){
      Alert.alert("Compra Finalizada!")
      navigation.navigate("Principal")      
    }
  }

  return (
    <View style={estilo.container}>
      <StatusBar />

      <View style={estilo.container}>
        <View style={estilo.cardInfo}>
          <Text style={estilo.titulo}>Informações do entregador</Text>
          <Text style={estilo.titulo}>Nome: {usuario?.nome}</Text>
          <Text style={estilo.titulo}>Endereço: {usuario?.endereco}</Text>
          <Text style={estilo.titulo}>Email: {usuario?.email}</Text>
          <Text style={estilo.titulo}>Telefone: {usuario?.telefone}</Text>
        </View>
        <Text style={estilo.titulo} numberOfLines={1}>Quantidade: {carrinho.length}</Text>
        <Text style={estilo.titulo} numberOfLines={1}>Preço Total: R${precoTotal}</Text>
      </View>
      <TouchableOpacity style={estilo.botao}
        onPress={() => comprar()}>
        <Text style={estilo.botaoTexto}>Finalizar</Text>
      </TouchableOpacity>
    </View>
  );
}

