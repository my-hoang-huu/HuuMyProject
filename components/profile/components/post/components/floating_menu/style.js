import {StyleSheet} from 'react-native';
import color from './../../../../../../contains/colors.js';

const styles = StyleSheet.create({
  // modal
  modal: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    paddingVertical: 20,
    backgroundColor: color.buttonColor,
    paddingHorizontal: '4%',
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
  },
});

export default styles;
