import React from 'react';
import {TouchableOpacity, View, Modal} from 'react-native';
import ModalItem from '../../../../../global/floating_menu_item/index.js';
import styles from './style.js';

class PostFloatingMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
    };
  }

  show = () => {
    this.setState({isVisible: true});
  };

  render() {
    return (
      <Modal
        visible={this.state.isVisible}
        transparent={true}
        animationType={'slide'}>
        <TouchableOpacity
          onPress={() => this.setState({isVisible: !this.state.isVisible})}>
          <View style={{height: '100%'}}>
            <View style={styles.modal}>
              <ModalItem icon="pushpino" text={'Pin post'} />
              <ModalItem
                icon="bells"
                text={'Turn off notifications for this post'}
              />
              <ModalItem icon="lock" text={'Edit privacy'} />
              <ModalItem icon="delete" text={'Move to Recycle bin'} />
              <ModalItem icon="link" text={'Copy link'} />
            </View>
          </View>
        </TouchableOpacity>
      </Modal>
    );
  }
}

export default PostFloatingMenu;
