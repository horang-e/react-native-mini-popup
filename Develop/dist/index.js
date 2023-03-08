var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { View, Text, Modal, StyleSheet, Platform, Pressable } from 'react-native';
import React, { useEffect } from 'react';
var Swal = function (_a) {
    var _b = _a.swal, swal = _b === void 0 ? false : _b, setSwal = _a.setSwal, text = _a.text, _c = _a.backgroundcolor, backgroundcolor = _c === void 0 ? 'black' : _c, _d = _a.color, color = _d === void 0 ? 'white' : _d, _e = _a.positionFromBottom, positionFromBottom = _e === void 0 ? 80 : _e, _f = _a.fontsize, fontsize = _f === void 0 ? 16 : _f, _g = _a.touchOutSideClose, touchOutSideClose = _g === void 0 ? false : _g, _h = _a.duration, duration = _h === void 0 ? 2000 : _h, textStyle = _a.textStyle, _j = _a.button, button = _j === void 0 ? false : _j, _k = _a.buttonText, buttonText = _k === void 0 ? '' : _k, btnStyle = _a.btnStyle, _l = _a.btnFunction, btnFunction = _l === void 0 ? function () { return setSwal(false); } : _l, _m = _a.popup, popup = _m === void 0 ? true : _m;
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
        modalText: __assign({ lineHeight: fontsize, color: color, fontWeight: Platform.OS == 'ios' ? '700' : undefined }, textStyle),
        btnText: __assign(__assign({ color: 'white' }, btnStyle), { textDecorationLine: 'underline' }),
    });
    useEffect(function () {
        setTimeout(function () {
            popup && swal && setSwal(false);
        }, duration);
    }, [swal]);
    return (<View>
      <Modal animationType='slide' transparent={true} visible={swal} onRequestClose={function () {
            setSwal(false);
        }}>
        <Pressable style={styles.centeredView} onPressOut={function () { return touchOutSideClose && setSwal(false); }}>
          <View style={[styles.modalView]}>
            <Text style={styles.modalText}>{text}</Text>
            {button && (<Text style={styles.btnText} onPress={function () { return (button ? btnFunction() : null); }}>
                {buttonText}
              </Text>)}
          </View>
        </Pressable>
      </Modal>
    </View>);
};
export default Swal;
//# sourceMappingURL=index.js.map