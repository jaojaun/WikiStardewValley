import { MainNavigation } from './src/navigations';
import 'react-native-gesture-handler';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './src/config/firebase';

export default function App() {
  initializeApp(firebaseConfig);
  return (
    <MainNavigation/>
  );
}

