import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import Header from './Header';
import { useNavigation } from '@react-navigation/native';
import Voltar from './Voltar';
import PontoTuristico from './PontoTuristico';


const Home = ( ) => {
 
  const navigation = useNavigation();



 
  
  const [alunos, setAlunos] = useState([
    { nome: 'Praia de Candeias'},
    { nome: 'Praia de Piedade'},
    { nome: 'Praia do Paiva'},
    { nome: 'Lagoa Azul'},
  ]);

  return (
    <>
      <Header/>
      <Voltar titulo={"Pontos Turísticos"} first={true}/>
      <View style={{ flex: 1 }}>
        
        <View style={styles.mainContainer}>
            <View style={styles.container_alunos}>
              <View style={{ width: '100%', flex:1 }}>
                <FlatList
                  data={alunos}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={({ item }) => (
                    <TouchableOpacity 
                      style={styles.button_aluno} 
                      onPress={() => navigation.navigate('PontoTuristico', { ponto: item.nome })}
                      
                    >
                      <View style={styles.alunoRow}>
                        <View>
                          <Text style={styles.text_button_escola}>{item.nome}</Text>
                        </View>
                        <TouchableOpacity>
                          <Text>Ver mais</Text>
                        </TouchableOpacity>
                      </View>
                    </TouchableOpacity>
                  )}
                />
              </View>
            </View>
        </View>
      </View>
  </>
  );
};

export default Home;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
  },
  paragrafo: {
    marginLeft: '5%'
  },
  statusDemonstracao: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  container_alunos: {
    flex: 1,
    flexDirection: 'column',
    width: '90%',
    alignItems: 'center',
  },
  projetoFluencia: {
    alignItems: 'flex-start',
    marginLeft: '5%',
    marginTop: '5%',
    fontWeight: 'bold'
  },
  button_aluno: {
    borderWidth: 1,
    borderRadius: 20,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    width: '90%',
    height: 65,
    padding: 10,
    gap: 5,
    marginTop: '2.5%',
    marginBottom: '2.5%',
    marginLeft: '5%'
  },
  text_button_escola: {
    textTransform: 'uppercase',
  },
  telaBotoes: {
    backgroundColor: '#FFF',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  botao: {
    borderRadius : 10,
    borderBottomColor : '#000',
    borderWidth: 1,
    flexDirection : 'row',
    justifyContent : 'center',
    alignItems : 'center',
    alignSelf : 'center',
    paddingStart : '5%',
    paddingEnd : '5%',
    padding: 16,
    marginBottom :'2%',
    backgroundColor : '#FFF',
    gap: 5,
    width : '80%',
  },
  botaoFechar: {
    backgroundColor: '#FF0000',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  textoBotao: {
    color: '#000',
    fontWeight: 'bold',
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    width: '65%',
    height: '32%',
    backgroundColor: 'white',
    borderRadius: 10,
    
  },
  closeText: {
    marginTop: 20,
    width: '35%',
    height: '38%',
    backgroundColor: '#0A6187',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  botao_cadastrar_aluno: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#355F3A',
    width: '100%',
    gap: 10,
    padding: 5,
    height: '58%'
  },
  txt_cadastro_aluno: {
      color: '#FFF',
  },
  modalCadastro: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    alignSelf: 'center', // Centraliza o modal
  },
  titulo: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 20,
      textAlign: 'center',
  },
  input: {
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
      marginBottom: 15,
      padding: 10,
  },
  botoes: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: '2%'
  },
  alunoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  statusRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: '100%',
  },
  statusLabel: {
    fontWeight: 'normal',
    fontSize: 14,
  },
  statusEmpty: {
    fontSize: 14,
  },
});
