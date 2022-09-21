import React from 'react';
import Screens from "./src/Screens";
import useFonts from './src/hooks/useFonts';
import { SafeAreaView } from 'react-native-safe-area-context';

const App = () => {

  const [isReady, setIsReady] = React.useState(false);

  const loadFonts = async () => {
    await useFonts();
    setIsReady(true);
  };


  React.useEffect(() => {
    loadFonts()
  }, []);


  if (!isReady) return null;

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <Screens />
    </SafeAreaView>
  );
};

export default App;
