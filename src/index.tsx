import { View, Text, Modal, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import React, { useEffect } from 'react';

const Swal = ({
  swal,
  setSwal,
  text,
  backgroundcolor,
  color,
  positionFromBottom,
  fontsize,
  touchOutSideClose,
  duration
}): JSX.Element => {
  const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: 'flex-end',
      marginBottom: positionFromBottom,
      alignItems: 'center',
    },
    modalView: {
      borderRadius: 10,
      // padding: 35,
      width: '90%',
      paddingVertical: 20,
      paddingHorizontal:5,
      alignItems: 'center',
      justifyContent: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
      backgroundColor: backgroundcolor,
    },
    modalText: {
      // fontFamily: '',
      fontSize: fontsize,
      lineHeight: fontsize,
      color: color,
      fontWeight: Platform.OS == 'ios' ? '700' : undefined,
    },
  });

  useEffect(() => {
    setTimeout(() => {
      swal && setSwal(false);
    }, duration);
  }, [swal]);

  return (
    <View>
      <Modal
        animationType='slide'
        transparent={true}
        visible={swal}
        onRequestClose={() => {
          setSwal(false);
        }}>
        <TouchableOpacity style={styles.centeredView} onPressOut={() => touchOutSideClose && setSwal(false)}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>{text}</Text>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

export default Swal;
