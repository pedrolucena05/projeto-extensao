import * as Font from 'expo-font';

const customFonts = {
  'Poppins_400Regular': require('./Poppins-Regular.ttf'), // Certifique-se de que o caminho do arquivo .ttf está correto
  // Adicione outras variações da fonte se necessário
};

const Fonts = async () => {
  await Font.loadAsync(customFonts);

  // A configuração de fonte global é opcional e depende do seu uso
  // Aqui, estamos apenas carregando as fontes
};

export default Fonts;
