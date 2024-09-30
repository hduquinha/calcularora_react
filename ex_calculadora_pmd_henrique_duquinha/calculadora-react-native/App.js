import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [valoratual, setValorAtual] = useState("");
  const [resultado, setResultado] = useState("");

  const calcular = () => {
    try {
      const res = eval(valoratual);
      setResultado(res);
    } catch (e) {
      setResultado("Erro");
    }
  };

  const atualizarValorAtual = (val) => {
    setValorAtual(valoratual + val);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.resultado}>{resultado || valoratual || "0"}</Text>
      <View style={styles.botoes}>
        <View style={styles.linha}>
          <Pressable onPress={() => atualizarValorAtual("1")} style={styles.botao}>
            <Text style={styles.textoBotao}>1</Text>
          </Pressable>
          <Pressable onPress={() => atualizarValorAtual("2")} style={styles.botao}>
            <Text style={styles.textoBotao}>2</Text>
          </Pressable>
          <Pressable onPress={() => atualizarValorAtual("3")} style={styles.botao}>
            <Text style={styles.textoBotao}>3</Text>
          </Pressable>
          <Pressable onPress={() => atualizarValorAtual("+")} style={styles.botao}>
            <Text style={styles.textoBotao}>+</Text>
          </Pressable>
        </View>
        <View style={styles.linha}>
          <Pressable onPress={() => atualizarValorAtual("4")} style={styles.botao}>
            <Text style={styles.textoBotao}>4</Text>
          </Pressable>
          <Pressable onPress={() => atualizarValorAtual("5")} style={styles.botao}>
            <Text style={styles.textoBotao}>5</Text>
          </Pressable>
          <Pressable onPress={() => atualizarValorAtual("6")} style={styles.botao}>
            <Text style={styles.textoBotao}>6</Text>
          </Pressable>
          <Pressable onPress={() => atualizarValorAtual("-")} style={styles.botao}>
            <Text style={styles.textoBotao}>-</Text>
          </Pressable>
        </View>
        <View style={styles.linha}>
          <Pressable onPress={() => atualizarValorAtual("7")} style={styles.botao}>
            <Text style={styles.textoBotao}>7</Text>
          </Pressable>
          <Pressable onPress={() => atualizarValorAtual("8")} style={styles.botao}>
            <Text style={styles.textoBotao}>8</Text>
          </Pressable>
          <Pressable onPress={() => atualizarValorAtual("9")} style={styles.botao}>
            <Text style={styles.textoBotao}>9</Text>
          </Pressable>
          <Pressable onPress={() => atualizarValorAtual("*")} style={styles.botao}>
            <Text style={styles.textoBotao}>*</Text>
          </Pressable>
        </View>
        <View style={styles.linha}>
          <Pressable onPress={() => atualizarValorAtual("0")} style={styles.botao}>
            <Text style={styles.textoBotao}>0</Text>
          </Pressable>
          <View style={styles.botaoVazio}></View>
          <Pressable onPress={() => calcular()} style={styles.botao}>
            <Text style={styles.textoBotao}>=</Text>
          </Pressable>
          <Pressable onPress={() => atualizarValorAtual("/")} style={styles.botao}>
            <Text style={styles.textoBotao}>/</Text>
          </Pressable>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
  },
  resultado: {
    fontSize: 48,
    marginBottom: 20,
  },
  botoes: {
    flexDirection: 'column',
  },
  linha: {
    flexDirection: 'row',
  },
  botao: {
    padding: 20,
    margin: 10,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 60,
    borderRadius: 10,
  },
  textoBotao: {
    fontSize: 24,
  },
  botaoVazio: {
    padding: 20,
    margin: 10,
    minWidth: 60,
  },
});
