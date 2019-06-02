/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Contact from './src/components/Contact'
import MyList from './src/MyList';
import Card from './src/Card';


AppRegistry.registerComponent(appName, () => Card);
