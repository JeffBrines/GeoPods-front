// Basic Import
import React from 'react';
import {View} from 'react-native';
import globalStyles from './globalStyles';
import RestorePassword from './src/screens/beforeAuth/RestorePassword';
import ScreenLogIn from './src/screens/beforeAuth/screenLogIn/index';
import SignUp from './src/screens/beforeAuth/SignUp';

const App = () => {
  return (
    <View style={globalStyles.app}>
      {/* <ScreenLogIn /> */}
      {/* <RestorePassword /> */}
      <SignUp />
    </View>
  );
};

export default App;
