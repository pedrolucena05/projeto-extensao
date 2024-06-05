import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import * as Font from 'expo-font';
import { useNavigation } from '@react-navigation/native';

const Voltar = ({ titulo, first }) => {
  const navigation = useNavigation();
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    const loadFont = async () => {
      await Font.loadAsync({
        Poppins_400Regular: require('./Poppins-Regular.ttf'),
      });
      setFontLoaded(true);
    };

    loadFont();
  }, []);

  if (!fontLoaded) {
    return null; // Retorna null enquanto a fonte está sendo carregada
  }

  return (
    <View style={styles.container}>
      <View style={styles.package}>
        <TouchableOpacity onPress={() => first ? null : navigation.goBack()}>
          { first ? <View style={{width:15, height: 15}}></View> : <AntDesign name="arrowleft" size={28} color="black" style={styles.icon} /> }
        </TouchableOpacity>
        <Text style={styles.text}>{titulo}</Text>
        <View style={styles.placeholder} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor : '#f2f2f2',
    height: 60,
    
  },
  package: {
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    alignSelf: 'center',
    height: '100%'
  },
  icon: {
    marginLeft: '5%',
  },
  text: {
    fontFamily: 'Poppins_400Regular',
    flex: 1,
    textAlign: 'center',
    fontSize: 15,
    lineHeight: 55,
  },
  placeholder: {
    width: '10%',
    height: '100%',
    backgroundColor: '#f2f2f2',
  },
});

export default Voltar;
