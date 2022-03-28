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
    // marginBottom: 20,
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
    // borderColor: color.blackColor,
    paddingVertical: 11,
    borderRadius: 6,
    width: 70,
    alignItems: 'center',
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
