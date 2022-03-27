// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow strict-local
//  */
// import React from 'react';
// import type {Node} from 'react';

// import {SafeAreaView, ScrollView, useColorScheme, View} from 'react-native';

// import {Colors} from 'react-native/Libraries/NewAppScreen';
// import Header from './components/profile/components/header/index.js';
// import Body from './components/profile/components/body/index.js';
// import Post from './components/profile/components/post/index.js';

// const App: () => Node = () => {
//   const isDarkMode = useColorScheme() === 'dark';

//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//   };

//   return (
//     <SafeAreaView style={backgroundStyle}>
//       <View>
//         <ScrollView>
//           {/* <Header /> */}
//           <View height={20} />
//           {/* <Body /> */}
//           {/* <Post /> */}
//         </ScrollView>
//       </View>
//     </SafeAreaView>
//   );
// };

// export default App;

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import type {Node} from 'react';

import {SafeAreaView, ScrollView, useColorScheme, View} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import Header from './components/profile/components/header/index.js';
import Body from './components/profile/components/body/index.js';
import Post from './components/profile/components/post/index.js';
import styles from './App.components.style';

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    // backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    backgroundColor: isDarkMode ? Colors.darker : '#CACDCF',
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <View>
        <ScrollView>
          <Header />
          <View height={20} />
          <Body />
          <Post />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default App;
