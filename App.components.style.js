import {StyleSheet} from 'react-native';
import color from '../../../../contains/colors.js';

const mainStyles = StyleSheet.create({
  backgroundStyle: {color: color.backgroundColor},
  label: {
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: '1%',
  },
  flex1: {
    flex: 1,
  },
  marginHorizontal10: {
    marginHorizontal: 10,
  },
  marginVertical10: {
    marginVertical: 10,
  },
  column: {
    flexDirection: 'column',
  },
  row: {
    flexDirection: 'row',
  },
});
export default mainStyles;
