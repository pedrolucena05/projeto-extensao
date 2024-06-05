import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import Voltar from './Voltar';
import { useRoute } from '@react-navigation/native';
import Header from './Header';

const PontoTuristico = () => {
  const route = useRoute();
  const { ponto } = route.params;

  const [descricao, setDescricao] = useState('');
  const [imagens, setImagens] = useState([]);

  useEffect(() => {
    let desc = "";
    let imgs = [];

    if (ponto === "Praia de Candeias") {
      desc = `A Praia de Candeias é uma bela praia situada na região metropolitana do Recife, a praia é conhecida por suas águas calmas, faixa de areia clara e extensa, além de um ambiente propício para o lazer e o turismo.

Características da Praia de Candeias:
      
As águas da Praia de Candeias são geralmente calmas, tornando-a ideal para famílias com crianças e para quem gosta de nadar sem enfrentar grandes ondas. A presença de recifes naturais também contribui para a tranquilidade das águas, criando piscinas naturais durante a maré baixa.
      
A faixa de areia é ampla e clara, oferecendo bastante espaço para atividades recreativas, como vôlei de praia, futebol e caminhadas. Os visitantes podem relaxar sob o sol ou alugar cadeiras e guarda-sóis.
      
A praia é bem servida por barracas e quiosques que oferecem bebidas, petiscos e pratos típicos da culinária pernambucana, como peixes e frutos do mar. Além disso, há opções de restaurantes e bares próximos à orla, proporcionando um ambiente agradável para os turistas.`;

      imgs = [
        require('../Candeias/Candeias1.jpg'),
        require('../Candeias/Candeias2.jpg'),
        require('../Candeias/Candeias3.jpg'),
        require('../Candeias/Candeias4.jpg')
      ];
    } else if (ponto === "Praia de Piedade") {
      desc = `A Praia de Piedade, é uma das praias mais conhecidas e frequentadas da região metropolitana do Recife. Com uma combinação de beleza natural e infraestrutura urbana, a Praia de Piedade é um destino popular tanto para moradores locais quanto para turistas.

Características da Praia de Piedade:
      
A Praia de Piedade possui uma faixa de areia dourada e fina, margeada por coqueiros que proporcionam sombra e um cenário tropical. O mar é de um azul profundo, com ondas moderadas, e é possível encontrar áreas mais calmas devido aos recifes naturais.
      
As águas da Praia de Piedade variam entre trechos de mar calmo, protegidos por recifes, e áreas com ondas mais fortes, tornando-a adequada para diferentes tipos de banhistas. No entanto, é importante observar as áreas sinalizadas devido à presença de tubarões, especialmente para os que desejam nadar em mar aberto.
      
A praia é cercada por uma área urbana bem desenvolvida, oferecendo uma ampla gama de serviços e comodidades. Existem muitos quiosques, bares e restaurantes ao longo da orla, que servem desde petiscos e bebidas até pratos da culinária local, como peixes e frutos do mar`;

      imgs = [
        require('../Piedade/Piedade1.jpg'),
        require('../Piedade/Piedade2.jpeg'),
        require('../Piedade/Piedade3.jpg'),
        require('../Piedade/Piedade4.jpg')
      ];
    } else if (ponto === "Praia do Paiva") {
      desc = `A Praia do Paiva é uma das mais belas e exclusivas praias do município de Jaboatão dos Guararapes. Conhecida por sua tranquilidade e beleza natural, a Praia do Paiva é um destino privilegiado que oferece uma experiência única para os visitantes.

Características da Praia do Paiva:
      
A Praia do Paiva é cercada por uma exuberante vegetação nativa, incluindo coqueiros e áreas de mata atlântica preservada. A areia é clara e fina, criando um contraste deslumbrante com o azul do mar.
      
As águas da Praia do Paiva são geralmente calmas e cristalinas, perfeitas para nadar e relaxar. Durante a maré baixa, formam-se piscinas naturais entre os recifes, proporcionando um ambiente seguro e agradável para crianças e adultos.
      
A Praia do Paiva é conhecida por seu ambiente mais reservado e sofisticado. Ela faz parte de um condomínio de alto padrão, o que contribui para a sua preservação e manutenção. É um local ideal para quem busca tranquilidade e privacidade.`;

      imgs = [
        require('../Paiva/Paiva1.jpg'),
        require('../Paiva/Paiva2.jpg'),
        require('../Paiva/Paiva3.jpg'),
        require('../Paiva/Paiva4.jpg')
      ];
    } else {
      desc = `A Lagoa Azul, é um encantador ponto turístico conhecido por sua beleza natural e águas tranquilas. Localizada no bairro de Barra de Jangada, esta lagoa é um refúgio sereno que atrai moradores locais e visitantes em busca de um ambiente natural e relaxante.

Características da Lagoa Azul:
      
A Lagoa Azul é cercada por uma vegetação exuberante, composta por árvores e plantas nativas, que contribuem para a sensação de tranquilidade e isolamento. A água da lagoa tem um tom azul esverdeado, refletindo a vegetação ao redor e criando um visual pitoresco.
      
As águas são geralmente calmas e límpidas, ideais para um mergulho refrescante. A tranquilidade das águas também torna o local perfeito para atividades como stand-up paddle e caiaque.
      
Conhecida por sua atmosfera tranquila e relaxante. É um local popular para quem deseja fugir da agitação urbana e desfrutar de um momento de paz em meio à natureza. Muitas pessoas visitam a lagoa para relaxar, ler um livro ou simplesmente apreciar a paisagem.`;

      imgs = [
        require('../Lagoa/lagoa-azul-1.jpg'),
        require('../Lagoa/lagoa-azul-2.jpg'),
        require('../Lagoa/lagoa-azul-3.jpg'),
        require('../Lagoa/lagoa-azul-4.jpg')
      ];
    }

    setDescricao(desc);
    setImagens(imgs);
  }, [ponto]);

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, marginBottom: 20 }}>
      <Header></Header>
      <View style={{ flex: 1, width: '90%', alignSelf: 'center' }}>
        <Voltar titulo={ponto} first={false} />
        <Text style={styles.descricao}>{descricao}</Text>
        <Text style={{marginTop: 20, marginBottom: 20, alignSelf: 'center', fontWeight: 'bold', fontSize: 20}}>Fotos</Text>
        <View style={styles.imageContainer}>
          {imagens.map((imagem, index) => (
            <Image key={index} source={imagem} style={styles.image} />
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  descricao: {
    marginVertical: 10,
    fontSize: 16,
    textAlign: 'justify',
  },
  imageContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  image: {
    width: '48%', // Ajuste a largura para garantir espaçamento entre as imagens
    height: 200,
    marginVertical: 5,
  },
});

export default PontoTuristico;
