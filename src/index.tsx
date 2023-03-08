import { View, Text, Modal, StyleSheet, Platform, Pressable } from 'react-native';
import React, { useEffect } from 'react';

export type SwalProps = {
  swal: boolean;
  setSwal: (open: boolean) => void;
  text: string;
  backgroundcolor?: string;
  color?: string;
  positionFromBottom?: number;
  fontsize?: number;
  touchOutSideClose?: boolean;
  duration?: number;
  textStyle?: {};
  button?: boolean;
  buttonText?: string;
  btnStyle?: {};
  btnFunction?: () => void;
  popup?: boolean;
};

const Swal = ({
  swal = false,
  setSwal,
  text,
  backgroundcolor = 'black',
  color = 'white',
  positionFromBottom = 80,
  fontsize = 16,
  touchOutSideClose = false,
  duration = 2000,
  textStyle,
  button = false,
  buttonText = '',
  btnStyle,
  btnFunction = () => setSwal(false),
  popup = true,
}: SwalProps): JSX.Element => {
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
      paddingHorizontal: 25,
      alignItems: 'center',
      justifyContent: button ? 'space-between' : 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
      backgroundColor: backgroundcolor,
      flexDirection: button ? 'row' : 'column',
    },
    modalText: {
      lineHeight: fontsize,
      color: color,
      fontWeight: Platform.OS == 'ios' ? '700' : undefined,
      ...textStyle,
    },
    btnText: {
      color: 'white',
      ...btnStyle,
      textDecorationLine: 'underline',
    },
  });

  useEffect(() => {
    setTimeout(() => {
      popup && swal && setSwal(false);
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
        <Pressable style={styles.centeredView} onPressOut={() => touchOutSideClose && setSwal(false)}>
          <View style={[styles.modalView]}>
            <Text style={styles.modalText}>{text}</Text>
            {button && (
              <Text style={styles.btnText} onPress={() => (button ? btnFunction() : null)}>
                {buttonText}
              </Text>
            )}
          </View>
        </Pressable>
      </Modal>
    </View>
  );
};

export default Swal;
