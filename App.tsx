import React, {useCallback, useEffect, useState} from 'react';
import { StatusBar } from 'react-native';
import {Provider} from 'react-redux';
import store, {persistor} from './src/redux';
import {PersistGate} from 'redux-persist/integration/react';
import SplashScreen from "react-native-splash-screen"; //import SplashScreen
import MainStackNavigator from './src/navigation/MainStackNavigator'
import { Theme } from './src/theme/constants';

const App = () => {
  const [isPersistLoaded, setIsPersistLoaded] = useState(false);
  const onBeforeLift = useCallback(() => {
    setIsPersistLoaded(true);
  }, []);
  useEffect(() => {
    SplashScreen.hide(); //hides the splash screen on app load.
  }, []);
  return <Provider store={store}>
          <PersistGate
            loading={null}
            onBeforeLift={onBeforeLift}
            persistor={persistor}>
            {isPersistLoaded && 
              <>
                <StatusBar barStyle = "light-content" backgroundColor = {Theme.colors.common.paleGreen} />  
                <MainStackNavigator />
              </>
            }
          </PersistGate>
        </Provider>;
};

export default App;