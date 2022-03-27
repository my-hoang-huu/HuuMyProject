import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import styles from './style.js';
import {TouchableOpacity, Image, Text, View} from 'react-native';
// import PostFloatingMenu from './../../../header/components/floating_menu/index.js';
import PostFloatingMenu from './../floating_menu/index.js';

class PostThreeDots extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: true,
    };
  }

  functionOne() {
    this.setState({isActive: !this.state.isActive});
  }

  functionTwo() {
    alert(this.state.isActive);
  }

  functionCombined() {
    this.functionOne();
    this.functionTwo();
  }

  render() {
    let popupRef = React.createRef();
    return (
      <View>
        <TouchableOpacity
          // onPress={() => this.setState({isActive: !this.state.isActive})}
          onPress={() => popupRef.show()}
          style={[styles.dotsIcon]}>
          <Entypo name="dots-three-horizontal" size={20} color="black" />
        </TouchableOpacity>
        <PostFloatingMenu ref={target => (popupRef = target)} />
      </View>
    );
  }
}

function PostHeader() {
  return (
    <TouchableOpacity>
      <View style={styles.postHeader}>
        <View style={[styles.postUser]}>
          <Image
            style={styles.postProfileImg}
            source={require('../../../../../../assets/images/profileImg.jpg')}
          />
          <View>
            <Text style={styles.label}>Profile name</Text>
            <Text>@Username</Text>
          </View>
        </View>
        <PostThreeDots />
      </View>
    </TouchableOpacity>
  );
}

export default PostHeader;
