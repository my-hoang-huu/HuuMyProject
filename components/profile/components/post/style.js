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
    backgroundColor: '#CCC8C8',
    marginTop: 10,
    paddingVertical: 10,
    borderRadius: 10,
  },
  postText: {
    marginBottom: 10,
    marginLeft: '2%',
    fontWeight: '500',
  },
  postBody: {
    marginVertical: 10,
  },
});

export default styles;
