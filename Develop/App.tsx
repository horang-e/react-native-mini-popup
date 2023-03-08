import React, {useState} from 'react';
import {StyleSheet, SafeAreaView, Button, Text} from 'react-native';

import Swal from './dist';

const App = () => {
  const [swal, setSwal] = useState<boolean>(false);
  const [mod, setMode] = useState<boolean>(false);

  let text: string = 'Swal ';
  return (
    <SafeAreaView style={styles.container}>
      <Swal
        swal={swal}
        setSwal={setSwal}
        text={text}
        // backgroundcolor="#225"
        // color="white"
        // positionFromBottom={80}
        // fontsize={16}
        touchOutSideClose={true}
        // duration={3000}
        // textStyle={{fontFamily:'NotoSans'}}
        button={true}
        btnFunction={() => setMode(!mod)}
        btnStyle={{color: 'red'}}
        popup={false}
      />
      <Button title="SWAL" onPress={() => setSwal(true)} />
      {mod && <Text>mode</Text>}
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
