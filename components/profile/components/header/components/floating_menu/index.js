import React from 'react';
import {TouchableOpacity, View, Modal} from 'react-native';
// import ModalItem from '../../../../../global/floating_menu_item/index.js';
import styles from '../../../../../profile/components/post/components/floating_menu/style.js';
import ModalItem from './../../../../../global/floating_menu_item/index.js';

class HeaderFloatingMenu extends React.Component {
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
              <ModalItem icon="picture" text={'View picture'} />
              <ModalItem icon="upload" text={'Upload photo'} />
              <ModalItem icon="link" text={'Copy link'} />
            </View>
          </View>
        </TouchableOpacity>
      </Modal>
    );
  }
}

export default HeaderFloatingMenu;
