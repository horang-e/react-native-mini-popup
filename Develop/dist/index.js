import { View, Text, Modal, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import React, { useEffect } from 'react';
var Swal = function (_a) {
    var _b = _a.swal, swal = _b === void 0 ? false : _b, setSwal = _a.setSwal, text = _a.text, _c = _a.backgroundcolor, backgroundcolor = _c === void 0 ? 'black' : _c, _d = _a.color, color = _d === void 0 ? 'white' : _d, _e = _a.positionFromBottom, positionFromBottom = _e === void 0 ? 80 : _e, _f = _a.fontsize, fontsize = _f === void 0 ? 16 : _f, _g = _a.touchOutSideClose, touchOutSideClose = _g === void 0 ? false : _g, _h = _a.duration, duration = _h === void 0 ? 2000 : _h;
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