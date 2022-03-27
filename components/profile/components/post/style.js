import {StyleSheet} from 'react-native';
import color from '../../../../contains/colors.js';

const styles = StyleSheet.create({
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
  label: {
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: '1%',
  },
  // Post
  post: {
    // backgroundColor: 'red',
    marginTop: 40,
  },
  postText: {
    // marginBottom: 20,
    marginLeft: '2%',
    fontWeight: '500',
  },
  postBody: {
    marginVertical: 20,
  },
});

export default styles;
