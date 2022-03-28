import {StyleSheet} from 'react-native';
const profileRadius = 150;

const styles = StyleSheet.create({
  header: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    width: profileRadius,
    height: profileRadius,
    borderRadius: 100,
    marginTop: -(profileRadius / 2),
  },
  coverImage: {
    width: '100%',
    height: 200,
  },
  settingIcon: {
    zIndex: 4,
    position: 'absolute',
    right: 0,
    top: 20,
    padding: 20,
  },
  profileImage: {
    width: profileRadius - 6,
    height: profileRadius - 6,
    borderRadius: 100,
  },
  profileName: {
    marginTop: 14,
    fontSize: 24,
    fontWeight: 'bold',
  },
  userName: {
    fontSize: 18,
    // fontWeight: 'bold',
  },
});

export default styles;
