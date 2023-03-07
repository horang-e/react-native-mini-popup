import React, {useState} from 'react';
import {StyleSheet, SafeAreaView, Button} from 'react-native';

import Swal from './dist';

const App = () => {
  const [swal, setSwal] = useState<boolean>(false);
  let text: string = 'Swal ';
  return (
    <SafeAreaView style={styles.container}>
      <Swal
        swal={swal}
        setSwal={setSwal}
        text={text}
        backgroundcolor="pink"
        color="white"
        positionFromBottom={80}
        fontsize={16}
        touchOutSideClose={true}
        duration={2000}
      />
      <Button title="SWAL" onPress={() => setSwal(true)} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
