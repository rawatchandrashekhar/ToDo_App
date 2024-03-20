/**
 * @format
 */

import { AppRegistry, StatusBar } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { Provider } from 'react-redux';
import { store } from './src/storage/redux/store';
import { COLORS } from './src/assets/colors/colors';

const root = () => {
    return (<Provider store={store}>
        <StatusBar
            backgroundColor={COLORS.DarkBackground}
        />
        <App />
    </Provider>)
}

AppRegistry.registerComponent(appName, () => root);
