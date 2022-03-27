import {StyleSheet} from 'react-native';
import color from '../../../../contains/colors.js';

const styles = StyleSheet.create({
  middleButtons: {
    flexDirection: 'row',
    flex: 1,
    // backgroundColor: colorCustom.heartColor,
  },
  middleButton: {
    flex: 1,
    paddingVertical: 14,
    borderRadius: 8,
    marginHorizontal: '3%',
    marginBottom: 20,
    marginTop: 20,
    alignItems: 'center',
    backgroundColor: '#A19F9F',
  },

  textButton: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#E0DDDD',
  },

  label: {
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: '1%',
  },

  stories: {
    flexDirection: 'row',
  },
  story: {},
  storyImage: {
    borderRadius: 12,
    marginHorizontal: 5,
    marginVertical: 10,
    width: 96,
    height: 140,
    backgroundColor: '#AC9680',
  },
  // body: {},
  body: {
    marginHorizontal: '1%',
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: Colors.red,
  },
});

export default styles;
