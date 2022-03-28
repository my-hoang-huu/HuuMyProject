import {StyleSheet} from 'react-native';
import color from './../../../../../../contains/colors';

const styles = StyleSheet.create({
  //react
  reactButton: {
    marginRight: '6%',
  },
  reactButtonActive: {
    marginRight: '6%',
    borderColor: color.activeColor,
  },
  postReact: {
    marginHorizontal: '2%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leftGroup: {
    flexDirection: 'row',
  },
  reactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: '2%',
  },
  voteButton: {
    borderWidth: 1,
    paddingVertical: 11,
    borderRadius: 6,
    width: 70,
    alignItems: 'center',
  },
  textButtonActive: {
    fontWeight: 'bold',
    color: color.activeColor,
  },
  textButton: {
    fontWeight: 'normal',
    color: 'gray',
  },
  voteNumber: {},
  commentButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  commentNumber: {
    marginLeft: '8%',
  },
  tagIcon: {
    marginRight: '1%',
  },
});

export default styles;
