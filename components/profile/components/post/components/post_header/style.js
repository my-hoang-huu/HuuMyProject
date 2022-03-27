import {StyleSheet} from 'react-native';
// import color from '../../../../contains/colors.js';

const styles = StyleSheet.create({
  postHeader: {
    marginHorizontal: '2%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 18,
  },
  postUser: {
    flexDirection: 'row',
  },
  postProfileImg: {
    borderRadius: 100,
    width: 50,
    height: 50,
    marginRight: 10,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: '1%',
  },
  dotsIcon: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
});

export default styles;
