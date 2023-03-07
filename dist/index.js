import { View, Text, Modal, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import React, { useEffect } from 'react';
var Swal = function (_a) {
    var swal = _a.swal, setSwal = _a.setSwal, text = _a.text, backgroundcolor = _a.backgroundcolor, color = _a.color, positionFromBottom = _a.positionFromBottom, fontsize = _a.fontsize, touchOutSideClose = _a.touchOutSideClose, duration = _a.duration;
    var styles = StyleSheet.create({
        centeredView: {
            flex: 1,
            justifyContent: 'flex-end',
            marginBottom: positionFromBottom,
            alignItems: 'center',
        },
        modalView: {
            borderRadius: 10,
            width: '90%',
            paddingVertical: 20,
            paddingHorizontal: 5,
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
            fontSize: fontsize,
            lineHeight: fontsize,
            color: color,
            fontWeight: Platform.OS == 'ios' ? '700' : undefined,
        },
    });
    useEffect(function () {
        setTimeout(function () {
            swal && setSwal(false);
        }, duration);
    }, [swal]);
    return (<View>
      <Modal animationType='slide' transparent={true} visible={swal} onRequestClose={function () {
            setSwal(false);
        }}>
        <TouchableOpacity style={styles.centeredView} onPressOut={function () { return touchOutSideClose && setSwal(false); }}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>{text}</Text>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>);
};
export default Swal;
//# sourceMappingURL=index.js.map